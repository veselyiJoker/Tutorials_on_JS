'use strict'

let button1 = document.querySelector('.button1');
let button2 = document.querySelector('.button2');


button1.onmouseover = function (event) {
  let coords = button1.getBoundingClientRect();

  let tooltip = document.createElement('div');
  tooltip.append(button1.dataset.tooltip);
  tooltip.className = 'tooltip';
  tooltip.style.cssText = `position:absolute;
                           top: ${coords.bottom}px;
                           left: ${coords.left}px;`;

  document.body.append(tooltip);
}

button1.onmouseout = function (event) {
 let tooltip = document.querySelector('.tooltip')
 tooltip.remove();
}
