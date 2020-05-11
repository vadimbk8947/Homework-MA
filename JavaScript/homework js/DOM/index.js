// // Как получить:

// // Напишите код, который получит элемент <div>?
// // Напишите код, который получит <ul>?
// // Напишите код, который получит второй <li> (с именем Пит)?

// const div = document.body.querySelector('div');
// console.log(div);

// let ul = document.body.querySelector('ul');
// console.log(ul);

// let li2 = ul.lastElementChild;
// console.log(li2);



//----------------------------------------------------------2--------------------------------------------------------------------------

// Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.

// Вам нужно получить из таблицы <table> все диагональные <td> и выделить их, используя код:

// //  в переменной td находится DOM-элемент для тега <td>
// td.style.backgroundColor = 'red';


// let table = document.body.querySelector('table');

// for (let i = 0; i < table.rows.length; i++) {
//   const rows = table.rows[i];
//   rows.cells[i].style.backgroundColor = 'red';

// };



//--------------------------------------------------------3----------------------------------------------------------------------------

// // Вот документ с таблицей и формой.

// // Как найти?…

// // Таблицу с id="age-table".
// // Все элементы label внутри этой таблицы (их три).
// // Первый td в этой таблице (со словом «Age»).
// // Форму form с именем name="search".
// // Первый input в этой форме.
// // Последний input в этой форме.

// let ex1 = document.body.querySelector('#age-table');
// console.log(ex1);

// let ex2 = ex1.querySelectorAll('label')
// console.log(ex2);

// let ex3 = ex1.querySelector('td')
// console.log(ex3);

// let ex4 = document.body.querySelector('form[name = "search"]')
// console.log(ex4);

// let ex5 = ex4.querySelector('input')
// console.log(ex5);

// let ex6 = ex4.lastElementChild
// console.log(ex6);


//--------------------------------------------------------4----------------------------------------------------------------------------

// Считаем потомков
// важность: 5
// У нас есть дерево, структурированное как вложенные списки ul/li.

// Напишите код, который выведет каждый элемент списка <li>:

// Какой в нём текст (без поддерева) ?
// Какое число потомков – всех вложенных <li> (включая глубоко вложенные) ?


// for (const li of document.querySelectorAll('li')) {
//   let title = li.firstChild.data;

//   title = title.trim();

//   let counter = li.getElementsByTagName('li').length;

//   console.log(title + ': ' + counter);
// }


//--------------------------------------------------------5----------------------------------------------------------------------------

// Получите атрибут
// важность: 5
// Напишите код для выбора элемента с атрибутом data-widget-name из документа и прочитайте его значение.

// <!DOCTYPE html>
// <html>
// <body>

//   <div data-widget-name="menu">Choose the genre</div>

//   <script>
//     /* your code */
//   </script>
// </body>
// </html>

// let elem = document.querySelector('[data-widget-name]');

// console.log(elem.dataset.widgetName);

//--------------------------------------------------------6----------------------------------------------------------------------------

// for (let link of document.querySelectorAll('a[href]')) {
//   a = link.getAttribute('href');
//   // console.log(a[1, 2] === 't');

//   if (a[0] === 'h' || a[1, 2] === 't' || a[3] === 'p') {
//     // return a;

//     link.style.color = 'orange';
//   };
// }

//--------------------------------------------------------7----------------------------------------------------------------------------

// Очистите элемент
// важность: 5
// Создайте функцию clear(elem), которая удаляет всё содержимое из elem.

// <ol id="elem">
//   <li>Привет</li>
//   <li>Мир</li>
// </ol>

// <script>
//   function clear(elem) { /* ваш код */ }

//   clear(elem); // очищает список
// </script>


// function clear(elem) {
//   elem = document.getElementById(elem);
//   elem.innerHtml('')
// }

//--------------------------------------------------------8----------------------------------------------------------------------------

// Создайте список
// важность: 4
// Напишите интерфейс для создания списка.

// Для каждого пункта:

// Запрашивайте содержимое пункта у пользователя с помощью prompt.
// Создавайте элемент <li> и добавляйте его к <ul>.
// Процесс прерывается, когда пользователь нажимает Esc или вводит пустую строку.
// Все элементы должны создаваться динамически.

// Если пользователь вводит HTML-теги -– пусть в списке они показываются как обычный текст.


// function createList() {
//   let ul = document.createElement('ul');
//   document.body.append(ul);

//   while (ul) {
//     let data = prompt('Enter text');

//     if (!data) {
//       break
//     };

//     let li = document.createElement('li');
//     li.textContent = data;
//     ul.append(li)
//   }
// };

// createList()

//--------------------------------------------------------9----------------------------------------------------------------------------

// Создайте дерево из объекта
// важность: 5
// Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта.

// Например:

// let data = {
//   "Рыбы": {
//     "форель": {},
//     "лосось": {}
//   },

//   "Деревья": {
//     "Огромные": {
//       "секвойя": {},
//       "дуб": {}
//     },
//     "Цветковые": {
//       "яблоня": {},
//       "магнолия": {}
//     }
//   }
// };
// Синтаксис:

// let container = document.getElementById('container');
// createTree(container, data); // создаёт дерево в контейнере
// Результат (дерево):


// Выберите один из двух способов решения этой задачи:

// Создать строку, а затем присвоить через container.innerHTML.
// Создавать узлы через методы DOM.
// Если получится – сделайте оба.

// P.S. Желательно, чтобы в дереве не было лишних элементов, в частности -– пустых <ul></ul> на нижнем уровне.


// function createTree(container, obj) {
//   document.body.append(createTreeDom(obj))
// };

// function createTreeDom(obj) {
//   if (!Object.keys) {
//     return
//   };

//   let ul = document.createElement('ul');

//   for (const key in obj) {
//     let li = document.createElement('li')
//     li.textContent = key;

//     let childrenUl = createTreeDom(obj[key]);
//     if (true) {
//       li.append(childrenUl)
//     };

//     ul.append(li)
//   };
//   return ul
// }

// let container = document.getElementById('container');
// createTree(container, data); // создаёт дерево в контейнере

//--------------------------------------------------------10----------------------------------------------------------------------------

// Выведите список потомков в дереве
// важность: 5
// Есть дерево, организованное в виде вложенных списков ul/li.

// Напишите код, который добавит каждому элементу списка <li> количество вложенных в него элементов. Узлы нижнего уровня, без детей – пропускайте.

// Результат:

// Животные [9]
// Млекопитающие [4]
// Коровы
// Ослы
// Собаки
// Тигры
// Другие [3]
// Змеи
// Птицы
// Ящерицы
// Рыбы [5]
// Аквариумные [2]
// Гуппи
// Скалярии
// Морские [1]
// Морская форель


// let list = document.body.querySelectorAll('li');

// for (const li of list) {
//   let counter = li.querySelectorAll('li').length

//   if (!counter) continue;

//   li.firstChild.data += ' [' + counter + ']'
// }

//--------------------------------------------------------11----------------------------------------------------------------------------
// function getLiveTime() {
//   let clock = document.querySelector('.clock');

//   let date = new Date();

//   let dateHours = date.getHours();
//   if (dateHours < 10) {
//     dateHours = '0' + dateHours;
//   };
//   clock.children[0].textContent = dateHours + ' :';

//   let dateMinutes = date.getMinutes();
//   if (dateMinutes < 10) {
//     dateMinutes = '0' + dateMinutes;
//   };
//   clock.children[1].textContent = dateMinutes + ' :';

//   let dateSeconds = date.getSeconds();
//   if (dateSeconds < 10) {
//     dateSeconds = '0' + dateSeconds;
//   };
//   clock.children[2].textContent = dateSeconds;

//   setInterval(() => getLiveTime(), 1000);
// };

// getLiveTime()


//--------------------------------------------------------12----------------------------------------------------------------------------

// Вставьте HTML в список
// важность: 5
// Напишите код для вставки <li>2</li><li>3</li> между этими двумя <li>:

// <ul id="ul">
//   <li id="one">1</li>
//   <li id="two">4</li>
// </ul>


// let one = document.querySelector('#one');

// let li = document.createElement('li');      //my method
// let lil = li.cloneNode(true);

// li.textContent = 2;
// lil.textContent = 3;

// one.after(lil);
// one.after(li)


// one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>')  //best method


//--------------------------------------------------------13----------------------------------------------------------------------------
// Создать уведомление
// важность: 5
// Напишите функцию showNotification(options), которая создаёт уведомление: <div class="notification"> с заданным содержимым. Уведомление должно автоматически исчезнуть через 1,5 секунды.

// Пример объекта options:

// // показывает элемент с текстом "Hello" рядом с правой верхней частью окна.
// showNotification({
//   top: 10, // 10px от верхней границы окна (по умолчанию 0px)
//   right: 10, // 10px от правого края окна (по умолчанию 0px)
//   html: "Hello!", // HTML-уведомление
//   className: "welcome" // дополнительный класс для div (необязательно)
// });


// function showNotification({ top = 0, right = 0, className, html }) {
//   let div = document.createElement('div');
//   div.className = 'notification';

//   div.textContent = className;
//   div.style.top = top + 'px';
//   div.style.right = right + 'px';

//   div.textContent = html;
//   document.body.append(div);

//   setTimeout(() => div.remove(), 1500);
// };

// let i = 1;
// setInterval(() => {
//   showNotification({
//     top: 10,
//     right: 10,
//     html: 'Hello ' + i++,
//     className: "welcome"
//   });
// }, 2000);


//--------------------------------------------------------14----------------------------------------------------------------------------

