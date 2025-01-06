// ... (Existing Code)
window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code)

    let memoryValue = null;
    let lastAnswer = null;
    const history = [];
    const historyDiv = document.getElementById("history");
    const display = document.getElementById("display");
    let isDegreeMode = true; 
    let currentExpression = ''; 
    const currentExpressionDisplay = document.getElementById("currentExpressionDisplay");

    //Clear button
    // ... (Existing Code)

    // Exponent functionality
    const exponentButton = document.getElementById("exponent");
    exponentButton.addEventListener("click", () => {
        currentExpression += '**';
        currentExpressionDisplay.textContent = currentExpression;
        display.value = ''; // Clear the display to take the exponent
    });

       // Evaluate button functionality (Modified)
    const evaluateButton = document.getElementById("evaluate");
    evaluateButton.addEventListener("click", () => {
      try {
        const result = eval(currentExpression);
        display.value = result;
        history.push({ expression: currentExpression, result: result });
        currentExpression = result.toString(); // Update current expression with result
        currentExpressionDisplay.textContent = currentExpression; // Update display
      } catch (error) {
        display.value = 'Error';
      }
    });

     //sin button
    const sinButton = document.getElementById("sin");
    sinButton.addEventListener("click", () => {
      currentExpression += 'Math.sin('; // Add sin function to expression
      currentExpressionDisplay.textContent = currentExpression;
      display.value = '';
    });

    // ... (rest of the existing code)
});
