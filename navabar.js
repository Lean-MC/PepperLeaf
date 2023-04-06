document.addEventListener("DOMContentLoaded", function() {
    const navbarBurger = document.querySelector(".navbar__burger");
    const navbarMenu = document.querySelector(".navbar__menu");
  
    navbarBurger.addEventListener("click", function() {
      navbarMenu.classList.toggle("navbar__menu--active");
    });
  });