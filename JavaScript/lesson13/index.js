// function min(a, b) {      // <----------- FUNCTION DECLARATION
//   return a > b ? a : b;
// };

// let max = function(a, b) {    // <---------- FUNCTION EXPRESSION
//   return a > b ? a : b;
// };


// let a = 9;
// console.log(a);


// let isEqual = (a, b) => a === b;
// console.log(isEqual(4, 5));
// console.log(isEqual(5, 5));

// const user = {
//   name: 'Andrey',
//   age: 25,
//   isFat: false,
//   getName: function () {        // <---------- method
//     console.log("I'm Andrey");
//   },
//   friends: {
//     bestie: "Vadim, Rome, Liza..."
//   }
// };

// console.log(user.name);

// user.getName()    // <--------- вызов метода

// for (let key in user) {   
//   console.log(key, user[key]);   // <-------- вызов key, значение key
// }

//-----------------------------------------------------------------------------------------------------------
// let a = 5;
// let b = a;
// console.log(a);
// console.log(b);

// a=60;
// console.log(a);
// console.log(b);

//                                             //-----------------------------копирование по ссылке
// let obj1 = {
//   name: 'Ivan',   
// }
// let obj2 = obj1

// console.log(obj1);
// console.log(obj2);

// obj1.name = 'Petya';

// console.log(obj1);
// console.log(obj2);
//-----------------------------------------------------------------------------------------------------------


const user1 = {
  name: "Ivan",
  age: 25,
  isAdmin: false
};

const user2 = Object.assign({}, user1);  // <-------------------------- copy info user1   method 1
user2.age = 9;

console.log(user1);
console.log(user2);
//-----------------------------------------------------------------------------------------------------------


const user3 = {...user1}   // <-------------------------- copy info user1   method 2
user3.age = 400;  

console.log(user3);

//-----------------------------------------------------------------------------------------------------------

const user4 = {};
  for (const key in user1) {
    user4[key] = user1[key];
  };
  user4.age=23423;
// <-------------------------- copy info user1   method 3
  console.log(user4);
  console.log(user1);
  

//-----------------------------------------------------------------------------------------------------------

// function qq() {
//   return {};
// };

// const a = qq();
// const b = qq();

// console.log(a === b);





