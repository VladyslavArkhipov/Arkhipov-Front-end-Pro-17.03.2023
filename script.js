const form = document.querySelector("#form");
const input = document.querySelector("#input");
const btn = document.querySelector("#btn");

let url;

input.addEventListener("input", () => {
  console.log(input.value);
});

btn.addEventListener("click", (e) => {
  if (
    input.value.slice(0, 8) !== "https://" ||
    input.value.slice(0, 7) !== "http://"
  ) {
    url = "https://" + input.value;
    form.action = url;
  }
});
