const themeButton=document.querySelector(".header__theme-btn");

themeButton.addEventListener("click",(e)=>{
    themeButton.classList.toggle("dark");
    checkMode()
})
function checkMode(){
    if(themeButton.classList.contains("dark"))
{
    console.log("dark")
    window.matchMedia('(prefers-color-scheme: dark)');
}

else {
    console.log("light")

    window.matchMedia('(prefers-color-scheme: light)')
};



}
