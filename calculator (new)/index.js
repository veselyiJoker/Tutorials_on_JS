function calculator(a, b) {
	this.sum = a + b ;
	this.mul = a * b ;
}


let a = +prompt('Введите А');
let b = +prompt('Введите В');

let calculatorObject = new calculator(a, b);

console.log(calculatorObject);



