// ... (Existing Code)

// Add negate button functionality

// Existing code ...

// ... (Existing event listeners and functions)

//Existing code ...

let history: string[] = [];
const historyDisplay = document.getElementById("history") as HTMLDivElement;
let lastAnswer = 0;
let currentExpression = "";
const currentExpressionDisplay = document.getElementById("currentExpressionDisplay") as HTMLDivElement;

let memoryValue = 0; // Initialize memory value

function addToHistory(expression: string, result: string) {
    history.push(`${expression} = ${result}`);
    updateHistoryDisplay();
    lastAnswer = parseFloat(result); // Store the last answer
}

function updateHistoryDisplay(){
    historyDisplay.innerHTML = history.map(item => `<div>${item}</div>`).join('');
}
// ... other existing buttons

// ... existing code

window.addEventListener("DOMContentLoaded", () => {
  // ... existing code
const display = document.getElementById("display") as HTMLInputElement;
// ... other existing button declarations
// ... existing event listeners
const reciprocalBtn = document.getElementById("reciprocal") as HTMLButtonElement;
const squared2Btn = document.getElementById("squared2") as HTMLButtonElement; // Get x^2 button
const exp2Btn = document.getElementById("exp2") as HTMLButtonElement; // Get 2^x button

reciprocalBtn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue) && currentValue !== 0) { // Check for valid input and non-zero value
        const result = 1 / currentValue;
        display.value = result.toString();
        currentExpression = `1/(${currentValue})`;
        currentExpressionDisplay.textContent = currentExpression;
        addToHistory(currentExpression, result.toString());
    } else {
        display.value = "Cannot divide by zero";
    }
});

squared2Btn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = currentValue * currentValue; // Calculate square
        display.value = result.toString();
        currentExpression = `(${currentValue})^2`;
        currentExpressionDisplay.textContent = currentExpression; // Update the display
        addToHistory(currentExpression, result.toString());
    } else {
        display.value = "Invalid input";
    }
});

exp2Btn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = Math.pow(2, currentValue);
        display.value = result.toString();
        currentExpression = `2^(${currentValue})`; // Update currentExpression
        currentExpressionDisplay.textContent = currentExpression;
        addToHistory(currentExpression, result.toString());
    } else {
        display.value = "Invalid input";
    }
});

// ... (rest of the existing code)
});