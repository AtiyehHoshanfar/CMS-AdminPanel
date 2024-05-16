const email = document.querySelector("#email");
const password = document.querySelector("#password");
const signinBtn = document.querySelector("#create-user-btn");

signinBtn.addEventListener("click", findUser);
let admins = [];
document.addEventListener("DOMContentLoaded", async () => {
  admins = await axios.get("http://localhost:3000/api/admins");
});
function findUser() {
  if (admins == []) return null;
  const enteredAdmin = admins.data.find(
    (admin) => admin.email === email.value && admin.password === password.value
  );
  if (enteredAdmin)
    location.href = `/frontend/src/pages/userPanel.html?email=${enteredAdmin.email}`;
}
