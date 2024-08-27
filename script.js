let screen = document.getElementById("screen");
let currentNumber = "";
let previousNumber = "";
let operator = "";

function appendNum(num) {
  currentNumber = currentNumber + num;
  screen.value = currentNumber;
}

function appendOp(op) {
  operator = op;
  previousNumber = currentNumber;
  currentNumber = "";
  screen.value = previousNumber + op;
}

function calclate() {
  let result = 0;
  switch (operator) {
    case "+":
      result = parseFloat(previousNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = parseFloat(previousNumber) - parseFloat(currentNumber);
      break;
    case "*":
      result = parseFloat(previousNumber) * parseFloat(currentNumber);
      break;
    case "/":
      result = parseFloat(previousNumber) / parseFloat(currentNumber);
      break;
  }

  screen.value = result;
  currentNumber = result;
  previousNumber = "";
  operator = "";
}

function resetScreen() {
  screen.value = "";
  currentNumber = "";
  previousNumber = "";
  operator = "";
}

function deleteItem() {
  currentNumber = currentNumber.slice(0, -1);
  screen.value = currentNumber;
}
