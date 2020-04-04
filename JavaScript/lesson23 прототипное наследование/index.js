// const user = {
//   isOnline: false,
//   name: 'Petya',
// };

// const admin = {
//   isAdmin: true,
//   __proto__: user,
// };


// const guest = {
//   isAdmin: false,
//   __proto__: user,
// };


// // console.log(admin);

// for (const key in admin) {
//   if (admin.hasOwnProperty(key)) {
//     const element = admin[key];
//     console.log(element);
//   }
// };


// let head = {
//   glasses: 1
// };

// let table = {
//   pen: 3,
//   __proto__: head,
// };

// let bed = {
//   sheet: 1,
//   pillow: 2,
//   __proto__: table,

// };

// let pockets = {
//   money: 2000,
//   __proto__: bed,

// };


// console.log(pockets.pen);
// console.log(bed.glasses);



// let hamster = {
//   stomach: [],

//   eat(food) {
//     this.stomach = [food];
//   }
// };

// let speedy = {
//   __proto__: hamster
// };

// let lazy = {
//   __proto__: hamster
// };

// // Этот хомяк нашёл еду
// speedy.eat("apple");
// alert(speedy.stomach); // apple

// // У этого хомяка тоже есть еда. Почему? Исправьте
// alert(lazy.stomach); // apple




//----------------------------------------------------------------------------------------------------
// F.prototype
//----------------------------------------------------------------------------------------------------

// let animal = {
//   eats: true
// };

// function Rabbit(name) {
//   this.name = name;
// };

// Rabbit.prototype = animal;

// const r1 = new Rabbit('1');
// const r2 = new Rabbit('2');
// const r3 = new Rabbit('3');

// console.log(r1);



//----------------------------------------------------------------------------------------------------
// нужно создать от одного конструктора, родителя которого не знаем, 
// создать другой конструктор не зависимый от того родителя, решение в строке 115 
// (у каждого rabbit есть обязательное свойство .constructor(ссылка на родителя), и в данной строке мы переопределяем конструктор)
// function Rabbit(name) {
//   this.name = name;
//   alert(name);
// }

// let rabbit = new Rabbit("White Rabbit");

// let rabbit2 = new rabbit.constructor("Black Rabbit");
//----------------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------------------
// встроеные прототипы
//----------------------------------------------------------------------------------------------------



//реализовать встроенный bind  /**/

const user = {
  isOnline: false,
  name: 'Petya',

  sayHi() {
    console.log('hello' + ' ' + this.name);

  }
};

const admin = {
  isAdmin: true,
  name: 'Vasya'
};


const guest = {
  isAdmin: false,
};

const adminSayHi = user.sayHi.bind(admin);

adminSayHi();

Function.prototype.bind1 = function (context, ...args) {
  let _self = this;
  return function (...args) {
    return _self.call(context, ...args);
  }
};

const adminSayHi2 = user.sayHi.bind1(admin);

adminSayHi2()

