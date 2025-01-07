// ... (Existing Code)
window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code)

    // ... (Existing variables)
    //10のx乗
    const tenToThePowerOfXButton = document.getElementById("ten-to-the-power-of-x");

       // ... (Existing event listeners)
       tenToThePowerOfXButton.addEventListener("click", () => {
        const currentValue = parseFloat(display.value);
        display.value = Math.pow(10, currentValue).toString();
        currentExpression += '10^' + currentValue;
        currentExpressionDisplay.textContent = currentExpression;        
    });

    // ... (rest of the existing code)
});