// ... (Existing Code)
window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code)

    // ... (Existing variables)
    const cubeButton = document.getElementById("cube");

    // ... (Existing event listeners)
    cubeButton.addEventListener("click", () => {
        const currentValue = parseFloat(display.value);
        const cubeValue = currentValue * currentValue * currentValue;
        display.value = cubeValue.toString();
        currentExpression +=  (isNaN(currentValue) ? "|" : "") + currentValue + "³" + (isNaN(currentValue) ? "|" : "");
        currentExpressionDisplay.textContent = currentExpression; 
    });
        
    // ... (rest of the existing code)
});
