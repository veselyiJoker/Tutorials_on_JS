'use strict'

let menu = document.querySelector('.menu');

class Menu {

  constructor(elem) {
    this._elem = elem;
    elem.onclick = this.onClick.bind(this); // (*)
  }

  save() {
    alert('сохраняю');
  }

  load() {
    alert('загружаю');
  }

  search() {
    alert('ищу');
  }

  onClick(event) {

    let action = event.target.dataset.action;
    if (action) {
      this[action]();
    }

  };

}

new Menu(menu);



let subscribe_block = document.querySelector('.subscribe-block');

subscribe_block.addEventListener("click", function(event) {
  let id = event.target.dataset.toggleId;
  if (!id) return;

  let elem = document.getElementById(id);

  elem.hidden = !elem.hidden;
});




document.addEventListener("click", function(event) {

  if (event.target.dataset.counter != undefined) { // если есть атрибут...
    event.target.value++;
  }

});




let table = document.querySelector('table');

table.onmouseover = function(event) {
   if ( event.target.closest('td') ) {
     event.target.closest('td').classList.toggle('highlight');
   };
};
