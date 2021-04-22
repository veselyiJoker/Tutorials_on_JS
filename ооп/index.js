let name = prompt('Имя','Isan');
let age = Number(prompt('Возраст','16'));

let user = makeUser(name, age);
alert(user.name);
alert(user.age);

function makeUser(name, age) {
  return {
    name,
    age,
    // ...другие свойства
  };
}

let codes = {
  "+49": "Германия",
  "+41": "Швейцария",
  "+44": "Великобритания",
  // ..,
  "+1": "США"
};

for (let code in codes) {
  alert( +code ); // 49, 41, 44, 1
}

let oldObject = {
  name: 'A',
  address: {
    street: 'Rockfeller street',
    city: 'Gold Town'
  }
}
let newObject = JSON.parse(JSON.stringify(oldObject));

newObject.address.city = 'Iron Force';
console.log('oldObject');
console.log(oldObject);
console.log('newObject');
console.log(newObject);

































