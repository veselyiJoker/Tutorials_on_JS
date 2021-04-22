let lenX = Number(prompt('Введите длину'));
let lenY = Number(prompt('Введите высоту'));

let chessBord = [];

for (let i = 0; i < lenY; i++) {
  chessBord[i] = [];

  if (i % 2 == 0) {

    for (let j = 0; j < lenX; j++) {

      if (j % 2 == 0) {
        chessBord[i][j] = '_';
      } else {
        chessBord[i][j] = '#';
      }

    }

  } else {

    for (let j = 0; j < lenX; j++) {

      if (j % 2 == 0) {
        chessBord[i][j] = '#';
      } else {
        chessBord[i][j] = '_';
      }

    }

  }



}

console.log(chessBord);
