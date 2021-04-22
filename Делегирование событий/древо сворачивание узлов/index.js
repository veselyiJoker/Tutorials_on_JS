'use  strict'
let message_block = document.querySelector('.message-block');


message_block.addEventListener('click', function (event) {
  if ( event.target.className == 'cross' ) {
    let message = event.target.closest('.message');
    message.remove();
  }

});



let tree = document.querySelector('.tree');

tree.addEventListener('click', function (event) {
  if (event.target.tagName != 'UL') {

    for (let node of event.target.children) {
      node.classList.toggle('hide');
    }

  }

});
