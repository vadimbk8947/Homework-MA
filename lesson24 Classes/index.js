// class Rabbit2 {
//   constructor(name) {
//     this.jumpCounter = 0
//     this.name = name
//   };

//   doJump() {
//     this.jumpCounter += 1;
//     console.log('jump was done');
//   };

//   eats = true;
// };


// const r1 = new Rabbit2('White Rabbit');

// console.log(r1);

// console.log(r1.doJump());

// console.log(r1);

// console.log(r1.doJump());

// console.log(r1);




// function Clock({ template }) {

//   let timer;

//   function render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = '0' + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = '0' + secs;

//     let output = template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);

//     console.log(output);
//   }

//   this.stop = function () {
//     clearInterval(timer);
//   };

//   this.start = function () {
//     render();
//     timer = setInterval(render, 1000);
//   };

// }

// let clock = new Clock({ template: 'h:m:s' });
// clock.start();



// class Clock {
//   constructor({ template }) {
//     this.template = template;
//   }

//   stop() {
//     clearInterval(this.timer)
//   };

//   start() {
//     this.render();
//     this.timer = setInterval(() => {
//       this.render
//     }, 1000)
//   };

//   render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = '0' + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = '0' + secs;

//     let output = this.template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);

//     console.log(output);
//   };
// };


// let clock = new Clock({ template: 'h:m:s' });
// clock.start();



// class User {
//   constructor(name) {
//     this.name = name;
//   };

//   isUser = true;

//   sayHi() {
//     console.log("Hi, i'm" + this.name);
//   }
// };

// const user = new User('Petya');

// console.log(user);


// class Admin extends User {
//   constructor(name, age) {
//     super(name);
//     this.age = age;
//   };

//   isAdmin = true;

//   sayHi() {
//     super.sayHi();
//     console.log('this was extended method');
//   }
// };

// const admin = new Admin('Ivan');

// admin.sayHi();



// class Clock {
//   constructor({ template }) {
//     this.template = template;
//   }

//   render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = '0' + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = '0' + secs;

//     let output = this.template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);

//     console.log(output);
//   }

//   stop() {
//     clearInterval(this.timer);
//   }

//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), 1000);
//   }
// };


// class ExtendedClock extends Clock {
//   constructor(template, precision) {
//     super(template);
//     this.precision = precision
//   };

//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), this.precision);
//   }
// };

// const clock = new ExtendedClock({ template: 'h:m:s', precision: 1000 });

// clock.start();


