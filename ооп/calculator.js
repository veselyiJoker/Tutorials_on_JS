'use strict'
function Calculator(a, b) {

    this.sum = a + b;

	this.mul = a * b;


	this.read = function() {
     console.log('sum=',this.sum,'mul=',this.mul);
     //кароче вот-так нельзя (this.read(a, b) {...})
	};

};//создаёт объект через конструктор Calculator с методом read и свойствами sum(сумма) и mul(умножение)

let a = Number(prompt('число a',14));
let b = Number(prompt('число b',11));

let calculator = new Calculator(a, b);

calculator.read();