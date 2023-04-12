const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(arr, el) {
  if (arr.includes(el) === false) {
    return "This element is not in array";
  } else {
    arr.splice(arr.indexOf(el), 1);
    return arr;
  }
}
console.log(removeElement(array, 5));
console.log(removeElement(array, 4));
console.log(removeElement(array, 3));
console.log(removeElement(array, 2));
console.log(removeElement(array, 1));
