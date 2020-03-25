// function isEmpty(obj) {
//   for (const key in obj) {
//       return false
//     }
//     return true
//   };

// <----------------------------------------------------------------------------------


// const sumSalaries = (obj) => {
//   let sum = 0;

//   for (const key in obj) {
//     if (typeof obj [key] === 'number' && typeof +obj[key] != NaN) {
//       sum = sum + obj [key]
//     }
//   }
//   return sum;
// };

// <----------------------------------------------------------------------------------


// const user = {
//   name: 'Andrey',
//   age: 25,
//   isFat: false,
//   getName: function () {        // <---------- method
//     console.log("I'm Andrey");
//   },
// };

// user.getName();

// const user2 = {... user};
// user2.name = 'Petia';

// console.log(user);


// <----------------------------------------------------------------------------------

// const calculator = {
//   read: function(a, b) {
//     this.a = a;
//     this.b = b;
//   },

//   sum: function() {
//     return console.log(this.a + this.b);
//   },

//   mul: function () {
//     return console.log(this.a * this.b);
//   }
// };

// const a = +prompt('enter number 1');
// const b = +prompt('enter number 2');


// calculator.read(4, 5);
// alert(calculator.sum());
// alert(calculator.mul());

// <----------------------------------------------------------------------------------


function CocaCola(volume, sugar, type) {
  this.volume = volume ;
  this.isAlco = false ;
  this.color = 'black';
  this.mountOfSugar = sugar;
  this.type = type;
  this.name = 'CocaCola';
}

function Pepsi(volume, sugar, type) {
  this.volume = volume ;
  this.isAlco = false ;
  this.color = 'black';
  this.mountOfSugar = sugar;
  this.type = type;
  this.name = 'Pepsi';
}

function Vodka(volume, sugar, type) {
  this.volume = volume ;
  this.isAlco = false ;
  this.color = 'color';
  this.mountOfSugar = 50;
  this.type = type;
  this.name = 'Vodka';
}

const cola1 = new CocaCola(0.5, 600, 'vanilla'); 
const cola2 = new CocaCola(2, 400, 'classic'); 


const pepsi1 = new Pepsi(0.5, 300, 'lime'); 
const pepsi2 = new Pepsi(1.5, 300, 'classic'); 


const vodka1 = new Pepsi(0.7, 'light-orange', 'percovka'); 
const vodka2 = new Pepsi(1.5, 'transparent', 'classic'); 



console.log(cola1);
console.log(cola2);

console.log(pepsi1);
console.log(pepsi2);

console.log(vodka1);
console.log(vodka2);







