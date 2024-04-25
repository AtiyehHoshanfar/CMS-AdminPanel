const firstPageSigninBtn=document.querySelector(".first-page__signin-btn")
const firstPageSignupBtn=document.querySelector(".first-page__signup-btn")

firstPageSigninBtn.addEventListener("click",()=>{
    location.href="http://localhost:5500/frontend/src/pages/signin.html"
})

firstPageSignupBtn.addEventListener("click",()=>{
    location.href="http://localhost:5500/frontend/src/pages/signup.html"
})
