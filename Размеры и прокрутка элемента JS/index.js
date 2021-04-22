'use strict'

let text = document.querySelector('.text');
let scrollBottomHeight = document.querySelector('.scrollBottomHeight');

let counter = 0;
counter = text.scrollHeight - text.scrollTop - text.clientHeight;

scrollBottomHeight.textContent = counter;
