const wrapper = document.querySelector(`.wrapper`);
const maxRows = 10;
const maxCells = 10;

function createTable() {
  let tableString = `<table>`;

  for (let i = 0; i <= maxRows; i++) {
    tableString += `<tr>`;
    for (let j = 0; j <= maxCells; j++) {
      tableString += `<td>${getRandomValue()}</td>`;
    }
    tableString += `</tr>`;
  }

  wrapper.innerHTML = tableString += `</table>`;
}

function getRandomValue() {
  return Math.floor(Math.random() * (100 - 1) + 1);
}

createTable();
