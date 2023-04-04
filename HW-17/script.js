function taskChoose() {
  let taskNumber = Number(prompt("Enter the number of the task"));
  if (isNaN(taskNumber) || taskNumber === null || taskNumber > 4) {
    alert("The window is closed");
  } else if (taskNumber === 1) {
    //1
    const arrayWithAnyTypes = [1, "arr", "arrr", 4, 5, "add", 15, "6"];

    function average(arr) {
      let newArr = [];
      let result = 0;

      arr.forEach((el) => {
        if (!isNaN(parseInt(el))) {
          newArr.push(Number(el));
        }
      });
      for (let i = 0; i < newArr.length; i++) {
        result += newArr[i];
      }

      return console.log((result = result / newArr.length));
    }
    average(arrayWithAnyTypes);
  } else if (taskNumber === 2) {
    //2
    function doMath(x, znak, y) {
      x = prompt("Enter first number");

      if (isNaN(x) || x === null) {
        return alert("You canceled the window or entered not a number");
      }
      y = prompt("Enter second number");
      if (isNaN(y) || y === null) {
        return alert("You canceled the window or entered not a number");
      }
      znak = prompt("Enter znak");
      if (znak === "+") {
        return alert(`${x} ${znak} ${y} = ${+x + +y}`);
      } else if (znak === "-") {
        return alert(`${x} ${znak} ${y} = ${x - y}`);
      } else if (znak === "*") {
        return alert(`${x} ${znak} ${y} = ${x * y}`);
      } else if (znak === "/" && y !== 0) {
        return alert(`${x} ${znak} ${y} = ${x / y}`);
      } else if (znak === "/" && y === 0) {
        return alert(`There is 0 as second number`);
      } else if (znak === "%") {
        return alert(`${x} ${znak} ${y} = ${x % y}`);
      } else if (znak === "^") {
        return alert(`${x} ${znak} ${y} = ${x ** y}`);
      } else {
        return alert("You canceled the window or entered not a znak ");
      }
    }
    doMath();
  } else if (taskNumber === 3) {
    //3

    function doubleArray() {
      let mainArr = [];
      mainArr.length = Number(prompt("Enter the length of array"));
      if (
        mainArr.length === null ||
        isNaN(mainArr.length) ||
        mainArr.length === 0
      ) {
        return alert("The window is closed or you entered not a number");
      }
      for (let i = 0; i < mainArr.length; i++) {
        mainArr[i] = [];
        mainArr[i].length = Number(
          prompt(`Enter the length of the subarray № ${i + 1}`)
        );
        if (
          mainArr[i].length === null ||
          isNaN(mainArr[i].length) ||
          mainArr.length[i] === 0
        ) {
          return alert("The window is closed or you entered not a number");
        }
        for (let y = 0; y < mainArr[i].length; y++) {
          mainArr[i][y] = prompt(`Enter the element № ${y + 1}`);
        }
      }

      return console.log(mainArr);
    }
    doubleArray();
  } else if (taskNumber === 4) {
    //4

    function stringTrim(str, letter) {
      if (typeof letter === "string") {
        for (let i = 0; i < str.length; i++) {
          if (str[i] === letter) {
            str = str.replace(str[i], "");
          }
        }
        return console.log(str);
      } else {
        letter.forEach((letter) => {
          for (let i = 0; i < str.length; i++) {
            if (str[i] === letter) {
              str = str.replace(str[i], "");
            }
          }
        });
        return console.log(str);
      }
    }

    stringTrim("hello world", ["l", "ы"]);
  }
}
taskChoose();
