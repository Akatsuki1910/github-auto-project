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

    const log10Button = document.getElementById("log10") as HTMLButtonElement;
    log10Button.addEventListener("click", () => {
        try {
            const num = parseFloat(currentInput);
            currentInput = Math.log10(num).toString();
            display.value = currentInput;
        } catch (error) {
            console.error("Error calculating log10:", error);
            display.value = "Error";
        }
    });

    // ... (Rest of the existing code)
});

// ... (rest of the code)
