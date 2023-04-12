const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function generateKey(length, arr) {
  let key = [];
  for (i = 0; i < length; i++) {
    key.push(arr[getRandomInt(arr.length)]);
  }
  return key.join("");
}
console.log(generateKey(16, characters));
