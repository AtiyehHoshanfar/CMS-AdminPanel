const userList=document.querySelector(".user-panel__user-list")
const modalContainer=document.querySelector(".modal-container")
const removeUserBtns=document.querySelectorAll("#remove-user-btn")
const cancelDeleteUserBtn=document.querySelector("#cancel-delete-user-btn")
const backdrop=document.querySelector(".backdrop")

// !Function
async function getAllUser(){
   const {data}=await axios.get("http://localhost:3000/api/users") 
  await  console.log(data)
  userList.innerHTML=""
 await data.forEach(user=>{
    userList.insertAdjacentHTML("beforeend",`   
<li class="user-panel__user-information">
    <img
      class="user-panel__user-image"
      src=${user.profile}
      alt=""
    />
    <div class="user-panel__username">
      <span class="user-panel__first-name">${user.firstName}</span>
      <span class="user-panel__last-name">${user.lastName}</span>
    </div>
    <div class="user-panel__btns">
      <button onclick="editUserInformation('${user._id}')" class="user-panel__edit-btn btn--primary">
        Edit
      </button>
      <button onclick="showRemoveModal('${user._id}')" class="user-panel__remove-btn btn--primary">
        Remove
      </button>
    </div>
  </li>`)
  })
}
function showRemoveModal(id){
    modalContainer.classList.add("visible")
    removeUserBtns.forEach(btn=>btn.addEventListener("click",()=>{
        removeUser(id)
    }))

}
function closeRemoveModal(){
    modalContainer.classList.remove("visible")

}
function editUserInformation(){
location.href="http://localhost:5500/frontend/src/pages/editInformation"

}
async function removeUser(id){
    const response=await axios.delete(`http://localhost:3000/api/users/${id}`)
    await  closeRemoveModal()
  await  getAllUser()


}

// !Selector
document.addEventListener("DOMContentLoaded",getAllUser)
cancelDeleteUserBtn.addEventListener("click",closeRemoveModal)

backdrop.addEventListener("click",closeRemoveModal)