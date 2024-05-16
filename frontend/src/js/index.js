let admins = [];
let enteredAdmin;
const goToEditInformationPage=document.querySelector(".admin-information__edit-btn")
goToEditInformationPage.addEventListener("click",()=>{
    location.href=`/frontend/src/pages/editInformation.html?email=${enteredAdmin.email}`
})

document.addEventListener("DOMContentLoaded", async () => {
    admins = await axios.get("http://localhost:3000/api/admins");
    const urlParams = new URLSearchParams(window.location.search);
const emailAddress = urlParams.get('email');

    if (admins == []) return null;
    enteredAdmin = admins.data.find((admin) => admin.email === emailAddress
   );
  });


  
  