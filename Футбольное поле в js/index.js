'use strict'

let field = document.querySelector('.field');

let ball = document.querySelector('.ball');

ball.style.top = `${field.clientHeight / 2 - ball.offsetHeight / 2}px`;
ball.style.left = `${field.clientWidth / 2 - ball.offsetWidth / 2}px`;

console.log(ball.style.top);
console.log(ball.style.left);
