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
const memoryStoreBtn = document.getElementById("memory-store") as HTMLButtonElement;
const memoryRecallBtn = document.getElementById("memory-recall") as HTMLButtonElement;
const memoryClearBtn = document.getElementById("memory-clear") as HTMLButtonElement;

// ... other existing event listeners

memoryStoreBtn.addEventListener('click', () => {
    memoryValue = parseFloat(display.value);
});

memoryRecallBtn.addEventListener('click', () => {
    display.value = memoryValue.toString();
});

memoryClearBtn.addEventListener('click', () => {
    memoryValue = 0;
});

// Rest of your existing code
});
