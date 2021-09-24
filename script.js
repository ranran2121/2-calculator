const display = document.querySelector(".screen");
let calculation = "";
let buffer = "";
const selection = document
  .querySelector(".buttons")
  .addEventListener("click", (event) => {
    checkSelection(event.target.innerText);
  });

function checkSelection(item) {
  if (item == "+" || item == "-" || item == "/" || item == "x") {
    if (item == "x") {
      item = "*";
    }
    if (calculation.length != 0) {
      calculation += item;
      buffer = "";
    }
    display.innerText = 0;
  } else if (item == "C") {
    display.innerText = 0;
    calculation = "";
  } else if (item == "=") {
    calculation = eval(calculation);
    display.innerText = calculation;
    buffer = "";
  } else if (item == "<--") {
    if (calculation.length <= 1) {
      display.innerText = 0;
    } else {
      calculation = calculation.substring(0, calculation.length - 1);
      display.innerText = parseInt(calculation);
    }
  } else {
    calculation += item;
    buffer += item;
    display.innerText = parseInt(buffer);
  }
  //console.log(calculation)
}
