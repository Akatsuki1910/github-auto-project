// ... (Existing code)

const display = document.getElementById("display") as HTMLInputElement;
let currentInput = "";
let currentExpression = "";
const currentExpressionDisplay = document.getElementById("currentExpressionDisplay") as HTMLDivElement;

// ... (Other existing code)

window.addEventListener("DOMContentLoaded", () => {
    // ... existing code

    const backspaceButton = document.getElementById("backspace") as HTMLButtonElement;
    backspaceButton.addEventListener("click", () => {
        currentInput = currentInput.slice(0, -1);
        currentExpression = currentExpression.slice(0, -1); // Update the current expression as well
        display.value = currentInput;
        currentExpressionDisplay.textContent = currentExpression;
    });

    const negateButton = document.getElementById("negate") as HTMLButtonElement;
    negateButton.addEventListener("click", () => {
        if (currentInput !== "") {
            currentInput = (parseFloat(currentInput) * -1).toString();
            display.value = currentInput;

            // Update currentExpression (replace last number with negated value)
            const lastNumberRegex = /([\d.]+)$/;
            currentExpression = currentExpression.replace(lastNumberRegex, currentInput);
            currentExpressionDisplay.textContent = currentExpression;
        }
    });

    // ... (rest of the existing code)
});
