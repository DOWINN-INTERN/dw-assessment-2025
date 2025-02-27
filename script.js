const calculator = document.querySelector(".calculator");
const buttons = calculator.querySelector(".calculator__buttons");
const firstOperend = document.querySelector(".calculator__operend--left");
const operator = document.querySelector(".calculator__operator");
const secondOperend = document.querySelector(".calculator__operend--right");
const calculatedResult = document.querySelector(".calculator__result");

function calculate(n1, operator, n2) {
  let result = 0;
  const num1 = parseFloat(n1);
  const num2 = parseFloat(n2);

  // TODO : make function to operate according to the n1, n2, operator.

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;

    case "-":
      result = num1 - num2;
      break;

    case "*":
      result = num1 * num2;
      break;

    case "/":
      result = num2 !== 0 ? num1 / num2 : "Error";
      break;

    default:
      result = "Error";
  }
  // ex) if input is n1 : '1', operator : '+', n2 : '2' , 3 will be returned.
  return String(result);
}

buttons.addEventListener("click", function (event) {
  // will be triggered when click the buttons.

  const target = event.target;
  const action = target.classList[0];
  const buttonContent = target.textContent;
  // ! DO NOT MODIFY(Line 19 - 21).

  if (target.matches("button")) {
    // TODO : make your code to operate calculator
    if (action === "number") {
      if (firstOperend.textContent === "0") {
        firstOperend.textContent =
          firstOperend.textContent !== 0
            ? buttonContent
            : secondOperend.textContent + buttonContent;
      } else {
        secondOperend.textContent =
          secondOperend.textContent !== 0
            ? buttonContent
            : secondOperend.textContent + buttonContent;
      }
    }

    if (action === "operator") {
      operator.textContent = buttonContent;
    }

    if (action === "clear") {
      firstOperend.textContent = "0";
      operator.textContent = "+";
      secondOperend.textContent = "0";
      calculatedResult.textContent = "0";
    }

    if (action === "calculate") {
      calculatedResult.textContent = calculate(
        firstOperend.textContent,
        operator.textContent,
        secondOperend.textContent
      );
    }
  }
});

// ! Advanced Challenge test and Nightmare test.
const display = document.querySelector(".calculator__display--for-advanced");
let firstNum, operatorForAdvanced, previousKey, previousNum;

buttons.addEventListener("click", function (event) {
  const target = event.target;
  const action = target.classList[0];
  const buttonContent = target.textContent;
  // ! don't touch the code above.

  if (target.matches("button")) {
    //ito lang galawin
    if (action === "number") {
      if (
        display.textContent === "0" ||
        (operatorForAdvanced &&
          previousKey !== "." &&
          previousNum === undefined)
      ) {
        display.textContent = buttonContent;
      } else {
        display.textContent += buttonContent;
      }
      previousNum = display.textContent;
      previousKey = buttonContent;
    }

    if (action === "operator") {
      if (firstNum === undefined) {
        firstNum = display.textContent;
      }
      if (previousNum === display.textContent && operatorForAdvanced) {
        display.textContent = calculate(
          firstNum,
          operatorForAdvanced,
          previousNum
        );
        firstNum = display.textContent;
      }
      previousNum = undefined;
      operatorForAdvanced = buttonContent;
      previousKey = buttonContent;
    }

    if (action === "decimal") {
      if (previousKey !== buttonContent)
        if (operatorForAdvanced === undefined) {
          if (!display.textContent.includes(buttonContent)) {
            display.textContent += buttonContent;
          }
        } else {
          if (previousNum === undefined) {
            display.textContent = "0.";
          } else {
            if (!display.textContent.includes(buttonContent)) {
              display.textContent += buttonContent;
            }
          }
        }
      previousKey = buttonContent;
    }

    if (action === "clear") {
      firstNum = undefined;
      operatorForAdvanced = undefined;
      previousNum = undefined;
      display.textContent = "0";
      previousKey = undefined;
    }
    if (action === "calculate") {
      if (operatorForAdvanced !== undefined) {
        if (previousNum === undefined) {
          previousNum = display.textContent;
        }

        display.textContent = calculate(
          firstNum,
          operatorForAdvanced,
          previousNum
        );
        firstNum = Number(display.textContent);
      }
    }
  }
});
