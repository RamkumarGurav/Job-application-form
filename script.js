// ---------------------resonsive sidemenu ---------------------
const openMenu = document.querySelector(".fa-bars");
const closeMenu = document.querySelector(".fa-xmark");
openMenu.addEventListener("click", function () {
    document.querySelector(".sidemenu").style.right = "0px";
  });
  
  closeMenu.addEventListener("click", function () {
    document.querySelector(".sidemenu").style.right = "-200px";
  });
  