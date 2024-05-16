// ! Selector
const firstName = document.querySelector("#name");
const lastName = document.querySelector("#last-name");
const userName = document.querySelector("#user-name");
const password = document.querySelector("#password");
const email = document.querySelector("#email");
const editInformationBtn = document.querySelector(".edit__submit-btn");

// ! Event Listener

document.addEventListener("DOMContentLoaded", async () => {
  admins = await axios.get("http://localhost:3000/api/admins");
  if (admins == []) return null;
  enteredAdmin = admins.data.find((admin) => admin.email === emailAddress);
});
editInformationBtn.addEventListener("click", () =>
  editInformation(enteredAdmin._id)
);
const urlParams = new URLSearchParams(window.location.search);
const emailAddress = urlParams.get("email");

// ! Function

async function editInformation(id) {
  const newData = {
    firstName: firstName.value,
    lastName: lastName.value,
    userName: userName.value,
    password: password.value,
    email: email.value,
  };
try{
  await axios.put(`http://localhost:3000/api/admins/${id}`, newData);
}
catch (error){
  console.log(error.message)
}
clearInput()
}
function clearInput(){
  firstName.value=""
  lastName.value=""
  userName.value=""
  password.value=""
  email.value=""
}