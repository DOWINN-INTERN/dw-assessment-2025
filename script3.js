const { button } = require("@material-tailwind/react");

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
      if (previousKey !== buttonContent) {
        if (operatorForAdvanced === undefined) {
          if (!display.textContent.includes(buttonContent)) {
            display.textContent += buttonContent;
          } else {
            if (previousNum === undefined) {
              display.textContent = "0.";
            } else if (!display.textContent.includes(buttonContent)) {
              display.textContent += buttonContent;
            }
          }
        }
        previousKey = buttonContent;
      }
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


if (action === "decimal") {
    if (previousKey !== buttonContent) return;
    if (operatorForAdvanced === undefined) {
      if (!display.textContent.includes(buttonContent)) {
        display.textContent += buttonContent;
      } else {
        if (previousNum === undefined) {
          display.textContent = "0.";
        } else {
          if (!display.textContent.includes(buttonContent)) {
            display.textContent += buttonContent;
          }
        }
      }
    }
    previousKey = buttonContent;
  }
  
  
  if (action === "decimal") {
    if (previousKey !== buttonContent)
      if (operatorForAdvanced === undefined) {
        if (!display.textContent.includes(buttonContent)) {
          display.textContent += buttonContent;
        } else {
          if (previousNum === undefined) {
            display.textContent = "0.";
          } else {
            if (!display.textContent.includes(buttonContent)) {
              display.textContent += buttonContent;
            }
          }
        }
      }
    previousKey = buttonContent;
  }

  if (action === "decimal") {
    if (previousKey !== buttonContent) 
        return;
    if (operatorForAdvanced === undefined) {
        if (!display.textContent.includes(buttonContent)) {
            display.textContent += buttonContent;
        }
    }
    else {
        if (previousNum === undefined ) {
            display.textContent = "0.";
        }
        else {
            if (!display.textContent.includes(buttonContent)) {
                display.textContent += buttonContent;
            }
        }
    }
    previousKey = buttonContent;
  }