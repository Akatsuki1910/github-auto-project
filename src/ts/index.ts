// ... (Existing Code)
window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code and variables)
    const powerButton = document.getElementById("power") as HTMLButtonElement;

    // ... (Other existing variables and event listeners)

    let powerBase: number | null = null;

    powerButton.addEventListener("click", () => {
        if (display.value !== "") {
            powerBase = parseFloat(display.value);
            display.value += "^";
            currentExpressionDisplay.textContent = display.value;
        }
    });

    equalsButton.addEventListener("click", () => {
        // ... (Existing equals code)
        if (powerBase !== null) {
            const expression = display.value.substring(powerBase.toString().length + 1 );
            try {
               const powerValue = eval(expression);
               display.value = Math.pow(powerBase, powerValue).toString();
               currentExpressionDisplay.textContent = display.value;
               addToHistory(display.value);
               addToExpressionHistory(savedExpression);
               powerBase = null;
            } catch (error) {
                display.value = "Error";
            }
           return;
        }
        // ... (Rest of existing equals code)
    });

    // ... (rest of the existing code)
});
