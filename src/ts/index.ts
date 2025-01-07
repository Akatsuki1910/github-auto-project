// ... (Existing Code)
window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code)

    // ... (Existing variables)
    const squareButton = document.getElementById("square");

    // ... (Existing event listeners)
    squareButton.addEventListener("click", () => {
        const currentValue = parseFloat(display.value);
        const squareValue = currentValue * currentValue;
        display.value = squareValue.toString();
        currentExpression +=  (isNaN(currentValue) ? "|" : "") + currentValue + "²" + (isNaN(currentValue) ? "|" : "");
        currentExpressionDisplay.textContent = currentExpression; 
    });

    // ... (rest of the existing code)
});
