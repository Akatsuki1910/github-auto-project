// ... (Existing Code)
window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code)

    // ... (Existing variables)
    const signButton = document.getElementById("sign");

    // ... (Existing event listeners)
    signButton.addEventListener("click", () => {
        const currentValue = parseFloat(display.value);
        if (currentValue > 0) {
            display.value = "-" + display.value;
        } else if (currentValue < 0) {
            display.value = display.value.substring(1);
        }
        currentExpression += 'sgn(' + currentValue + ')';
        currentExpressionDisplay.textContent = currentExpression;
    });
        
    // ... (rest of the existing code)
});
