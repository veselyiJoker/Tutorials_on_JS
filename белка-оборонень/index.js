"use strict"
let journal = [];
function addEntry(events,squirrel) {
	journal.push({events, squirrel});
}

addEntry(["работал","трогал дерево","пицца","бегал","смотрел телевизор"], false);
addEntry(["работал","мороженное","цветная капуста","лазанья","трогал дерево","чистил зубы"], false);
addEntry(["выходной","катался на велосипеде","отдыхал","арахис","пиво"], true);
addEntry(["выходной","дикий кач пресс","учил js","аниме","слушал музыку"], false);
addEntry(["работал","учил js","дикий кач грудь","арахис","пиво"], true);
addEntry(["работал","дикий кач пресс","учил js","спал"], false);
addEntry(["работал","дикий кач грудь","отдыхал","арахис","пиво"], true);
addEntry(["работал","дикий кач пресс","арахис"], false);
addEntry(["работал","дикий кач грудь","пицца","пиво"], false);
addEntry(["работал","дикий кач пресс","отдыхал","пиво"], false);
addEntry(["работал","дикий кач грудь","отдыхал","пиво"], false);

function tablefor(event, journal){
	let table = [0,0,0,0];
	for (let i = 0; i < journal.length; i++){
		let entry = journal[i];
		let index = 0;
		if (entry.events.includes(event)){
			index += 1;
		}
		if (entry.squirrel){
			index += 2;
		}
		table[index] += 1;
	}
	return table;
}/*суть такова каждый элемент table имеет свой индекс первый элемент имеет table[index] ноль второй 1 третий 2 четвёртый 3. Увеличивая их индекс мы передвигаем 
   позицию значения в массиве table на 0(т.е. не двигем) если и арахиса и белки нет, на 1 если арахис есть а белки нет, на 2 если арахиса нет а белка есть, и на 1+2 
   тобиж 3 если и белка и арахис есть а затем через table[index] увеличиваем какое-то то из них на 1    */


let table = tablefor('арахис', journal);
console.log('арахис', table);

function phi(table){
	return (table[3] * table[0] - table[2] * table[1])/ Math.sqrt( (table[2] + table[3]) * 
																   (table[0] + table[1]) * 
																   (table[1] + table[3]) * 
																   (table[0] + table[2]) );
}

let procentTable = (phi(table));
console.log(procentTable);



function journalEvents(journal) {
	let events = [];
	for(let entry of journal) {
		for (let event of entry.events) {
			if (!events.includes(event)) {
               events.push(event);
			}
		}
	}
	return events;
} /*создаётся массив events так-же создаётся переменная entry которая будет обновлятся новым значением из journal до того момента пока массив journal не закончится
  по сути работает как  for(let i = 0; i < journal.length) затем создаётся переменная event которая будет обновляться пока entry.events(по сути это journal[i].events)
  не закончится и если в массив events не включено значение равное event это значение добавляется в массив  */


console.log(journalEvents(journal));

for (let event of journalEvents(journal)) {
	console.log(event +  ":", phi(tablefor(event, journal)));
}












