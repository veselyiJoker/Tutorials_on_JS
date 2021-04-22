'use strict'
 
 function Accumulator() {

 	this.stage = 1;
    
 	this.read = function () {

 	  let a = Number(prompt('повысить градус!!!'));

      this.sum += a;
 	};
    
 };

 let accumulator = new Accumulator();

 accumulator.read();
 accumulator.read();

 console.log(accumulator.sum)