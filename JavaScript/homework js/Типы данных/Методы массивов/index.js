"use strict";


// Переведите текст вида border-left-width в borderLeftWidth
// важность: 5
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// Примеры:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.


// function camelize(str) {
//   str.split('-')
//       .map(
//         (word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1)
//       )
//       .join('')
//   return
// };


// camelize("background-color");
// console.log(camelize());

// camelize("list-style-image");
// console.log(camelize());

// camelize("-webkit-transition");
// console.log(camelize());


//------------------------------------------------------------------------------------------------------------------


// Фильтрация по диапазону
// важность: 4
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.

// Функция должна возвращать новый массив и не изменять исходный.


// function filterRange(arr, a, b) {
//   return arr.filter(item => (a <= item && item <=b))
// };

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// console.log( filtered ); // 3,1 (совпадающие значения)

// console.log( arr ); // 5,3,8,1 (без изменений)


//------------------------------------------------------------------------------------------------------------------


// Фильтрация по диапазону "на месте"
// важность: 4
// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

// Функция должна изменять принимаемый массив и ничего не возвращать.


// function filterRangeInPlace(array, a, b) {
//   for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
//     if (element <= a || b <= element) {
//       array.splice(index, 1)
//       index--;
//     }
//   }
// };

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

// console.log( arr ); // [3, 1]


//------------------------------------------------------------------------------------------------------------------


// Сортировать в порядке по убыванию
// важность: 4
// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b-a)

// console.log( arr ); // 8, 5, 2, 1, -10


//------------------------------------------------------------------------------------------------------------------


// Скопировать и отсортировать массив
// важность: 5
// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

// function copySorted(arr) {
//   return arr.slice().sort()
// };

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// console.log( sorted ); // CSS, HTML, JavaScript
// console.log( arr ); // HTML, JavaScript, CSS (без изменений)