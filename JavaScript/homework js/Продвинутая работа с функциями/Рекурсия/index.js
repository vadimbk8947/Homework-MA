// Вычислить сумму чисел до данного
// важность: 5
// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

// Например:

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

//цикл
// let sumTo = (n) => {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// };

// console.log(sumTo(10));



//рекурсия
// let sumTo = (n) => {
//   if (n === 1) {
//     return 1
//   };
//   return n + sumTo(n - 1)
// };

// console.log(sumTo(10));



//-----------------------------------------------------------------------------------------------


// Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
// Напишите функцию printList(list), которая выводит элементы списка по одному.

// Сделайте два варианта решения: используя цикл и через рекурсию.


const printList = (list) => {
  console.log(list.value);
  if (list.next) {
    printList(list.next);
  }
}

console.log(printList(list));
