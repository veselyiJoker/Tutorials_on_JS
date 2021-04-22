'use strict'

let field = document.querySelector('.field');

let ball = document.querySelector('.ball');

ball.style.top = `${field.clientHeight / 2 - ball.offsetHeight / 2}px`;
ball.style.left = `${field.clientWidth / 2 - ball.offsetWidth / 2}px`;

console.log(ball.style.top);
console.log(ball.style.left);

function dotConstructor() {
  let div = document.createElement('div');
  div.style.cssText = `
  position: absolute;
  width: 10px;
  height: 10px;
  background: red;
  border-radius: 999px;`;
  return div;
};

// координаты самого блока field относительно body
// а не точек в его углах
let coords = field.getBoundingClientRect();

// самый левый верхний угол
let leftTopDot = new dotConstructor();
leftTopDot.style.left =` ${coords.left}px`;
leftTopDot.style.top = ` ${coords.top}px`;
field.append(leftTopDot);

// левый верхний угол границы
let leftTopBorderDot = new dotConstructor();
leftTopBorderDot.style.left =` ${coords.left + field.clientLeft}px`;
leftTopBorderDot.style.top = ` ${coords.top + field.clientTop}px`;
field.append(leftTopBorderDot);

// самый правый нижний угол
let rightBottomDot = new dotConstructor();
rightBottomDot.style.left =` ${coords.right}px`;
rightBottomDot.style.top = ` ${coords.bottom}px`;
field.append(rightBottomDot);

// правый нижний угол границы
let rightBottomBorderDot = new dotConstructor();
rightBottomBorderDot.style.left =` ${coords.left + field.clientWidth + field.clientLeft}px`;
rightBottomBorderDot.style.top = ` ${coords.top + field.clientHeight + field.clientTop}px`;
field.append(rightBottomBorderDot);
