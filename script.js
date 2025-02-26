const calculator = document.querySelector('.calculator');
const buttons = calculator.querySelector('.calculator__buttons');
const firstOperend = document.querySelector('.calculator__operend--left');
const operator = document.querySelector('.calculator__operator');
const secondOperend = document.querySelector('.calculator__operend--right');
const calculatedResult = document.querySelector('.calculator__result');

function calculate(n1, operator, n2) {
  let result = 0;
  // TODO : make function to operate according to the n1, n2, operator.
  // ex) if input is n1 : '1', operator : '+', n2 : '2' , 3 will be returned.

  if (operator === '+')
    result = Number(n1) + Number(n2);
  else if (operator === '-')
    result = Number(n1) - Number(n2);
  else if (operator === '*')
    result = Number(n1) * Number(n2);
  else
    result = Number(n1) / Number(n2);

  return String(result);
}

buttons.addEventListener('click', function (event) {
  // will be triggered when click the buttons.

  const target = event.target;
  const action = target.classList[0];
  const buttonContent = target.textContent;
  // ! DO NOT MODIFY(Line 19 - 21).

  if (target.matches('button')) {
    // TODO : make your code to operate calculator
    if (action === 'number') {
      if (firstOperend.textContent === '0')
      {
        firstOperend.textContent = buttonContent;
      }
      else 
      {
        secondOperend.textContent = buttonContent;
      }
      console.log('number ' + buttonContent + ' button');
    }

    if (action === 'operator') {
      if (firstOperend.textContent === '0')
      {
        return;
      }
      else 
      {
        operator.textContent = buttonContent;
      }
      console.log('operator ' + buttonContent + ' button');
    }

    if (action === 'decimal') {
    }

    if (action === 'clear') {
      firstOperend.textContent = '0';
      secondOperend.textContent = '0';
      operator.textContent = '+';
      calculatedResult.textContent = '0';
      console.log('clear button');
    }

    if (action === 'calculate') {
      calculatedResult.textContent = calculate(firstOperend.textContent, operator.textContent, secondOperend.textContent);
      console.log('compute button');
    }
  }
});

// ! Advanced Challenge test and Nightmare test.
const display = document.querySelector('.calculator__display--for-advanced');
let firstNum, operatorForAdvanced, previousKey, previousNum;

buttons.addEventListener('click', function (event) {
  const target = event.target;
  const action = target.classList[0];
  const buttonContent = target.textContent;
  // ! don't touch the code above.

  // ! modify below for Advanced Challenge & Nightmare.
  if (target.matches('button')) {
    if (action === 'number') {

      if (display.textContent === '0')
      {
        display.textContent = buttonContent;
      }
      else {
        if(operatorForAdvanced !== undefined && previousNum === undefined)
        {
          display.textContent = buttonContent;
          previousNum = display.textContent;
        }
        else
        {
          display.textContent += buttonContent;
          previousNum = display.textContent;
        }
      }
      previousKey = buttonContent;
      console.log(firstNum);
      console.log(previousNum);
      console.log(previousKey);
    }
    if (action === 'operator') {

      if (operatorForAdvanced === undefined)
      {
        firstNum = Number(display.textContent);
      }
      operatorForAdvanced = buttonContent;
      previousKey = buttonContent;
      previousNum = undefined;

      console.log(firstNum);
      console.log(previousNum);
      console.log(previousKey);
    }
    if (action === 'decimal') {
      if (previousKey === buttonContent)
        return;

      if (operatorForAdvanced === undefined)
      {
        if (display.textContent.includes(buttonContent))
        {

        }
        else
        { 
          display.textContent += buttonContent;
        }
      }
      else 
      {
        if (previousNum === undefined)
        {
          display.textContent = "0.";
          previousNum = 0;
        }
        else
        {
          display.textContent += buttonContent;
        }
      }

      console.log(firstNum);
      console.log(previousNum);
      console.log(previousKey);

      previousKey = buttonContent;
    }
    if (action === 'clear') {
      firstNum = undefined;
      operatorForAdvanced = undefined;
      previousNum = undefined;
      display.textContent = '0';
      previousKey = undefined;
    }
    if (action === 'calculate') {
      console.log(firstNum);
      console.log(previousNum);
      console.log(previousKey);
      console.log(operatorForAdvanced);

      if (operatorForAdvanced === undefined)
        {
          return;
        }

      if (previousNum === undefined)
      {
        previousNum = display.textContent;
      }

      firstNum = Number(firstNum);
      previousNum = Number(previousNum);
      display.textContent = calculate(firstNum, operatorForAdvanced, previousNum);
      firstNum = Number(display.textContent);
    }
  }
});
