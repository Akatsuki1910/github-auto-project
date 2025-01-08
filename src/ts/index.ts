// ... (Existing Code)
window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code and variables)
    const sqrtButton = document.getElementById("sqrt") as HTMLButtonElement;
    const squareButton = document.getElementById("square") as HTMLButtonElement;
    // ... (Other existing variables)

    // ... (Existing event listeners)

    sqrtButton.addEventListener("click", () => {
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue) && currentValue >= 0) {
            const result = Math.sqrt(currentValue);
            display.value = result.toString();
            currentExpressionDisplay.textContent = display.value;
        } else {
            display.value = "Invalid Input";
        }
    });

    squareButton.addEventListener("click", () => {
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            const result = currentValue * currentValue;
            display.value = result.toString();
            currentExpressionDisplay.textContent = display.value;
        } else {
            display.value = "Invalid Input";
        }
    });

    // ... (rest of the existing code)
});
