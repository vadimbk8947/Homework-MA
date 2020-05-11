// Скрыть элемент по нажатию кнопки
// важность: 5
// Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.

// document
//   .querySelector("input")
//   .addEventListener(
//     "click",
//     () => (document.querySelector("div").hidden = true)
//   );

//-------------------------------------------2----------------------------------------------
// Спрятать себя
// важность: 5
// Создайте кнопку, которая будет скрывать себя по нажатию.

// let btn = document.createElement("button");
// btn.textContent = "Button";
// document.body.append(btn);

// btn.addEventListener("click", () => (btn.hidden = true));

//-------------------------------------------3----------------------------------------------

// Передвиньте мяч по полю
// важность: 5
// Пусть мяч перемещается при клике на поле, туда, куда был клик,
// Tребования:

// Центр мяча должен совпадать с местом нажатия мыши (если это возможно без пересечения краёв поля);
// CSS-анимация желательна, но не обязательна;
// Мяч ни в коем случае не должен пересекать границы поля;
// При прокрутке страницы ничего не должно ломаться;
// Заметки:

// Код должен уметь работать с различными размерами мяча и поля, не привязываться к каким-либо фиксированным значениям.
// Используйте свойства event.clientX/event.clientY для определения координат мыши при клике.

// const field = document.getElementById("field");
// const ball = document.querySelector("img");

// //style
// field.style.position = "relative";
// field.style.cursor = "pointer";

// ball.style.position = "absolute";
// ball.style.width = "40px";
// ball.style.height = "40px";
// ball.style.top = 0;
// ball.style.left = 0;
// ball.style.transition = "0.5s";

// //style

// field.addEventListener("click", e => {
//   console.log(e.offsetX, e.offsetY);

//   ball.style.left = e.offsetX - ball.offsetWidth / 2 + "px";
//   ball.style.top = e.offsetY - ball.offsetHeight / 2 + "px";
// });

//-------------------------------------------4----------------------------------------------

// Создать раскрывающееся меню
// Создать меню, которое по нажатию открывается либо закрывается:

// const div = document.querySelector("div");
// const ul = document.querySelector("ul");
// ul.hidden = true;
// div.style.cursor = "pointer";

// div.addEventListener("click", e => {
//   div.textContent = "▼ Сладости (нажми меня)!";
//   ul.hidden = !ul.hidden;
// });

//-------------------------------------------5----------------------------------------------

// Добавить кнопку закрытия
// важность: 5
// Есть список сообщений.

// При помощи JavaScript для каждого сообщения добавьте в верхний правый угол кнопку закрытия.

// Результат должен выглядеть, как показано здесь:

// const panes = document.querySelectorAll(".pane");

// for (const pane of panes) {
//   pane.insertAdjacentHTML(
//     "afterbegin",
//     '<button class="remove-button">[x]</button>'
//   );

//   pane.addEventListener("click", () => pane.remove());
// }

//-------------------------------------------6----------------------------------------------

// Карусель
// важность: 4
// Создайте «Карусель» –- ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

// В дальнейшем к ней можно будет добавить анимацию, динамическую подгрузку и другие возможности.

// P.S. В этой задаче разработка структуры HTML/CSS составляет 90% решения.

// const ul = document.querySelector("ul");

// const buttonLeft = document.querySelector(".left");

// const buttonRight = document.getElementsByClassName("right");

// let width = 130;
// let count = 3;
// let position = 0;

// buttonLeft.onclick = () => {
//   console.log("hui");
//   position += width * count;

//   // position = Math.min(position, 0);
//   ul.style.marginLeft = -position + "px";
// };

//-------------------------------------------7----------------------------------------------
const tree = document.querySelector("#tree");

for (const li of document.querySelectorAll("li")) {
  const span = document.createElement("span");
  span.style.cursor = "pointer";
  li.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener("click", e => {
  if (e.target.tagName != "SPAN") return;

  let childrenNode = e.target.parentNode.querySelector("ul");
  if (!childrenNode) return;

  childrenNode.hidden = !childrenNode.hidden;
});
