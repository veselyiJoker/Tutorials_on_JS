"use strict"
/* let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";

let user1 = Object.assign({}, user);
console.log(user1);

console.log(Object.keys(user));

let object = {};
object[name] = 'Isan';
console.log ( isAmpty(object) );

function isAmpty(obj) {
 for(let key in obj){
 	return true;
 }
 return false;
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let sum = 0;

for (let key in salaries){
	sum += salaries[key];
}
console.log(sum);

let menu = {
  width: 200 ,
  title: "My menu",
  height: 300,
};

for (let key in menu){
	if (typeof(menu[key]) == "number"){
		menu[key] *= 2;
	}
}









let userr = { name: "Джон" };
let adminn = { name: "Админ" };

function sayHi() {
  alert( this.name );
}

// используем одну и ту же функцию в двух объектах
userr.f = sayHi;
adminn.f = sayHi;

// вызовы функции, приведённые ниже, имеют разное значение this
// "this" внутри функции является ссылкой на объект, который указан "перед точкой"
userr.f(); // Джон  (this == user)
adminn.f(); // Админ  (this == admin)

adminn['f'](); // Админ (неважен способ доступа к методу - через точку или квадратные скобки)



function makeUser() {
  return {
    name: "Джон",
    ref() {
      return this;
    }
  };
};

let user = makeUser();

alert( user.ref().name ); // Джон */

/*let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );*/

let ladder = {
  step: 0,
 up() {
  this.step++;
  return this;
 },

 down() {
  this.step--;
  return this;
 },

 showStep() {
  console.log('пройдено шагов', this.step)
  return this;
 },

};

ladder.up().up().up().up().up().up().up().up().up().up().up().up().up().showStep();
console.log('спуск');
ladder.down().down().down().down().down().down().down().down().down().down().down().down().down().showStep();
console.log('вакханалия');
ladder.up().up().down().up().down().up().up().down().up().up().up().up().down().showStep();




































