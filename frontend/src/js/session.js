const sessionNameInput = document.querySelector("#session-name-input");
const sessionTimeInput = document.querySelector("#session-time-input");
const sessionPriceInput = document.querySelector("#session-price-input");
const sessionCourseNameInput = document.querySelector(
  "#session-coursename-input"
);
const AddNewSessionBtn = document.querySelector(
  ".session-form__add-new-session-btn"
);
const removeSessionBtn=document.querySelector("#remove-session-btn")
const sessionsContainer=document.querySelector(".sessions-container")
const modalContainer=document.querySelector(".modal-container")
const backdrop=document.querySelector(".backdrop")
// ! Functions
 async function getAllSession(){
    const {data}=await axios.get("http://localhost:3000/api/sessions")
    sessionsContainer.innerHTML=""
    data.forEach(session=>{
        let hour=Math.floor(session.time/60).toString();
        let minute=Math.floor(session.time%60).toString();
        sessionsContainer.insertAdjacentHTML("beforeend",`
    <li class="session-box" onclick="showDeleteSessionModal('${session._id}')">
    <div class="session-name">
      <span >Session Name :</span>
      <span> ${session.title}</span>
    </div>
    <div class="session-detail">
      <span class="session-price">${session.isFree?'free':"not free"}</span>
      <span class="session-time">${hour.padStart(2,"0")}:${minute.padStart(2,"0")}</span>
    </div>
  </li>`)
    }
)

 }
async function createNewSession() {

  const newSession = {
    title: sessionNameInput.value,
    time: sessionTimeInput.value,
    isFree:!Boolean(Number(sessionPriceInput.value)),
    course: sessionCourseNameInput.value,
  };
 await axios.post("http://localhost:3000/api/sessions", newSession);
   getAllSession()
  clearInput()
}
function clearInput() {
  sessionNameInput.value = "";
  sessionTimeInput.value = "";
  sessionPriceInput.value = "";
  sessionCourseNameInput.value = "";
}
function showDeleteSessionModal(id){
    modalContainer.classList.add("visible");
    console.log(id)
removeSessionBtn.addEventListener("click",()=>removeSession(id))
}
function closeDeleteSessionModal(){
    modalContainer.classList.remove("visible")
}
 async function removeSession(id){

 await  axios.delete(`http://localhost:3000/api/sessions/${id}`) 
 getAllSession()
   closeDeleteSessionModal()
}
// ! Event Listener
AddNewSessionBtn.addEventListener("click",  createNewSession);
window.addEventListener("load",getAllSession)
backdrop.addEventListener("click",closeDeleteSessionModal)
