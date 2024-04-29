const addCourseButton = document.querySelector("#add-course-btn");
const cancelAddCourseButton = document.querySelector("#cancel-add-course-btn");
const backdrop = document.querySelector(".backdrop");
const modalContainer = document.querySelector(".modal-container");
const addNewCourseButton = document.querySelector("#add-new-course-btn");
const titleInput = document.querySelector("#title-input");
const bodyInput = document.querySelector("#body-input");
const timeInput = document.querySelector("#time-input");
const priceInput = document.querySelector("#price-input");
const studentsInput = document.querySelector("#student-input");
const categoryInput = document.querySelector("#category-input");
const imageInput = document.querySelector("#cover-input input");
const inputText=document.querySelector(".change-image__text")
const coursePanelCourses=document.querySelector(".course-panel__courses")
// ! Event Listener

addCourseButton.addEventListener("click", addNewCourse);
cancelAddCourseButton.addEventListener("click", closeAddNewCourseModal);
backdrop.addEventListener("click", closeAddNewCourseModal);
addNewCourseButton.addEventListener("click", showAddNewCourseModal);

// ! Function

async function addNewCourse() {
  const newCourse = {
    title: titleInput.value,
    body: bodyInput.value,
    time: timeInput.value,
    price: priceInput.value,
    students: Number(studentsInput.value),
    category: categoryInput.value,
    cover:"/frontend/public/image/face-detection2.jpg",
  };
  inputText.addEventListener("click",()=>{
    console.log(URL.createObjectURL(imageInput.files[0]))
    newCourse.cover= URL.createObjectURL(imageInput.files[0])
})
console.log(newCourse)
  const response = await axios.post(
    "http://localhost:3000/api/courses",
    newCourse
  );
  clearInputs()
   closeAddNewCourseModal();
 getAllCourse()
}
async function getAllCourse(){
    const{data}= await axios.get("http://localhost:3000/api/courses")
    coursePanelCourses.innerHTML=""
    data.forEach(course=>coursePanelCourses.insertAdjacentHTML("beforeend",`
    <li class="course-panel__course">
    <img
      class="course-panel__course-image"
      src="/frontend/public/image/face-detection2.jpg"
      alt=${course.title}
    />
    <div class="course-panel__course-description">
      <div>
        <h2 class="course-panel__course-title">
         ${course.title}
        </h2>
        <p class="course-panel__course-content">
        ${course.body}
        </p>
      </div>
      <!-- ! course box footer -->
      <ul class="course-panel__course-detail">
        <li class="course-panel__item">
          <i class="fa-solid fa-sack-dollar"></i>
          <span class="">${course.price}</span>
        </li>
        <li class="course-panel__item">
          <i class="fa-regular fa-folder-open"></i>
          <span class="">${course.category}</span>
        </li>
      </ul>
    </div>
  </li>`))
}

function closeAddNewCourseModal() {
  modalContainer.classList.remove("visible");
}
function showAddNewCourseModal() {
  modalContainer.classList.add("visible");
}

function clearInputs() {
  titleInput.value = "";
  bodyInput.value = "";
  timeInput.value = "";
  priceInput.value = "";
  studentsInput.value = "";
  categoryInput.value = "";
}

window.addEventListener("load",getAllCourse)


console.log(inputText)