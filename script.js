// Updateted code
let screen = document.getElementById("screen");

function appendNum(num) {
  screen.value += num;
}

function appendOp(op) {
  screen.value += op;
}

function calclate(e) {
  e.preventDefault();
  screen.value = eval(screen.value);
}

function resetScreen() {
  screen.value = "";
}

function deleteItem() {
  screen.value = screen.value.slice(0, -1);
}

function onKeyDown(e) {
  console.log(e.key);
  if (e.key === "Backspace") {
    deleteItem();
  } else if (
    ![
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      "+",
      "-",
      "*",
      "/",
      "=",
      "Enter",
      "(",
      ")",
      "ArrowLeft",
      "ArrowRight",
    ].includes(e.key)
  ) {
    e.preventDefault();
  }
}

// **Old code

// let screen = document.getElementById("screen");
// let currentNumber = "";
// let previousNumber = "";
// let operator = "";

// function appendNum(num) {
//   currentNumber = currentNumber + num;
//   screen.value = currentNumber;
// }

// function appendOp(op) {
//   operator = op;
//   previousNumber = currentNumber;
//   currentNumber = "";
//   screen.value = previousNumber + op;
// }

// function calclate() {
//   let result = 0;
//   switch (operator) {
//     case "+":
//       result = parseFloat(previousNumber) + parseFloat(currentNumber);
//       break;
//     case "-":
//       result = parseFloat(previousNumber) - parseFloat(currentNumber);
//       break;
//     case "*":
//       result = parseFloat(previousNumber) * parseFloat(currentNumber);
//       break;
//     case "/":
//       result = parseFloat(previousNumber) / parseFloat(currentNumber);
//       break;
//   }

//   screen.value = result;
//   currentNumber = result;
//   previousNumber = "";
//   operator = "";
// }

// function resetScreen() {
//   screen.value = "";
//   currentNumber = "";
//   previousNumber = "";
//   operator = "";
// }

// function deleteItem() {
//   currentNumber = currentNumber.slice(0, -1);
//   screen.value = currentNumber;
// }
