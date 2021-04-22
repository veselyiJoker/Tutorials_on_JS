let ask = (question, yes, no) =>{
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?", () => alert("Вы согласились."), () => alert("Вы отменили выполнение.")
);

/*function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask("Вы согласны?", function() { alert("Вы согласились.")}, function() { alert("Вы отменили выполнение.")});*/

/*let age = 16; 
let welcome;

if (age < 18) { 

  welcome = function() {
  	alert("Привествую вас ваше высочество");                            
  };

} else {

  welcome = function() {
    alert("Здравствуйте!");
  };

 }

welcome();*/

/* let age = 16;
 welcome = (age < 18) ?
   function() { alert("Привествую вас ваше высочество"); } :
   function() { alert("Здравствуйте"); };

 welcome()*/

let age = 16;
 let welcome = (age < 18) ?
   () => alert("Привествую вас ваше высочество"):
   () => alert("Здравствуйте");

 welcome();

 console.log('Здарова');

 
