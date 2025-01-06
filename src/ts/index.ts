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
    const clearButton = document.getElementById("clear");
    clearButton.addEventListener("click", () => {
        display.value = '';
        currentExpression = '';
        currentExpressionDisplay.textContent = '';
    });

    // Backspace button
    const backspaceButton = document.getElementById("backspace");
    backspaceButton.addEventListener("click", () => {
        display.value = display.value.slice(0, -1);
        currentExpression = currentExpression.slice(0, -1);
        currentExpressionDisplay.textContent = currentExpression;
    });

    // Plus/Minus button 
    const plusMinusButton = document.getElementById("plus-minus");
    plusMinusButton.addEventListener("click", () => {
        if (display.value) {
            display.value = String(parseFloat(display.value) * -1);
        }
    });

    // Square Root button
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
    const percentButton = document.getElementById("percent");
    percentButton.addEventListener("click", () => {
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            const result = currentValue / 100;
            display.value = result.toString();
            currentExpression = `${currentValue}%`;
            currentExpressionDisplay.textContent = currentExpression;
            history.push({ expression: currentExpression, result: result });
        }
    });

    //History button
    const historyButton = document.getElementById("show-history");
    historyButton.addEventListener("click", () => {
      if (historyDiv.style.display === "none") {
        historyDiv.style.display = "block";
        historyDiv.innerHTML = history.map(item => `<p>${item.expression} = ${item.result}</p>`).join('');
      } else {
        historyDiv.style.display = "none";
      }
    });

    // Pi button 
    const piButton = document.getElementById("pi");
    piButton.addEventListener("click", () => {
        display.value = Math.PI.toString();
        currentExpression = 'π';
        currentExpressionDisplay.textContent = currentExpression; 
    });

    // Factorial button 
    const factorialButton = document.getElementById("factorial");
    factorialButton.addEventListener("click", () => {
        const currentValue = parseInt(display.value);
        if (!isNaN(currentValue) && currentValue >= 0) {
            let result = 1;
            for (let i = 2; i <= currentValue; i++) {
                result *= i;
            }
            display.value = result.toString();
            currentExpression = `${currentValue}!`;
            currentExpressionDisplay.textContent = currentExpression;
            history.push({ expression: currentExpression, result: result });
        }
    });

        // Decimal button functionality
    const decimalButton = document.getElementById("decimal");
    decimalButton.addEventListener("click", () => {
        if (!display.value.includes('.')) {
            display.value += '.';
            currentExpression += '.';
            currentExpressionDisplay.textContent = currentExpression; 
        }
    });

});
