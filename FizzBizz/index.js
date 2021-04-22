let i = 1;

for (i = 1; i <= 100; i++) {

  if (i % 3 == 0 && i % 5 == 0) {
    console.log('FizzBizz');
    continue;
  }

  if (i % 3 == 0) {
    console.log('Fizz');
    continue;
  }

  if (i % 5 == 0) {
    console.log('Bizz');
    continue;
  }

  console.log(i);

}
