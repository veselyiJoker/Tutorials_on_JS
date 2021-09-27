'use strict'

let home = document.querySelector(".home");

const moveBackground = ()=> {
  home.style.backgroundPosition = `${-event.clientX * 0.1}px ${-event.clientY * 0.1}px`;
}

const mouseoutBackground = ()=> {
  home.style.transition = '0.5s';
  home.style.backgroundPosition = '50% 10%';
}


const mouseoverBackground = () => {
  home.style.transition = '0.1s';
}

home.addEventListener('mousemove',moveBackground);
home.addEventListener('mouseout', mouseoutBackground);
home.addEventListener('mouseover', mouseoverBackground);