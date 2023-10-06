// Get the result input element by its ID
const result = document.getElementById("result");

// Function to append a value to the result input
function display(value) {
  result.value += value;
}

// Function to clear the result input
function clearAll() {
  result.value = "";
}

// Function to remove the last character from the result input
function clearLast() {
  let currentVal = result.value;
  if (currentVal.length > 0) {
    result.value = currentVal.slice(0, -1); // Remove the last character from the current text
  }
}

// Function to calculate the result of the expression
function calculate() {
  let expression = result.value;

  // Replace 'x' with '*' and '÷' with '/'
  expression = expression.replace(/x/g, "*").replace(/÷/g, "/");

  try {
    // Evaluate the expression using the math.js library
    const expressionResult = math.evaluate(expression);

    // Check if the result is a valid number
    if (!isNaN(expressionResult)) {
      result.value = expressionResult;
    } else {
      result.value = "invalid";
    }
  } catch (e) {
    // Handle any errors that occur during evaluation
    result.value = "Invalid";
  }
}
