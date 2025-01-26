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
const calculateNthRootBtn = document.getElementById('calculateNthRoot') as HTMLButtonElement;
const rndBtn = document.getElementById('Rnd') as HTMLButtonElement;
const calculateLogarithmBtn = document.getElementById('calculateLogarithm') as HTMLButtonElement;

//Nth Root Function
calculateNthRootBtn.addEventListener('click', () => {
    const n = parseFloat(prompt("Enter the root (n):"));
    const number = parseFloat(display.value);
    if(isNaN(n) || isNaN(number)) {
        display.value = "Invalid input";
        return; 
    }
    const result = Math.pow(number, 1/n);
    display.value = result.toString();
    addToHistory(`The ${n}th root of ${number}`, result.toString());
  });

// Generate Random Number
rndBtn.addEventListener('click', () => {
    const randomNumber = Math.random();
    display.value = randomNumber.toString();
});

// Calculate Logarithm
calculateLogarithmBtn.addEventListener('click', () => {
    const base = parseFloat(prompt("Enter the base of the logarithm:"));
    const number = parseFloat(display.value);
    if (isNaN(base) || isNaN(number) || base <= 0 || base === 1 || number <= 0) {
        display.value = "Invalid input for logarithm";
        return;
    }
    const result = Math.log(number) / Math.log(base); // Calculate logarithm with arbitrary base
    display.value = result.toString();
    addToHistory(`log${base}(${number})`, result.toString());
});

//Rest of the existing code
});
