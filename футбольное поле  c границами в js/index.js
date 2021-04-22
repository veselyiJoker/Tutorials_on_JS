
'use strict'

let field = document.querySelector('.field');

let ball = document.querySelector('.ball');

let fieldCoords = field.getBoundingClientRect();

field.onclick = function (event) {
  let top = `${event.clientY - fieldCoords.y - field.clientTop - ball.offsetHeight / 2}`;
  let left = `${event.clientX - fieldCoords.x - field.clientLeft - ball.offsetWidth / 2}`;

  ball.style.top = `${top}px`;
  ball.style.left = `${left}px`;

  if (top < ball.offsetHeight / 2) {
   ball.style.top = `0px`;
  }

  if (left < ball.offsetWidth / 2) {
   ball.style.left = `0px`;
  }

  if (top > field.clientHeight - 60) {
   ball.style.top = `${field.clientHeight - 60}px`;
  }

  if (left > field.clientWidth - 60) {
   ball.style.left = `${field.clientWidth - 60}px`;
  }

  console.log(field.clientheight);
  console.log(ball.style.top);
  console.log(ball.style.left);
}
