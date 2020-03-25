// const btn = document.querySelector('button');

// btn.addEventListener('click', () => {
//   const div = document.querySelector('.btn');
//   div.hidden = !div.hidden;
// });

//--------------------------------------------------------------------------------------

// const field = document.querySelector('.field');
// const ball = document.querySelector('.ball')

// field.style.backgroundColor = 'green';
// field.style.height = '500px';
// field.style.width = '700px';
// field.style.border = '10px solid black';
// field.style.position = 'relative';

// ball.style.border = '1px solid red';
// ball.style.backgroundColor = 'blue';
// ball.style.height = '80px';
// ball.style.width = '80px';
// ball.style.borderRadius = '50%';
// ball.style.position = 'absolute';
// ball.style.left = '0';
// ball.style.top = '0'
// ball.style.transition = '0.7s all';

// field.addEventListener('click', (e) => {
//   console.log(e.offsetX, e.offsetY);

//   ball.style.left = e.offsetX - ball.offsetWidth / 2 + 'px';
//   ball.style.top = e.offsetY - ball.offsetHeight / 2 + 'px';

// })


//--------------------------------------------------------------------------------------

// const ul = document.querySelector('ul');

// ul.addEventListener('click', (e) => {
//   let target = e.target; // где был клик?

//   if (target.tagName != 'LI') return; // не на TD? тогда не интересует

//   e.target.textContent = +e.target.textContent + 1; // подсветить TD

// })

//-----------------------------------------------3---------------------------------------


// const form = document.querySelector('form');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   console.log('adsags');

// })


//------------------------------------------------4--------------------------------------
const canvas = document.querySelector('.canvas');

canvas.style.height = '500px';
canvas.style.width = '300px';
canvas.style.border = '1px solid black';
canvas.style.margin = 'auto';
canvas.style.position = 'relative';


const dot = document.createElement('span');
dot.style.height = '1px';
dot.style.width = '1px';
dot.style.borderRadius = '50%';
dot.style.backgroundColor = 'red';
dot.style.position = 'absolute';
dot.style.display = 'block'


canvas.addEventListener('mousemove', (e) => {

  const clone = dot.cloneNode(true);
  dot.style.left = e.offsetX + 'px';
  dot.style.top = e.offsetY + 'px';

  canvas.append(clone)
})
