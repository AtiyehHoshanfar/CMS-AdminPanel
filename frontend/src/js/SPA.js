import routes from "./routes.js";
document.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.children[0].classList.contains("nav__link")) {
    let location = e.target.children[0].href;
    setURL(location);
  }
});

function setURL(location) {
  history.pushState("", {}, location);
  getPageContent();
}
async function getPageContent() {
  const path = location.pathname;
  const route = routes[path].template;
  const data = await fetch(route);
  document.querySelector("body").innerHTML = await data.text();
}
window.addEventListener("popstate", getPageContent);

export { getPageContent, setURL };
