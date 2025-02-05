// ... (Existing code)
const display = document.getElementById("display") as HTMLInputElement;
let currentInput = "";
let currentExpression = "";
const currentExpressionDisplay = document.getElementById("currentExpressionDisplay") as HTMLDivElement;
const historyDiv = document.getElementById("history") as HTMLDivElement;
const historyArr: string[] = [];
let lastAnswer = 0;
let memoryValue = 0;

window.addEventListener("DOMContentLoaded", () => {
    // existing code
    // ... (Other button event listeners)

    // ... other button listeners
    // ... existing code
    const duplicateButton = document.getElementById("duplicate") as HTMLButtonElement;
    duplicateButton.addEventListener("click", () => {
        if (currentInput) {
            currentInput += currentInput;
            display.value = currentInput;
        }
    });

    // ... (Other button event listeners)
    //Reset Button
    const resetButton = document.getElementById("reset") as HTMLButtonElement;
    resetButton.addEventListener("click", () => {
        currentInput = "";
        currentExpression = "";
        display.value = "";
        currentExpressionDisplay.textContent = "";
    });
    const plusMinusButton = document.getElementById("plus-minus") as HTMLButtonElement;
    plusMinusButton.addEventListener("click", () => {
        if (currentInput) {
            currentInput = (parseFloat(currentInput) * -1).toString();
            display.value = currentInput;
        }
    });
    const allClearButton = document.getElementById("all-clear") as HTMLButtonElement;
    allClearButton.addEventListener("click", () => {
        currentInput = "";
        currentExpression = "";
        display.value = "0"; // Set display to 0
        historyArr.length = 0; // Clear history array
        historyDiv.innerHTML = ""; // Clear history display
        currentExpressionDisplay.textContent = "";

    });
    const copyButton = document.getElementById("copy") as HTMLButtonElement;
    copyButton.addEventListener("click", () => {
        if (display.value) {
            navigator.clipboard.writeText(display.value)
                .then(() => {
                    const messageContainer = document.getElementById("message-container") as HTMLDivElement;
                    messageContainer.textContent = "Copied to clipboard!";
                    setTimeout(() => {
                        messageContainer.textContent = "";
                    }, 2000);
                })
                .catch(err => {
                    console.error("Failed to copy: ", err);
                });
        }
    });
    // ... rest of the code
});

// ... (rest of the code)