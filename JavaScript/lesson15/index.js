// 16..toString (10);

// a.toString;

// Math.floor(4.67)

//--------------------------------------------------------------------------------------------------------------

// 3.2131234234232322223.toFixed(6)

// console.log(3.2131234234232322223);

//--------------------------------------------------------------------------------------------------------------


// const b = 23564343;
// isNaN(b);

// console.log(isNaN(b));

//--------------------------------------------------------------------------------------------------------------

// parseInt("100px",);

// console.log(parseInt("100px",));          // convert for str to number (processing to first error(p))

//--------------------------------------------------------------------------------------------------------------

// Math.random()                                        // create random number  from 0 to 1
// console.log(Math.random()
// );

//--------------------------------------------------------------------------------------------------------------

// Math.pow(4, 4)

// console.log(Math.pow(4, 4));                      // number to power

//--------------------------------------------------------------------------------------------------------------

// const readNum = () => {
//   let num;

//   while (typeof num !== "number" || num !== 0 || num === null) {
//     num = +prompt('Enter number', '');
//   }
//   console.log(num);
// };


// readNum();

//--------------------------------------------------------------------------------------------------------------

const isSpam = (str, substr) =>
str.toLowerCase().include(substr.toLowerCase());