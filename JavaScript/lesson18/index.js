// const user = {
//   name: 'Ivan',
//   age: 33,
//   isAdmin: false,

//   sayHi: function() {
//     return 'Hello ama ' + this.name;
//   },

//   countOfFriends: null,

//   parents: {
//     mother: {
//       name:'Lida',
//       age: 54,
//     },
//     father: {
//       name: 'Petya',
//       age: 55,
//     },
//   }
// };

// console.log(user);

// const formatedUser = JSON.stringify(user);

// console.log(formatedUser);

// const parsedUser = JSON.parse(formatedUser);

// console.log(parsedUser);


// let arr = [1,1232,35,345,34,3];
// const newArr = arr.map((item) => {return item + 10});






// const user = {
//   name: 'Ivan',
//   age: 33,
//   isAdmin: false,

//   sayHi: function() {
//     return 'Hello ama ' + this.name;
//   },

//   countOfFriends: null,

//   parents: {
//     mother: {
//       name:'Lida',
//       age: 54,
//     },
//     father: {
//       name: 'Petya',
//       age: 55,
//     },
//   }
// };

// const {name, parents: {mother}, parents, ...rest} = user;

// console.log(name);

// console.log(mother);

// console.log(mother.name);

//---------------------------------------------------------------------------- сделать деструктуризацию name(ivan), mother(), mother(name)


// function a() {
//   console.log(arguments);
// };

// a(234,234,34,46,234,4);


//--------------------------------------------------------------------------------------


let a = ['abcde'];

function newA(params) {
  a.split('')
    .reverse()
    .join('')
};

let b = newA(a);

console.log(b);
