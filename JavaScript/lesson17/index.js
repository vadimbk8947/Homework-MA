// const user = {
//   "facebook.com": "qwerty123456",
//   inst: 'zxczxb1234345',
//   vk: 9999,
// };

// const keys = Object.keys(user);
// const values = Object.values(user);
// const entries = Object.entries(user);


// console.log(keys);
// console.log(values);
// console.log(entries);

// const { inst: passwordInstagram } = user;

// console.log(passwordInstagram);

// const arr = [1,5,54,65,7,568,68,568];

// const [ firstElement, , b, ...rest ] = arr;

// console.log(firstElement, b, rest);

//------------------------------------------------------------------------------------------------------------------------------------------

// let [firstName = 'Oleg', surname = 'shfhdf'] = ['kolya'];

// console.log(firstName);
// console.log(surname);

//------------------------------------------------------------------------------------------------------------------------------------------


// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200,
//   friends: {
//     bestie: 'ivan',
//     znakom: 'petro',
//     devaha: 'rita'                                                       //HOMEWORK
//   }
// };

// let {width, friends[bestie]} = options;

// console.log(bestie);  // Menu


//------------------------------------------------------------------------------------------------------------------------------------------

// const date = new Date();

// console.log(date);

// const dateMilisec = new Date(12324645239900);
// console.log(dateMilisec);

// const dateStr = new Date('6 5 2017');
// console.log(dateStr);

// const aLotOfNumbers = new Date(1999, 6, 6, 6, 6, 6, 5);
// console.log(aLotOfNumbers);



// let parsedData = Date.parse('2014-09-28T21:44:25.666-02:00');

// console.log(parsedData);



//------------------------------------------------------------------------------------------------------------------------------------------

// const arr = [];

// for (let i = 0; i < 100000; i++) {
//   arr.push(i);
// };

// console.log(arr);




// for(let k = 0; k < 1000; k++) {
//   for (let i = 0; i < 10000000; i++) {
//     let a;
//   };
  
// };

// const before = Date.now();

// for (let i = 0; i < 10000000; i++) {
//   let a;
// };

// const after = Date.now();

// console.log(before, after, after - before);



// for(let k = 0; k < 1000; k++) {
//   for (let i in arr) {
//     let a;
//   };
  
// };

// const before = Date.now();

// for (let i in arr) {
//   let a;
// };

// const after = Date.now();

// console.log(before, after, after - before);

//------------------------------------------------------------------------------------------------------------------------------------------


// let parsedData = Date.parse('2012-02-20T03:12:00.00-02:00');

// console.log(parsedData);

function getLocalDay() {
  let days = ['7', '1', '2', '3', '4', '5', '6'];

  return days[date.getDay()]

};

let date = new Date(2012, 0, 3);  // 3 января 2012 года
console.log( getLocalDay(date) );       // вторник, нужно показать 2








const getWeekDat = (date) => {
  switch (date.getDay()) {
    case 0: return "ВС";
    case 1: return "ПН";
    case 2: return "ВТ";
    case 3: return "СР";
    case 4: return "ЧТ";
    case 5: return "ПТ";
    case 6: return "СБ";
  }
};

console.log(getWeekDat(new Date()));



//------------------------------------------------------------------------------------------------------------------------------------------



const getWeekDat = (date) => {
  switch (date.getDay()) {
    case 0: return "ВС";
    case 1: return "ПН";
    case 2: return "ВТ";
    case 3: return "СР";
    case 4: return "ЧТ";
    case 5: return "ПТ";
    case 6: return "СБ";
  }
};

console.log(getWeekDat(new Date()));
