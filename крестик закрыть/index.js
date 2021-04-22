'use strict'

let comments = document.querySelectorAll('.comments');


for (let comment of comments) {
     comment.querySelector('.cross').onclick = function () {
     comment.style.display = 'none';
  }
  
}
