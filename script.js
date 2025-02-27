const calculator = document.querySelector(".calculator");
const buttons = calculator.querySelector(".calculator__buttons");
const firstOperend = document.querySelector(".calculator__operend--left");
const operator = document.querySelector(".calculator__operator");
const secondOperend = document.querySelector(".calculator__operend--right");
const calculatedResult = document.querySelector(".calculator__result");

function calculate(n1, operator, n2) {
	let result = 0;
	let num1 = Number(n1);
	let num2 = Number(n2);
	// TODO : make function to operate according to the n1, n2, operator.
	// ex) if input is n1 : '1', operator : '+', n2 : '2' , 3 will be returned.
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
			result = num1 / num2;
			break;
		default:
			break;
	}
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
			if (firstOperend.textContent == "0") {
				firstOperend.textContent = buttonContent;
			} else {
				secondOperend.textContent = buttonContent;
			}
		}

		if (action === "operator") {
			if (firstOperend.textContent == 0) {
				return;
			} else {
				operator.textContent = buttonContent;
			}
		}

		if (action === "decimal") {
		}

		if (action === "clear") {
			operator.textContent = "+";
			firstOperend.textContent = 0;
			secondOperend.textContent = 0;
			calculatedResult.textContent = 0;
		}

		if (action === "calculate") {
			if (
				firstOperend.textContent !== "" &&
				operator.textContent !== "" &&
				secondOperend.textContent !== ""
			) {
				calculatedResult.textContent = calculate(
					parseInt(firstOperend.textContent),
					operator.textContent,
					parseInt(secondOperend.textContent)
				);
			} else {
				return;
			}
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

	// ! modify below for Advanced Challenge & Nightmare.
	if (target.matches("button")) {
		if (action === "number") {
			// checks if display is on initial state
			if (display.textContent === "0") {
				display.textContent = buttonContent;
			} else {
				if (
					operatorForAdvanced &&
					!previousNum &&
					previousKey !== "."
				) {
					display.textContent = buttonContent;
				} else {
					display.textContent += buttonContent;
				}
				previousNum = display.textContent;
			}
			previousKey = buttonContent;
		}

		if (action === "operator") {
			if (!firstNum) {
				firstNum = display.textContent;
			}
			if (previousNum == display.textContent && operatorForAdvanced) {
				firstNum = calculate(
					firstNum,
					operatorForAdvanced,
					previousNum
				);
				display.textContent = firstNum;
			}
			operatorForAdvanced = buttonContent;
			previousKey = buttonContent;
			previousNum = undefined;
		}
		if (action === "decimal") {
			const hasDecimal = display.textContent.includes(buttonContent)

			if (!operatorForAdvanced) {
				if (!hasDecimal) {
					display.textContent += buttonContent;
				}
			} else {
				if (!previousNum) {
					display.textContent = "0.";
				} else {
					if (!hasDecimal) {
						display.textContent += buttonContent;
					}
				}
			}
			previousKey = buttonContent;
		}
		if (action === "clear") {
			display.textContent = "0";
			firstNum = undefined;
			previousNum = undefined;
			previousKey = undefined;
			operatorForAdvanced = undefined;
			previousKey = buttonContent;
		}
		if (action === "calculate") {
			if (!previousNum && !operatorForAdvanced) return;
			if (!previousNum) {
				previousNum = display.textContent;
			}

			display.textContent = calculate(
				firstNum,
				operatorForAdvanced,
				previousNum
			);

			firstNum = display.textContent;
			previousKey = buttonContent
		}
	}
});
