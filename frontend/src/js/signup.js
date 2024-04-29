const firstNameInput = document.querySelector("#firstname-input");
const lastNameInput = document.querySelector("#lastname-input");
const userNameInput = document.querySelector("#username-input");
const imageInput = document.querySelector("#image-input input");
const createUserBtn = document.querySelector("#create-user-btn");

createUserBtn.addEventListener("click", (e) => createNewUser(e));

async function createNewUser(e) {
  e.preventDefault();
  const newAdmin = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    userName: userNameInput.value,
    profile: "/frontend/public/image/girl.png",
  };
  const response = await axios.post(
    "http://localhost:3000/api/users/",
    newAdmin
  );
   console.log(response)
  clearInputs();
  location.href="http://localhost:5500/frontend/src/pages/userPanel.html"
}

function clearInputs() {
  firstNameInput.value = "";
  lastNameInput.value = "";
  userNameInput.value = "";
}

