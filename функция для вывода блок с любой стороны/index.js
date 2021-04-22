'use strict'

let block = document.querySelector('.block');
let blockquote = document.getElementsByTagName('blockquote');

function positionAt(anchor, position, element) {

let anchorCoords = anchor.getBoundingClientRect();
console.log(anchorCoords);

let message = document.createElement('div');

message.style.cssText=`position:fixed;
                       width: 100px;
                       height: 20px;
                       background-color: #872455;`;

switch (position) {
  case 'top': message.style.left =`${anchorCoords.left}px`;
              message.style.top = `${anchorCoords.top - 20}px`;
   break;
  case 'right':  message.style.left =`${anchorCoords.right}px`;
                 message.style.top = `${anchorCoords.top}px`;
    break;
  case 'bottom': message.style.left =`${anchorCoords.left}px`;
                 message.style.top = `${anchorCoords.bottom}px`;
   break;
  case 'left': message.style.left =`${anchorCoords.left - 100}px`;
               message.style.top = `${anchorCoords.top}px`;
    break;
};

message.innerHTML = element;

return message;
};

block.append( positionAt(blockquote[0],'top','верхний блок') );
block.append( positionAt(blockquote[0],'right','правый блок') );
block.append( positionAt(blockquote[0],'bottom','нижний блок') );
block.append( positionAt(blockquote[0],'left','левый блок') );
