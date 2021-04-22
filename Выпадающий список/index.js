'use strict'

let drop_down_menu = document.querySelector('.drop-down-menu');
let drop_down_menu_button = drop_down_menu.querySelector('.drop-down-menu-button');

drop_down_menu_button.onclick = function() {
  drop_down_menu.classList.toggle('open');
};
