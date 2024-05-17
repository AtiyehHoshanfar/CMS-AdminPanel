const userList = document.querySelector(".user-panel__user-list");
const modalContainer = document.querySelector(".modal-container.remove");
const modalContainerEdit = document.querySelector(".modal-container.edit");
const removeUserBtns = document.querySelectorAll("#remove-user-btn");
const cancelDeleteUserBtn = document.querySelector("#cancel-delete-user-btn");
const backdrop = document.querySelector(".backdrop");
const backdropEdit = document.querySelector(".backdrop.edit");
const editUserInformationButton = document.querySelector(
  ".edit-user-information__btn"
);
const firstName = document.querySelector("#name");
const lastName = document.querySelector("#lastname");
const userName = document.querySelector("#username");
// !Function
async function getAllUser() {
  const { data } = await axios.get("http://localhost:3000/api/users");
  await console.log(data);
  userList.innerHTML = "";
  await data.forEach((user) => {
    userList.insertAdjacentHTML(
      "beforeend",
      `   
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
      <button onclick="showEditUserInformation('${user._id}')" class="user-panel__edit-btn btn--primary">
        Edit
      </button>
      <button onclick="showRemoveModal('${user._id}')" class="user-panel__remove-btn btn--primary">
        Remove
      </button>
    </div>
  </li>`
    );
  });
}
function showRemoveModal(id) {
  modalContainer.classList.add("visible");
  removeUserBtns.forEach((btn) =>
    btn.addEventListener("click", () => {
      removeUser(id);
    })
  );
}
function closeRemoveModal() {
  modalContainerEdit.classList.remove("visible");

  modalContainer.classList.remove("visible");
}
function showEditUserInformation(id){
  modalContainerEdit.classList.add("visible");
editUserInformationButton.addEventListener("click",()=>editUserInformation(id))


}
async function editUserInformation(id) {
  const newData = {
    firstName: firstName.value,
    lastName: lastName.value,
    userName: userName.value,
    profile: "/frontend/public/image/girl.png",
  };

  const response = await axios.put(
    `http://localhost:3000/api/users/${id}`,
    newData
  );
  clearInput()
  getAllUser()
  closeRemoveModal()
}
async function removeUser(id) {
  const response = await axios.delete(`http://localhost:3000/api/users/${id}`);
  await closeRemoveModal();
  await getAllUser();
}
function clearInput(){
  firstName.value=""
  lastName.value=""
  userName.value=""
}
// !Selector
document.addEventListener("DOMContentLoaded", getAllUser);
cancelDeleteUserBtn.addEventListener("click", closeRemoveModal);
backdrop.addEventListener("click", closeRemoveModal);
backdropEdit.addEventListener("click", closeRemoveModal);
