// setTimeout((a, b, c) => console.log('a, b, c'), 5 * 60 * 1000);           //всегда нужно передавать функцию, а не код!

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);


//-------------------------------------------------------------------------------------------------------------------------

// const sayHi = () => {
//   console.log('hi');
  
// };

// setTimeout(() => sayHi());                    //вызов тела функции





//-------------------------------------------------------------------------------------------------------------------------

// const sayHi = () => {
//   console.log('hi');
// };

// console.log(1);
// console.log(2);

// const timeoute = setTimeout(() => sayHi(), 1000);

// console.log(3);
// console.log(4);

// clearTimeout(timeoute)                       //отменяет выполнение


//-------------------------------------------------------------------------------------------------------------------------


// const sayHi = () => {
//   console.log('hi');
// };

// console.log(1);
// console.log(2);

// const timeoute = setInterval(() => sayHi(), 1000);

// console.log(3);
// console.log(4);

// setTimeout(() => clearTimeout(timeoute), 5000);


//-------------------------------------------------------------------------------------------------------------------------


// const printNumbers = (from, to) => {
//   const interval = setInterval(() => {
//     console.log(from);

//     if (from === to) {
//       clearTimeout(interval);
//     };
//     ++from;
//   }, 1000);
//   };

// console.log(printNumbers(1, 10));


//-------------------------------------------------------------------------------------------------------------------------


// const printNumbers = (from, to) => {
//   let counter = from;

//   const interval = setTimeout(function iteration() {
//     console.log(counter);

//     if (counter === to) {
//       clearTimeout(interval)
//     } else {
//       counter++;

//       setTimeout(iteration, 1000);
//     };  
//   }, 1000);
//   };

// console.log(printNumbers(1, 10));


//-------------------------------------------------------------------------------------------------------------------------
// должны выводиться четные числа

// const printNumbers = (from, to) => {
//   let count = from;

//   setTimeout(function interval() {
//     if(count <= to && count % 2 === 0) {
//       console.log(count);
//     };

//     count++;

//     setTimeout(interval, 1000)
//   }, 0);
// };

// printNumbers(1, 10);

