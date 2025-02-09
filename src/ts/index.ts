// ... (Existing code)
const display = document.getElementById("display") as HTMLInputElement;
let currentInput = "";
let currentExpression = "";
const currentExpressionDisplay = document.getElementById("currentExpressionDisplay") as HTMLDivElement;
const historyDiv = document.getElementById("history") as HTMLDivElement;
const historyArr: string[] = [];
let lastAnswer = 0;
let memoryValue = 0;
let mode = 'rad';

window.addEventListener("DOMContentLoaded", () => {
    // existing code
    // ... (Other button event listeners)

    // ... (Other buttons)
    // ... existing buttons
    // ... existing functions
    const tenPercentButton = document.getElementById("ten-percent") as HTMLButtonElement;
    tenPercentButton.addEventListener('click', () => {
        const num = parseFloat(currentInput);
        if (isNaN(num)) {
            currentInput = "Invalid input";
        }
        else {
            currentInput = (num * 0.1).toString();
        }
        updateDisplay();
    });
    const oneOverXButton = document.getElementById("one-over-x") as HTMLButtonElement;
    oneOverXButton.addEventListener('click', () => {
        const num = parseFloat(currentInput);
        if (isNaN(num)) {
            currentInput = "Invalid input";
        }
        else if (num === 0) {
            currentInput = "Cannot divide by zero";
        }
        else {
            currentInput = (1 / num).toString();
        }
        updateDisplay();
    });

    const squareRootButton = document.getElementById("square-root") as HTMLButtonElement;
    squareRootButton.addEventListener('click', () => {
        const num = parseFloat(currentInput);
        if (isNaN(num)) {
            currentInput = "Invalid input";
        }
        else if (num < 0) {
            currentInput = "Cannot calculate square root of negative number";
        }
        else {
            currentInput = Math.sqrt(num).toString();
        }
        updateDisplay();
    });
    // ... (Other existing button event listeners) 
    document.querySelectorAll('#calculator button').forEach(button => {
        button.addEventListener('click', () => {
            // ... existing button click logic
        });
    });
    // ... other functions
});
// ... other existing functions
function updateDisplay() {
    display.value = currentInput;
}
function updateCurrentExpressionDisplay() {
    currentExpressionDisplay.textContent = currentExpression;
}
// ... other existing functions