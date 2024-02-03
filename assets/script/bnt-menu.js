openMenu.addeventListener("click", () => {
  menu.style.display = "flex";
  menu.style.right = menu.offsetwidht + -1 + "px";
  openMenu.style.display = 'none'

  setTimeout(() => {
    menu.style.display = "flex";
    menu.style.right = "0";
  }, 10);
});

closeMenu.addeventListener("click", () => {
  menu.style.opacity = "0";
  menu.style.right = menu.offsetwidht + -1 + "px";
  openMenu.removeAttribute('style')
  
  setTimeout(() => {
    menu.removeAttribute("style");
  }, 200);
});
