// ... (Existing Code)
window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code and variables)
    const percentageButton = document.getElementById("percentage") as HTMLButtonElement;

    // ... (Other existing variables and event listeners)

    percentageButton.addEventListener("click", () => {
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            const result = currentValue / 100;
            display.value = result.toString();
            currentExpressionDisplay.textContent = display.value;
        } else {
            display.value = "Invalid Input";
        }
    });

    // ... (rest of the existing code)
});
