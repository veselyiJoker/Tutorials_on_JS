" use strict "
function checkAge(age) {
	//return (age < 18 ? true : false);
	/*if (age < 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }*/
  return(age < 18 || false);
}

function min(a,b){
	return (alert(`Меньшее число = ${Math.min(a,b)}`));
}

function pow(a,b){
let rez = a;
	for(let count = 1; count < b; count++){
    rez *= a;
	}
	return alert(rez);
}


let age = Number(prompt("Сколько тебе лет ?", 'Личинкам тут не место'));
if (checkAge(age) == true) {
let number = Number(prompt("Число от 0 до 3"));
switch(number){
	case  0: alert('Ноль');
	break;
	case  1: alert('Последний выживший');
	break;
	case 2:
	case 3: alert('Может 2 а может и 3');
	break;
	default: alert('Ты чо? Это как?');
 }
} else {
	alert('Пшол вон!!!');
}

let a = Number(prompt("Число A?")), b = Number(prompt("Число B?"));
min(a,b);

let x = Number(prompt("Число X?")), n = Number(prompt("степень числа A?"));
pow(x,n);

