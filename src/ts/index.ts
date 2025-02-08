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
    const expm1Button = document.getElementById("expm1Btn") as HTMLButtonElement; // Changed ID
    expm1Button.addEventListener('click', () => {
        currentInput = Math.expm1(parseFloat(currentInput)).toString();
        updateDisplay();
    });
        const tenToThePowerXButton = document.getElementById("ten-to-the-power-x") as HTMLButtonElement;
        tenToThePowerXButton.addEventListener('click', () => {
            currentInput = Math.pow(10, parseFloat(currentInput)).toString();
            updateDisplay();
        });
    document.querySelectorAll('#calculator button').forEach(button => {
        button.addEventListener('click', () => {
            // ... existing button click logic
        });
    });
    const cubeRootButton = document.getElementById("cbrt") as HTMLButtonElement; // New button
    cubeRootButton.addEventListener('click', () => { // New functionality
        currentInput = Math.cbrt(parseFloat(currentInput)).toString();
        updateDisplay();
    });

    const ln2Button = document.getElementById("ln2") as HTMLButtonElement;
    ln2Button.addEventListener('click', () => {
        currentInput = Math.LN2.toString();
        updateDisplay();
    });

    const roundTo2DecimalsButton = document.getElementById("round-to-2-decimals") as HTMLButtonElement;
    roundTo2DecimalsButton.addEventListener('click', () => {
        currentInput = parseFloat(currentInput).toFixed(2);
        updateDisplay();
    });
});

// ... other functions

function updateDisplay() {
    display.value = currentInput;
}
function updateCurrentExpressionDisplay() {
    currentExpressionDisplay.textContent = currentExpression;
}
