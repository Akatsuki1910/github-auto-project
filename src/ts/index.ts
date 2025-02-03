// ... (Existing code)

const display = document.getElementById("display") as HTMLInputElement;
let currentInput = "";

// ... (Other existing code)

window.addEventListener("DOMContentLoaded", () => {
    // ... existing code
    const powerButton = document.getElementById("power") as HTMLButtonElement;
    powerButton.addEventListener("click", () => {
        currentExpression += "**";
        currentExpressionDisplay.textContent = currentExpression;
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
                    } catch (error) {
                        display.value = "Error";
                        currentInput = ""; // Reset currentInput on error
                    }
                } else if (['+', '-', '*', '/', '**'].includes(buttonText)) {
                    currentInput += buttonText;
                    display.value = currentInput;
                }
                 else {
                    currentInput += buttonText;
                    display.value = currentInput;
                }
            }
        });
    });
    // ... existing code
});
