// ... (Existing Code)
window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code)

    // ... (Existing variables)
    const ceilButton = document.getElementById("ceil");
    const floorButton = document.getElementById("floor");

    // ... (Existing event listeners)
    ceilButton.addEventListener("click", () => {
        const currentValue = parseFloat(display.value);
        display.value = Math.ceil(currentValue).toString();
        currentExpression += 'ceil(' + currentValue + ')';
        currentExpressionDisplay.textContent = currentExpression;
    });
    floorButton.addEventListener("click", () => {
        const currentValue = parseFloat(display.value);
        display.value = Math.floor(currentValue).toString();
        currentExpression += 'floor(' + currentValue + ')';
        currentExpressionDisplay.textContent = currentExpression;
    });

    signButton.addEventListener("click", () => {
        const currentValue = parseFloat(display.value);
        if (currentValue > 0) {
            display.value = "-" + display.value;
        }
        else if (currentValue < 0) {
            display.value = display.value.substring(1);
        }
        currentExpression += 'sgn(' + currentValue + ')';
        currentExpressionDisplay.textContent = currentExpression;
    });

    // ... (rest of the existing code)
});
