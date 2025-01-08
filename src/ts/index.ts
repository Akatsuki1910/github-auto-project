// ... (Existing Code)
window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code and variables)
    const percentageButton = document.getElementById("percentage") as HTMLButtonElement;
    const inverseButton = document.getElementById("inverse") as HTMLButtonElement;
    const factorialButton = document.getElementById("factorial") as HTMLButtonElement;

    // ... (Other existing variables and event listeners)

    percentageButton.addEventListener("click", () => {
        // ... (Existing percentage code)
    });

    inverseButton.addEventListener("click", () => {
       // ... (Existing inverse code)
    });

    function factorial(n: number): number {
        if (n === 0) {
            return 1;
        }
        return n * factorial(n - 1);
    }

    factorialButton.addEventListener("click", () => {
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue) && currentValue >= 0 && Number.isInteger(currentValue)) {
            const result = factorial(currentValue);
            display.value = result.toString();
            currentExpressionDisplay.textContent = display.value;            
        } else {
            display.value = "Invalid Input";
        }
    });

    // ... (rest of the existing code)
});
