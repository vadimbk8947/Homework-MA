// function a() {
//   console.log('hello');
//   setTimeout(a, 1000)

// };


// let aaa = setTimeout(function trick() {                                                         //recursive call
//   console.log('hello');
//   aaa = setTimeout(trick, 1000)
// }, 1000);


// clearTimeout(aaa);

//------------------------------------------------------------------------------------------------------------------------------

// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout.


// function printNumbers(from, to) {
//   let counter = 0;
//   let a = setTimeout(function b() {
//     if(from <= counter && to >= counter) {
//       console.log(counter);
//     };
//     counter++;
//     a = setTimeout(b, 1000)
//   }, 1000);
// };

// printNumbers(1, 10);


//------------------------------------------------------------------------------------------------------------------------------


// let palindrom = (str) => {
//   str = str.toLowerCase();
//   return str == str.split('').reverse().join('');
// }

// console.log(palindrom('hello'));
// console.log(palindrom('abba'));


let a = "((()))()((()))((()))";

function checkStr(c) {
  for (let i = 0; i < c.length; i++) {
    const v = c[i];

    console.log(v);
  }

}

checkStr(a)


