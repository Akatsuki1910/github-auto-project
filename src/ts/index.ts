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
    const clearHistoryButton = document.getElementById("clear-history") as HTMLButtonElement;
    clearHistoryButton.addEventListener("click", () => {
        historyArr.length = 0; // Clear the history array
        historyDiv.innerHTML = ""; // Clear the history display
    });
    //Added min button
    const minButton = document.getElementById("min") as HTMLButtonElement;
    minButton.addEventListener("click", () => {
        currentInput += "Math.min(";
        currentExpression += "Math.min(";
        updateDisplay();
        updateCurrentExpressionDisplay();
    });
    //Added max2 button
    const max2Button = document.getElementById("max2") as HTMLButtonElement;
    max2Button.addEventListener("click", () => {
        currentInput += "Math.max(";
        currentExpression += "Math.max(";
        updateDisplay();
        updateCurrentExpressionDisplay();

    });
        //Added 10 to the power of x button
    const powerOfTenButton = document.getElementById("power-of-ten") as HTMLButtonElement;
    powerOfTenButton.addEventListener("click", () => {
        currentInput += "10**";
        currentExpression += "10**";
        updateDisplay();
        updateCurrentExpressionDisplay();
    });
//Added Duplicate Button
const duplicateButton = document.getElementById("duplicate") as HTMLButtonElement;
duplicateButton.addEventListener("click", () => {
 if (currentInput.length > 0) {
    const lastChar = currentInput[currentInput.length - 1];
    currentInput += lastChar; 
    currentExpression += lastChar;
    updateDisplay();
    updateCurrentExpressionDisplay();
 }
});
const expm1Button = document.getElementById("expm1") as HTMLButtonElement;
expm1Button.addEventListener("click", () => {
    currentInput += "Math.expm1(";
    currentExpression += "Math.expm1(";
    updateDisplay();
    updateCurrentExpressionDisplay();
});
//Added Cube Root Button
const cbrtButton = document.getElementById("cbrt") as HTMLButtonElement;
cbrtButton.addEventListener("click", () => {
    currentInput += "Math.cbrt(";
    currentExpression += "Math.cbrt(";
    updateDisplay();
    updateCurrentExpressionDisplay();
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
