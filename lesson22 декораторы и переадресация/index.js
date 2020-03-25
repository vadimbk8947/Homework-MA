// // let worker = {
// //   someMethod() {
// //     return 1;
// //   },

// //   slow(x) {
// //     // здесь может быть страшно тяжёлая задача для процессора
// //     console.log("Called with " + x);
// //     return x * this.someMethod(); // (*)
// //   }
// // };

// // // тот же код, что и вышу
// // function cachingDecorator(func) {
// //   let cache = new Map();
// //   return function (x) {
// //     if (cache.has(x)) {
// //       return cache.get(x);
// //     }
// //     let result = func.call(this, x); // (**)
// //     cache.set(x, result);
// //     return result;
// //   };
// // }

// // console.log(worker.slow(1)); // оригинальный метод работает

// // worker.slow = cachingDecorator(worker.slow); // теперь сделаем его кеширующим

// // console.log(worker.slow(2)); // Ой! Ошибка: не удаётся прочитать свойство 'someMethod' из 'undefined'






// function work(a, b) {
//   console.log(a + b); // произвольная функция или метод
// }

// function spy(func) {

// }

// work = spy(work);

// work(1, 2); // 3
// work(4, 5); // 9

// for (let args of work.calls) {
//   alert('call:' + args.join()); // "call:1,2", "call:4,5"
// }








// const bind1 = (fn, context) => {
//   return fn 
// }




function f() {
  console.log(this); // ?
}

let user = {
  g: f.bind();
};

user.g();