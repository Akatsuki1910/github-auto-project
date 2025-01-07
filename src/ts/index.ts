// ... (Existing Code)
window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code)

    // ... (Existing variables)
    const inverseButton = document.getElementById("inverse");

    // ... (Existing event listeners)

    inverseButton.addEventListener("click", () => {
        const currentValue = parseFloat(display.value);
        if (currentValue !== 0) {
            const inverseValue = 1 / currentValue;
            display.value = inverseValue.toString();
            currentExpression +=  (isNaN(currentValue) ? "|" : "") + "1/(" + currentValue + ")" + (isNaN(currentValue) ? "|" : "");
            currentExpressionDisplay.textContent = currentExpression;
        } else {
            display.value = "Error"; // Or handle division by zero as needed
            currentExpression = "";
            currentExpressionDisplay.textContent = "Error";
        }
    });

    // ... (rest of the existing code)
});
