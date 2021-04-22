'use strict';

let table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++){
   table.rows[i].cells[i].style.backgroundColor = "red";
};

let elements = document.querySelectorAll(".alertLi");

for (let elem of elements) {
  alert(elem.innerHTML);
}



let element = document.querySelector(".alertLi");

element.style.background = "black";
element.style.color = "white";


let a = prompt("введите число таблицу умножения до которого хотите получить");
let tableOfMul = document.getElementById("tableOfMul");

let mybr = document.createElement('br');

for (let i = 1; i <= a; i++){
  for (let j = 1; j <= 10; j++){
    tableOfMul.innerHTML += `${i} * ${j} = ${i*j}`;
    tableOfMul.appendChild(mybr);
  };
  tableOfMul.innerHTML += ` `;
  tableOfMul.appendChild(mybr);
};

let colorBox = document.querySelectorAll(".colorBox");

for (let colors of colorBox){
  colors.style.backgroundColor = "red";
};

let answer = "да";

if ( answer == prompt("Уничтожить всё? да нет") ) {
  alert("всё будет уничтоженно через 5 секунд")
  setTimeout(()=> document.documentElement.innerHTML = "Всё уничтоженно",5000);
}

let elem = document.getElementById('olElement');

function clear(element) {
   while (element.firstChild) {
   element.firstChild.remove();
 }
}

clear(elem);

let list = document.querySelector('.list');

while (true) {
  let liContent = prompt('добавить в список');
  if (!liContent){
    break;
  }
  list.insertAdjacentHTML("beforeend",`<li>${liContent}</li>`);

}
