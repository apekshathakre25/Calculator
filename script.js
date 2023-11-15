const input = document.getElementById("result");

function appendNumber(num) {
  input.value += num;
}

function appendOperator(operator) {
  if (operator === "-") {
    if (input.value === "") {
      input.value = operator;
    } else {
      return;
    }
  } else {
    if (input.value.length > 0) {
      input.value += operator;
    } else if (operator === "+" || operator === "*" || operator === "/") {
      input.value = "";
    }
  }
}

function calculate() {
  try {
    const result = eval(input.value);

    if (Number.isInteger(result)) {
      input.value = result; 
    } else {
      const formattedResult = parseFloat(result).toFixed(2); 
      input.value = formattedResult;
    }
  } catch (error) {
    input.value = "Error";
  }
}

function clearInput(deleteChar) {
  if (deleteChar === 'backspace') {
    const currentValue = input.value;
    if (currentValue !== "") {
      input.value = currentValue.slice(0, -1);
    }
  } else if (deleteChar === 'reset') {
    input.value = "";
  }
}
