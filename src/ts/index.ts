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
// ... other existing buttons
const cosBtn = document.getElementById("cos") as HTMLButtonElement;
const tanBtn = document.getElementById("tan") as HTMLButtonElement; // Add tan button
const asinBtn = document.getElementById("asin") as HTMLButtonElement; //asin
const atanBtn = document.getElementById("atan") as HTMLButtonElement; //atan
const roundBtn = document.getElementById("round") as HTMLButtonElement;
const floorBtn = document.getElementById("floor") as HTMLButtonElement; // floor button

// ... other event listeners

cosBtn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = Math.cos(currentValue);
        display.value = result.toString();
    }
});

tanBtn.addEventListener('click', () => { // Tan button functionality
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = Math.tan(currentValue);
        display.value = result.toString();
    }
});
asinBtn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = Math.asin(currentValue);
        display.value = result.toString();
    }
});
atanBtn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = Math.atan(currentValue);
        display.value = result.toString();
    }
});

roundBtn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = Math.round(currentValue);
        display.value = result.toString();
    }
});

floorBtn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = Math.floor(currentValue);
        display.value = result.toString();
    }
});

});