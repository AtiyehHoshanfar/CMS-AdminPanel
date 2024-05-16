const themeButton = document.querySelector(".header__theme-btn");
const html = document.querySelector("html");
let isDark;
themeButton.addEventListener("click", () => {
    isDark = !isDark;
  isDark
    ? localStorage.setItem("theme", "dark")
    : localStorage.setItem("theme", "light");
  isDark ? html.classList.add("dark") : html.classList.remove("dark");
});
window.addEventListener("load", () => {
    const theme=JSON.stringify(localStorage.getItem("theme"))
  isDark = theme == '"dark"';
  isDark ? html.classList.add("dark") : html.classList.remove("dark");


});
