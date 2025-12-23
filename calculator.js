let display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  let expression = display.value;
  let operator;
  let result;

  if (expression.includes('+')) {
    operator = '+';
  } else if (expression.includes('-')) {
    operator = '-';
  } else if (expression.includes('*')) {
    operator = '*';
  } else if (expression.includes('/')) {
    operator = '/';
  }

  let parts = expression.split(operator);
  let num1 = Number(parts[0]);
  let num2 = Number(parts[1]);
  
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
  }

  display.value = result;
}
