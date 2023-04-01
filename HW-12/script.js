let arr = [];
let arrLength = prompt("Array length is");
if (arrLength === null || isNaN(arrLength)) {
  alert("Window is canceled");
} else {
  arr.length = Number(arrLength);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = prompt("Enter the element of array:");
  }
  arr.sort();
  arr.splice(1, 3);
  alert(arr);
}
