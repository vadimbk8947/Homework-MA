// hamburger button
const btnMenu = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu-list-wrapper");
const menuIcon = document.querySelector(".menu-icon");

const toggleMenu = () => {
  menuIcon.classList.toggle("active");
  menu.classList.toggle("active");
};

btnMenu.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleMenu();
});

document.addEventListener("click", (e) => {
  const target = e.target;
  const itsMenu = target == menu || menu.contains(target);
  const itsBtn = target == btnMenu;
  const menuIsActive = menu.classList.contains("active");

  if (!itsMenu && !itsBtn && menuIsActive) {
    toggleMenu();
  }
});

document.addEventListener("keyup", (e) => {
  const target = e.target;
  const itsMenu = target == menu || menu.contains(target);
  const itsBtn = target == btnMenu;
  const menuIsActive = menu.classList.contains("active");

  if (e.key === "Escape") {
    if (!itsMenu && !itsBtn && menuIsActive) {
      toggleMenu();
    }
  }
});

//carousel
// const indicatorWrapper = document.querySelector(".carousel__wrapper-indicator");
// const indicatorAll = document.querySelectorAll(
//   ".carousel__wrapper-indicator-item"
// );
// const titleAll = document.querySelectorAll(".carousel__wrapper-title");
// const toggleTitle = (id) => {
//   id.classList.toggle("active");
// };

// indicatorWrapper.addEventListener("click", (e) => {
//   const target = e.target;

//   const ind = indicatorAll;
//   const titleId = (id) => {
//     return titleAll[id];
//   };

//   switch (target) {
//     case indicatorAll[0]:
//       const id = titleId(0);
//       toggleTitle(id);
//       break;

//     case indicatorAll[1]:
//       console.log(1);
//       break;

//     case indicatorAll[2]:
//       console.log(2);
//       break;

//     case indicatorAll[3]:
//       console.log(3);
//       break;

//     case indicatorAll[4]:
//       console.log(4);
//       break;

//     default:
//       break;
//   }
// });
