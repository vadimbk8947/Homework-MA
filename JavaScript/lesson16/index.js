// let arr = [];

// console.log(arr);

// arr.push(4, 5, 6);
// arr.unshift(666);

// console.log(arr);

// const deletedElem = arr.pop();
// const deletedElemSh = arr.shift();

// console.log(arr, deletedElem, deletedElemSh);


//----------------------------------------------------------------------------------

// const numbers = [1,3,5,5,8,234,234,234,234,234];

// console.log(numbers);

// numbers[2] = 999;

// console.log(numbers);

//----------------------------------------------------------------------------------

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// console.log( matrix[1][2] );

//----------------------------------------------------------------------------------

// Сумма введённых чисел
// важность: 4
// Напишите функцию sumInput(), которая:

// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

// function sumInput() {
//   const arr = [234,234,234,23];
  
//   let sum = 0;
  
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   };
  
//   return sum
// };

// console.log(sumInput());


// let temp = +prompt('Enter number', '0');

// if (value === '' || value === null || !isFinite(value)) break;

// arr.push(+value);


//----------------------------------------------------------------------------------


// const arr = [2,213,123,12,54,54,34];
// const arr2 = ['sdfsdf', 'sdfs', 'djgh'];


// // const copiedElements = arr.slice(3, 6);

// console.log(arr);


// const copiedElements = arr.splice(3, 3, 's');

// console.log(arr, copiedElements);


// arr.concat()

//----------------------------------------------------------------------------------
                                      // callBack

// const arr = [2,213,123,12,54,54,34];

// const arr2 = [];
//                                        // create copy massive
// arr.forEach((item,) => {
//   arr2.push(item);
// });

// console.log(arr, arr2);


//----------------------------------------------------------------------------------


// const arr = [2,213,23,12,62,54,34];

// const searchedItems = arr.find((item) => {                       // refresh first element in massive else: undefined
//   if (item > 60) {
//     return item;
//   }
// });

// console.log(searchedItems);


//----------------------------------------------------------------------------------


// const arr = [2,213,23,12,62,54,34];

// const searchedItems = arr.filter((item) => {                           // refresh all elements fulfil in massive else: undefined
//   if (item > 60) {
//     return item;
//   }
// });

// console.log(searchedItems);


//----------------------------------------------------------------------------------


// const arr = [2,213,23,12,62,54,34];

// const searchedItems = arr.map((item) => {                           // refresh result perfomance in massive
//   return item + 1000;
// });

// console.log(arr, searchedItems);


//----------------------------------------------------------------------------------


// const arr = [2,213,23,12,62,54,34];

// // const sortedArr = arr.sort((a, b) => {          //normal                            // refresh sorted massive
// //   if (a >= b) return 1;
// //   if (a < b) return -1;
// // });

// const sortedArr = arr.sort((a, b) => a - b);     //short-variant


// console.log(sortedArr);


//----------------------------------------------------------------------------------


// const arr = ['sdf', 'rthgf', 'z', 't', '223'];

// const str = arr.join(' ');                                                 //joined string

// console.log(str);

//----------------------------------------------------------------------------------

// const arr = [2,213,23,12,62,54,34];

// const sum = arr.reduce((acc, item) => {
//   return acc + item;
// }, 0);

// console.log(sum);

//----------------------------------------------------------------------------------

// Переведите текст вида border-left-width в borderLeftWidth
// важность: 5
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// Примеры:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.

// const camelize = ("background-color");

// const camelize0 = camelize.split('');
// const camelize1 = camelize0.join(('') );



// console.log(camelize1);


//----------------------------------------------------------------------------------


// Фильтрация по диапазону
// важность: 4
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.

// Функция должна возвращать новый массив и не изменять исходный.

// Например:

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (совпадающие значения)

// alert( arr ); // 5,3,8,1 (без изменений)


let arr = [5, 3, 8, 1];

// let filterRange = (arr, min, max) => {
//   return arr.filter(number => {
//     if (number >= min && number <= max) {
//       return number;
//     }
//   })
// };

let filterRange = (arr, min, max) => {
  return arr.filter(number => {
    if (number >= min && number <= max) {
      return number;
    }
  })
};

console.log(filterRange(arr, 1, 4));




