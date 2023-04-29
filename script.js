const form = document.querySelector("#form");
const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const https = "https://";
const http = "http://";

let url;

btn.addEventListener("click", () => {
  if (input.value.slice(0, 8) != https && input.value.slice(0, 7) != http) {
    url = "https://" + input.value;
    form.action = url;
  } else {
    form.action = input.value;
  }
});
