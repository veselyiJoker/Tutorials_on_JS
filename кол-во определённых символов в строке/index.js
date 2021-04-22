 "use strict"
let string = prompt("Введите строку");
let char = prompt("Введите символ");
let count = 0;

for (let i = 0; i < string.length; i++) {
	if (char === string[i]) {
		count++;
	}

}
console.log(typeof char.toUpperCase);
console.log(`В этой строке ${count} символов ${char}`);

let fire = {
	force:3000,
	height:500,
	name:'вам всем пиздец',
};

console.log(Object.keys(fire));

