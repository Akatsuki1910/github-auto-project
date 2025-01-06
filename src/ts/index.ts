// ... (Existing Code)
window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code)

    // ... (Existing Code)
    // ... existing code
    // ... (rest of the code)
    let memoryValue = null;
    let lastAnswer = null;
    const history = [];
    const historyDiv = document.getElementById("history");
    const display = document.getElementById("display");
    let isDegreeMode = true; // Degree mode by default
    let currentExpression = ''; // Store the current expression
    const currentExpressionDisplay = document.getElementById("currentExpressionDisplay");

    // Clear button functionality
    const clearButton = document.getElementById("clear");
    clearButton.addEventListener("click", () => {
        display.value = '';
        currentExpression = '';
        currentExpressionDisplay.textContent = '';
    });


    // ... existing code ...

// ... (rest of the code)

 //Added delete last char functionality


    //Settings Button and Functionality


    // ... other functions

    // ... (rest of code)

// Reciprocal Calculation

// Factorial Calculation

// Add keyboard support

// ... (Other existing button event listeners)

// ... (Existing functions)

// ... existing code

// ... (Rest of the code)

const parenthesisOpenButton = document.getElementById("parenthesis-open");
parenthesisOpenButton.addEventListener("click", () => {
  currentExpression += '(';
  currentExpressionDisplay.textContent = currentExpression;
});

const parenthesisCloseButton = document.getElementById("parenthesis-close");
parenthesisCloseButton.addEventListener("click", () => {
  currentExpression += ')';
  currentExpressionDisplay.textContent = currentExpression;
});

const evaluateButton = document.getElementById("evaluate");
evaluateButton.addEventListener("click", () => {
    try {
      const result = eval(currentExpression);
      display.value = result;
      history.push({ expression: currentExpression, result: result });
      currentExpression = result.toString(); // Update currentExpression with the result
      currentExpressionDisplay.textContent = currentExpression; // Update the display
    } catch (error) {
      display.value = "Error";
      currentExpression = ''; // Clear currentExpression on error
      currentExpressionDisplay.textContent = ''; // Clear the display
    }
  });
});
