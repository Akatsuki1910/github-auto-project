// ... (Existing code)

const display = document.getElementById("display") as HTMLInputElement;
let currentInput = "";
let currentExpression = "";
const currentExpressionDisplay = document.getElementById("currentExpressionDisplay") as HTMLDivElement;

// ... (Other existing code)

window.addEventListener("DOMContentLoaded", () => {
    // ... existing code
    const powerButton = document.getElementById("power") as HTMLButtonElement;
    powerButton.addEventListener("click", () => {
        currentExpression += "**";
        currentInput += "**"; // Also append to currentInput for evaluation
        currentExpressionDisplay.textContent = currentExpression;
        display.value = currentInput; // Update the main display as well
    });

    const sqrtButton = document.getElementById("sqrt") as HTMLButtonElement;
    sqrtButton.addEventListener("click", () => {
        try {
            const result = Math.sqrt(parseFloat(currentInput));
            display.value = result.toString();
            currentInput = result.toString();
            currentExpression = "";
            currentExpressionDisplay.textContent = "";
        } catch (error) {
            display.value = "Error";
            currentInput = "";
        }

    });

    const keyboardButtons = document.querySelectorAll('.keyboard button');
    keyboardButtons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent;
            if (buttonText) {
                if (buttonText === '=') {
                    try {
                        const result = eval(currentInput);
                        display.value = result.toString();
                        currentInput = result.toString(); // Update currentInput with result
                        currentExpression = ""; // Clear currentExpression after evaluation
                        currentExpressionDisplay.textContent = ""; // Clear the display
                    } catch (error) {
                        display.value = "Error";
                        currentInput = ""; // Reset currentInput on error
                    }
                } else if (['+', '-', '*', '/', '**'].includes(buttonText)) {
                    currentInput += buttonText;
                    currentExpression += buttonText;
                    display.value = currentInput;
                    currentExpressionDisplay.textContent = currentExpression;
                } else {
                    currentInput += buttonText;
                    currentExpression += buttonText; // Update currentExpression
                    display.value = currentInput;
                    currentExpressionDisplay.textContent = currentExpression;
                }
            }
        });
    });
    // ... existing code
});
