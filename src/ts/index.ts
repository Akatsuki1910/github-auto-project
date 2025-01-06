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

    const clearButton = document.getElementById("clear");
    clearButton.addEventListener("click", () => {
        display.value = '';
        currentExpression = '';
        currentExpressionDisplay.textContent = '';
    });

    // Backspace button functionality
    const backspaceButton = document.getElementById("backspace");
    backspaceButton.addEventListener("click", () => {
        display.value = display.value.slice(0, -1);
        currentExpression = currentExpression.slice(0, -1);
        currentExpressionDisplay.textContent = currentExpression;
    });

    // Plus/Minus button functionality
    const plusMinusButton = document.getElementById("plus-minus");
    plusMinusButton.addEventListener("click", () => {
        if (display.value) {
            display.value = String(parseFloat(display.value) * -1);
        }
    });

        // Square Root button functionality
    const sqrtButton = document.getElementById("sqrt");
    sqrtButton.addEventListener("click", () => {
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue) && currentValue >=0) {
            const result = Math.sqrt(currentValue);
            display.value = result.toString();
            currentExpression = `sqrt(${currentValue})`;
            currentExpressionDisplay.textContent = currentExpression;  
          history.push({ expression: currentExpression, result: result });
        }
    });

    // ... other functions

    // History Toggle Functionality
    const historyButton = document.getElementById("show-history");
    historyButton.addEventListener("click", () => {
      if (historyDiv.style.display === "none") {
        historyDiv.style.display = "block";
        historyDiv.innerHTML = history.map(item => `<p>${item.expression} = ${item.result}</p>`).join('');
      } else {
        historyDiv.style.display = "none";
      }
    });

});
