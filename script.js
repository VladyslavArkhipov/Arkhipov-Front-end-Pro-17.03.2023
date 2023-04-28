const container = document.querySelector(".container");
const img = document.createElement("img");
container.appendChild(img);
img.src = `img/${getRandomValue()}.jpg`;

function getRandomValue() {
  return Math.floor(Math.random() * (10 - 1) + 1);
}
