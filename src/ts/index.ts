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
const negateBtn = document.getElementById("negate") as HTMLButtonElement;
const currentDateBtn = document.getElementById('current-date') as HTMLButtonElement;

currentDateBtn.addEventListener('click', () => {
    const now = new Date();
    const dateString = now.toLocaleDateString();
    display.value = dateString;
    addToHistory('Current Date', dateString);
});

negateBtn.addEventListener('click', () => {
    if (display.value) {
        const currentValue = parseFloat(display.value);
        const negatedValue = -currentValue;
        display.value = negatedValue.toString();
    }
});

// Rest of your existing code
});