let arr = [];
let arrOfNum = [];
let arrOfStr = [];
let arrLength = prompt("Array length is");
if (arrLength === null || isNaN(arrLength)) {
  alert("Window is canceled");
} else {
  arr.length = Number(arrLength);
  for (let i = 0; i < arr.length; i++) {
    let elem = prompt("Enter the element of array:");

    if (!isNaN(elem)) {
      arrOfNum.push(Number(elem));
    } else {
      arrOfStr.push(elem);
    }
  }
  arrOfNum.sort((a, b) => a - b);
  arrOfStr.sort();
  arr = [...arrOfNum, ...arrOfStr];
  arr.splice(1, 3);
  alert(arr);
}
