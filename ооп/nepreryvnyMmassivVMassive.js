'use strict'

let arr = [3,-1,-1,3,2,-9,2,2,2,2];

function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;//partial-частичный

  for (let item of arr) { // для каждого элемента массива
    partialSum += item; // добавляем значение элемента к partialSum
    maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
    if (partialSum < 0) partialSum = 0; // ноль если отрицательное
  }

  return maxSum;
};

alert(getMaxSubSum(arr));