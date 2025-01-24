// ... (Existing Code)

// Add factorial button

// Existing code ...

// ... (Existing event listeners and functions)

//Existing code ...

let history: string[] = [];
const historyDisplay = document.getElementById("history") as HTMLDivElement;
let lastAnswer = 0;
let memory = 0;
let mode = "rad"; // Initialize mode to radians
let isInverse = false; // Flag for inverse mode
let isParenthesesOpen = false;
let currentExpression = "";
const currentExpressionDisplay = document.getElementById("currentExpressionDisplay") as HTMLDivElement;

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
const calculateBtn = document.getElementById("calculate") as HTMLButtonElement;
const display = document.getElementById("display") as HTMLInputElement;
const reciprocalBtn = document.getElementById("reciprocal") as HTMLButtonElement;
const openParenBtn = document.getElementById("openParen") as HTMLButtonElement;
const closeParenBtn = document.getElementById("closeParen") as HTMLButtonElement;
const squareBtn = document.getElementById("square") as HTMLButtonElement;

reciprocalBtn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue) && currentValue !== 0) {
        display.value = (1 / currentValue).toString();
    } else if (currentValue === 0) {
        display.value = "Cannot divide by zero";
    }
});

openParenBtn.addEventListener('click', () => {
    currentExpression += "(";
    currentExpressionDisplay.textContent = currentExpression;
});

closeParenBtn.addEventListener('click', () => {
    currentExpression += ")";
    currentExpressionDisplay.textContent = currentExpression;
});

squareBtn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (currentValue * currentValue).toString();
    }
});

});