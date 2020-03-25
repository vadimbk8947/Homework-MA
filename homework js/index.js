// let login = prompt("Какое официальное название JavaScript?");
//   if (login == 'ECMAScript') {
//     alert ("Правильно!");
//   }  else {
//     alert ("You don't know? “ECMAScript”!");
//   }



// let login = prompt('Введите число', 0);

// if (login > 0) {
//   alert( 1 );
// } else if (login < 0) {
//   alert( -1 );
// } else {
//   alert( 0 );
// }


// result = (a + b < 4) ? 'Мало' : 'Много';
// console.log('result');


// let message = (login == 'Сотрудник') ? 'Привет' : 
// (login == 'Директор') ? 'Здравствуйте' : 
// (login == '') ? 'Нет логина' : 
// '';admin


// let age = 15;

// if (!(age >= 14 && age <= 90)) {
//   alert (age);
// };


// let login = prompt('Enter login');

// if (login == 'Admin') {
//   let pass = prompt('Enter pass');
//     if (pass == 'i boss') {
//       alert('hello');
//     } else if (pass =='' || pass == null) {
//       alert('cancel');
//     }  else {
//       alert('undefined pass');
//     }
//     } else if  (login =='' || login == null) {
//       alert('cancel');
//     }  else {
//       alert('i dont know you');
//     };


//------------------------------------------------------------------------------------------------------------

// Перепишите с использованием функции-стрелки
// Замените код Function Expression стрелочной функцией:

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Вы согласны?",
//   function() { alert("Вы согласились."); },
//   function() { alert("Вы отменили выполнение."); }
// );


// function ask(question, yes, no) {
//   if (confirm(question)) yes ()
//   else no ();
// }

// ask(
//   "Do you agree?",
//   () => alert("You-re agreed"),
//   () => alert("You-re canceled expression")
// );

//------------------------------------------------------------------------------------------------------------

// Привет, object
// важность: 5
// Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.



// let user = {}
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;

// console.log(user);


//------------------------------------------------------------------------------------------------------------


// Проверка на пустоту
// важность: 5
// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// Должно работать так:

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false



// function isEmpty(obj) {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// }

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false


//------------------------------------------------------------------------------------------------------------


// Сумма свойств объекта
// важность: 5
// У нас есть объект, в котором хранятся зарплаты нашей команды:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// Если объект salaries пуст, то результат должен быть 0.


// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// let sum = 0;
// for (const key in salaries) {
//   sum += salaries[key]
// };
// alert(sum);


//------------------------------------------------------------------------------------------------------------


// Умножаем все числовые свойства на 2
// важность: 3
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// Например:

// // до вызова функции
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// // после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

// P.S. Используйте typeof для проверки, что значение свойства числовое.


// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// console.log(menu);

// function multiplyNumeric(object) {
//   for (const key in object) {
//     if (typeof object[key] == "number") {
//       object[key] *= 2;
//     }
//   }
// };

// multiplyNumeric(menu);

// console.log(menu);


//------------------------------------------------------------------------------------------------------------

// Создайте калькулятор
// важность: 5
// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
// let calculator = {
//   // ... ваш код ...
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );


// let calculator = {
//   read() {
//     this.a = +prompt('Enter a');
//     this.b = +prompt('Enter b')
//   },

//   sum() {
//     return this.a + this.b;
//   },

//   mul() {
//     return this.a * this.b;
//   }
// };

// calculator.read();
// console.log( calculator.sum() );
// console.log( calculator.mul() );


//------------------------------------------------------------------------------------------------------------


// Цепь вызовов
// важность: 2
// Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//   },
//   down() {
//     this.step--;
//   },
//   showStep: function() { // показывает текущую ступеньку
//     alert( this.step );
//   }
// };
// Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

// ladder.up().up().down().showStep(); // 1



// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function() { // показывает текущую ступеньку
//     console.log( this.step );
//     return this;
//   }
// };

// ladder.up().up().down().showStep(); // 1





//------------------------------------------------------------------------------------------------------------
// Создание калькулятора при помощи конструктора
// важность: 5
// Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.
// Например:

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );


// function Calculator() {
//   this.read = function() {
//     this.a = +prompt('Enter a');
//     this.b = +prompt('Enter b');
//   },

//   this.sum = function() {
//     return this.a + this.b
//   },

//   this.mul = function() {
//     return this.a * this.b
//   }
// };

// let calculator = new Calculator();
// calculator.read();

// console.log( "Sum=" + calculator.sum() );
// console.log( "Mul=" + calculator.mul() );



//------------------------------------------------------------------------------------------------------------


// Создаём Accumulator
// важность: 5
// Напишите функцию-конструктор Accumulator(startingValue).

// Объект, который она создаёт, должен уметь следующее:

// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() использует prompt для получения числа и прибавляет его к свойству value.
// Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), с учётом начального значения startingValue.

// Ниже вы можете посмотреть работу кода:

// let accumulator = new Accumulator(1); // начальное значение 1

// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению

// alert(accumulator.value); // выведет сумму этих значений



// function Accumulator(startingValue) {
//   this.value = startingValue;

//   this.read = function() {
//     this.value += +prompt('Enter number')
//   }
// };

// let accumulator = new Accumulator(1); // начальное значение 1

// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению

// alert(accumulator.value); // выведет сумму этих значений



//------------------------------------------------------------------------------------------------------------
// Ввод числового значения
// важность: 5
// Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

// Функция должна возвращать числовое значение.

// Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.




// function readNumber() {
//   let num;

//   do {
//     num = prompt('Enter number')
//   } while (!isFinite);

//   if (num === 'null' || num === '') return null;
  
//   return +num;
// };


// console.log(`Number: ${readNumber()}`);



//------------------------------------------------------------------------------------------------------------

// Случайное число от min до max
// важность: 2
// Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)

// Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).

// function random(min, max) {
//   return Math.random() * (max - min) + min;
// };



// console.log( random(1, 5) ); // 1.2345623452
// console.log( random(1, 5) ); // 3.7894332423
// console.log( random(1, 5) ); // 4.3435234525

//------------------------------------------------------------------------------------------------------------

// Случайное целое число от min до max
// важность: 2
// Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).

// Любое число из интервала min..max должно появляться с одинаковой вероятностью.


// function random(min, max) {
//   return Math.trunc(Math.random() * (max - min) + min);
// };



// console.log( random(1, 5) ); // 1.2345623452
// console.log( random(1, 5) ); // 3.7894332423
// console.log( random(1, 5) ); // 4.3435234525


//------------------------------------------------------------------------------------------------------------
// Сделать первый символ заглавным
// важность: 5
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

// ucFirst("вася") == "Вася";

// function ucFirst(str) {
//   if (!str) return str;

//   return newStr = str.toUpperCase()[0] + str.slice(1);

// };

// console.log(ucFirst('вася'));


//------------------------------------------------------------------------------------------------------------

// Усечение строки
// важность: 5
// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

// Например:

// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

// truncate("Всем привет!", 20) = "Всем привет!"


// function truncate(str, maxlength) {
//   return (str.length > maxlength) ?
//   str.slice(0, maxlength -1) + '...' : str;
// };


// console.log( truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) );


// console.log(truncate("Всем привет!", 20));




//------------------------------------------------------------------------------------------------------------

// Выделить число
// важность: 4
// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

// Например:

// alert( extractCurrencyValue('$120') === 120 ); // true


// function extractCurrencyValue(str) {                                          //it's my
//   if (str.charAt(0) != 'number') {
//     return str.slice(1);
//   }
// };

// console.log(extractCurrencyValue('$120'));




// function extractCurrencyValue(str) {                                      //learn
//   return +str.slice(1);
// }



//------------------------------------------------------------------------------------------------------------


