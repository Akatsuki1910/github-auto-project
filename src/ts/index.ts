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

    // ... (Other buttons)
    // ... existing buttons
    //Added clear history button
    // ... other buttons
    const exp10Button = document.getElementById("exp10") as HTMLButtonElement;
    exp10Button.addEventListener('click', () => {
        currentInput = Math.pow(10, parseFloat(currentInput)).toString();
        updateDisplay();
    });
    const expm1Button = document.getElementById("expm1") as HTMLButtonElement;
    expm1Button.addEventListener('click', () => {
        currentInput = Math.expm1(parseFloat(currentInput)).toString();
        updateDisplay();
    });
    const ln1pButton = document.getElementById("ln1p") as HTMLButtonElement;
    ln1pButton.addEventListener('click', () => {
        currentInput = Math.log1p(parseFloat(currentInput)).toString();
        updateDisplay();
    });
    const inverseSinButton = document.getElementById("inverse-sin") as HTMLButtonElement;
    inverseSinButton.addEventListener('click', () => {
        currentInput = Math.asin(parseFloat(currentInput)).toString();
        updateDisplay();
    });
    const sinhButton = document.getElementById("sinh") as HTMLButtonElement;
    sinhButton.addEventListener('click', () => {
        currentInput = Math.sinh(parseFloat(currentInput)).toString();
        updateDisplay();
    });

document.querySelectorAll('#calculator button').forEach(button => {
        button.addEventListener('click', () => {
            // ... existing button click logic
        });
    });
    // ... other event listeners
});

// ... other functions

function updateDisplay() {
    display.value = currentInput;
}
function updateCurrentExpressionDisplay() {
    currentExpressionDisplay.textContent = currentExpression;
}
