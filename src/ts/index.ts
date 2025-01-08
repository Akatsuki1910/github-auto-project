// ... (Existing Code)
window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code and variables)
    const powerButton = document.getElementById("power") as HTMLButtonElement;
    const sinButton = document.getElementById("sin") as HTMLButtonElement;
    const cosButton = document.getElementById("cos") as HTMLButtonElement;
    const logButton = document.getElementById("log") as HTMLButtonElement;
    const expButton = document.getElementById("exp") as HTMLButtonElement;
    const tenPowerButton = document.getElementById("ten-power") as HTMLButtonElement;
    const eulerButton = document.getElementById("euler") as HTMLButtonElement;

    // ... (Other existing variables and event listeners)

    let powerBase: number | null = null;

    // ... existing event listeners

    eulerButton.addEventListener("click", () => {
        display.value = Math.E.toString();
        currentExpressionDisplay.textContent = display.value;
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
