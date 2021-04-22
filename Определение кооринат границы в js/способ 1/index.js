'use strict'

let field = document.querySelector('.field');

let ball = document.querySelector('.ball');

ball.style.top = `${field.clientHeight / 2 - ball.offsetHeight / 2}px`;
ball.style.left = `${field.clientWidth / 2 - ball.offsetWidth / 2}px`;

console.log(ball.style.top);
console.log(ball.style.left);

function divConstructor() {
  let div = document.createElement('div');
  return div;
}



let dot = new divConstructor();
// внутринний верхний левый угол
dot.style.cssText = `
position: absolute;
top: 0px;
left: 0px;
width: 10px;
height: 10px;
background: red;
border-radius: 999px;`;

field.append(dot);


let dot1 = new divConstructor();
// самый верхний левый угол
dot1.style.cssText = `
position: absolute;
top: ${-field.clientTop}px;
left: ${-field.clientLeft}px;
width: 10px;
height: 10px;
background: red;
border-radius: 999px;`;

field.append(dot1);


let dot2 = new divConstructor();
// внутринний нижний правый угол
dot2.style.cssText = `
position: absolute;
top: ${field.offsetHeight - 2 * field.clientTop}px;
left: ${field.offsetWidth - 2 * field.clientLeft}px;
width: 10px;
height: 10px;
background: red;
border-radius: 999px;`;

field.append(dot2);



let dot3 = new divConstructor();
// самый нижний правый угол
dot3.style.cssText = `
position: absolute;
top: ${field.offsetHeight - field.clientTop}px;
left: ${field.offsetWidth - field.clientLeft}px;
width: 10px;
height: 10px;
background: red;
border-radius: 999px;`;

field.append(dot3);
