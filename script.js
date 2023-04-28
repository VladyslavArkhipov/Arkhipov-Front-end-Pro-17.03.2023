const btn = document.querySelectorAll(".btn");
const firstPerson = document.querySelector("#first_count");
const secondPerson = document.querySelector("#second_count");
const thirdPerson = document.querySelector("#third_count");
const fourthPerson = document.querySelector("#fourth_count");
const fifthPerson = document.querySelector("#fifth_count");

function votesCounting() {
  for (let i = 0; i < btn.length; i++) {
    let count = 1;
    btn[i].onclick = function () {
      switch (i) {
        case 0:
          firstPerson.textContent = `${count++}`;
          break;
        case 1:
          secondPerson.textContent = `${count++}`;
          break;
        case 2:
          thirdPerson.textContent = `${count++}`;
          break;
        case 3:
          fourthPerson.textContent = `${count++}`;
          break;
        case 4:
          fifthPerson.textContent = `${count++}`;
          break;
      }
    };
  }
}

votesCounting();
