'use strict'

let options = {
  top: 10,
  left: 10,
  html: "Я уведомление",
  class: "welcome"
}



function showNofication(options) {
 let div = document.createElement('div');

 div.style.cssText =`
               position: absolute;
               top: ${options.top}px;
               left: ${options.left}px;
               display: flex;
               flex-direction: column;
               justify-content: center;
               width: 400px;
               height: 100px;
               text-align: center;
               border: 1px solid black;
               border-radius: 10px;`;

 div.textContent = `${options.html}`;
 div.className = `${options.class}`;

 document.body.prepend(div);
 setTimeout( ()=> div.remove(), 1500);
}

setInterval( () => showNofication(options), 2500 );
