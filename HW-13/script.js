let arr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

//1
let minIndex = arr.reduce((minIndex, currentValue, currentIndex, array) => {
  if (currentValue < array[minIndex]) {
    return currentIndex;
  } else {
    return minIndex;
  }
}, 0);

console.log("Min элемент массива: " + arr[minIndex]);
console.log("Порядковый номер Min элемента: " + minIndex);

//2
let maxIndex = arr.reduce((maxIndex, currentValue, currentIndex, array) => {
  if (currentValue > array[maxIndex]) {
    return currentIndex;
  } else {
    return maxIndex;
  }
}, 0);
console.log("Max элемент массива: " + arr[maxIndex]);
console.log("Порядковый номер max элемента: " + maxIndex);

//3
let negativeValues = arr.filter((item) => item < 0);
console.log(
  "Количество отрицательных элементов массива: " + negativeValues.length
);

//4
let notPareValues = arr.filter((item) => item % 2 != 0);
console.log("Количество нечетных элементов массива: " + notPareValues.length);

//5
let pareValues = arr.filter((item) => item % 2 === 0);
console.log("Количество четных элементов массива: " + pareValues.length);

//6
let SumOfParePositivValues = pareValues
  .filter((item) => item > 0)
  .reduce((sum, current) => sum + current, 0);
console.log(
  "Сумма всех положительных элементов массива: " + SumOfParePositivValues
);

//7
let SumOfNotParePositivValues = notPareValues
  .filter((item) => item > 0)
  .reduce((sum, current) => sum + current, 0);
console.log(
  "Сумма всех положительных элементов массива: " + SumOfNotParePositivValues
);

//8
let multOfPositivValues = arr
  .filter((item) => item > 0)
  .reduce((mult, current) => mult * current, 1);
console.log("Произведение положительных элементов: " + multOfPositivValues);

//9
let arrOfZeroesAndMaxValue = arr.map((item) => {
  if (item != arr[maxIndex]) {
    return (item = 0);
  } else {
    return (item = arr[maxIndex]);
  }
});
console.log(
  "Массив с максимальным эдементом и остальными равными нулю выглядит так : " +
    arrOfZeroesAndMaxValue
);
