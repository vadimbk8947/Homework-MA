// const div1 = document.createElement('div');
// const div2 = document.createElement('div');
// const div3 = document.createElement('div');
// const div4 = document.createElement('div');
// const div5 = document.createElement('div');

// div1.style.backgroundColor = '#eee';
// div1.style.height = '40px';
// div1.style.width = '40px';
// div1.setAttribute('data-isCliced', false);


// // const ul = document.createElement('ul');

// // for (let i = 0; i < 5; i++) {
// //   const li = document.createElement('li');
// //   li.textContent = i;
// //   ul.append(li);
// // }


// const fragment = document.createDocumentFragment();

// fragment.append(div1);
// fragment.append(div2);
// fragment.append(div3);
// fragment.append(div4);
// fragment.append(div5);


// document.body.append(fragment);
// // div1.after(ul);

// // const copyUl = ul.cloneNode(true);


// // document.body.append(copyUl);



//------------------------------------------------------------------------------------------------------------------------------------------

// Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта.

// Например:

// let data = {
//   "Рыбы": {
//     "форель": {},
//     "лосось": {}
//   },

//   "Деревья": {
//     "Огромные": {
//       "секвойя": {},
//       "дуб": {}
//     },
//     "Цветковые": {
//       "яблоня": {},
//       "магнолия": {}
//     }
//   }
// };
// Синтаксис:



// let container = document.getElementById('container');
// createTree(container, data); // создаёт дерево в контейнере



// function createTree(obj) {
//   const fragment = document.createDocumentFragment();

//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];

//   }

//   return a()
// };


// console.log(createTree(data));


//------------------------------------------------------------------------------------------------------------------------------------------

// const div = document.querySelector('div');


// console.log(div.offsetTop);
// console.log(div.offsetLeft);


//------------------------------------------------------------------------------------------------------------------------------------------


let ul = document.createElement('ul');
document.body.append(ul);

while (true) {
  let data = prompt('Enter element');
  if (!data) {
    break;
  }

  let li = document.createElement('li');
  li.textContent = data;
  ul.append(li);
};






