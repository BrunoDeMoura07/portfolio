const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const menu = document.getElementById("menu");

openMenu.addEventListener("click", () => {
  menu.style.display = "flex";
  menu.style.right = -1 * menu.offsetWidth + "px";
  openMenu.style.display = "none";

  setTimeout(() => {
    menu.style.right = "0";
  }, 10);
});

closeMenu.addEventListener("click", () => {
  menu.style.opacity = "0";
  menu.style.right = -1 * menu.offsetWidth + "px";
  openMenu.style.display = "block";

  setTimeout(() => {
    menu.removeAttribute("style");
  }, 200);
});
