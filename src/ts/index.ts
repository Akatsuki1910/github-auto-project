// ... (Existing Code)
window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code and variables)
    const powerButton = document.getElementById("power") as HTMLButtonElement;
    const sinButton = document.getElementById("sin") as HTMLButtonElement;
    const cosButton = document.getElementById("cos") as HTMLButtonElement;
    const logButton = document.getElementById("log") as HTMLButtonElement;
    const expButton = document.getElementById("exp") as HTMLButtonElement;

    // ... (Other existing variables and event listeners)

    let powerBase: number | null = null;

    powerButton.addEventListener("click", () => {
        // ... existing code
    });

    sinButton.addEventListener("click", () => {
        // ... (Existing sin code)
    });

    cosButton.addEventListener("click", () => {
        // ... (Existing cos code)
    });

     logButton.addEventListener("click", () => {
        // ... existing code
    });

    expButton.addEventListener("click", () => {
        if (display.value !== "") {
            const num = parseFloat(display.value);
            display.value = Math.exp(num).toString();
            currentExpressionDisplay.textContent = display.value;
            addToHistory(display.value);
            addToExpressionHistory(savedExpression);
        }
    });

    equalsButton.addEventListener("click", () => {
        // ... (Existing equals code)
        if (powerBase !== null) {
            // ... (Existing power code)
           return;
        }
        // ... (Rest of existing equals code)
    });

    // ... (rest of the existing code)
});
