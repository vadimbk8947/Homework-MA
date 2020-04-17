const menuToggle = document.querySelector(".header__menu-icon");
const mobileNavContainer = document.querySelector(".header__mobile-nav");

menuToggle.onclick = function() {
  menuToggle.classList.toggle("header__menu-icon-active");
  mobileNavContainer.classList.toggle("header__mobile-nav--active");
};
