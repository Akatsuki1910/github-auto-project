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
const percentBtn = document.getElementById('percent') as HTMLButtonElement;
const decimalBtn = document.getElementById('decimal') as HTMLButtonElement;
const multiplyBtn = document.getElementById('multiply') as HTMLButtonElement;
const divideBtn = document.getElementById('divide') as HTMLButtonElement;
const piBtn = document.getElementById('pi') as HTMLButtonElement;
const powerBtn = document.getElementById('power') as HTMLButtonElement;
const factorialBtn = document.getElementById('factorial') as HTMLButtonElement;

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

percentBtn.addEventListener('click', () => {
    if (display.value) {
        const currentValue = parseFloat(display.value);
        const percentValue = currentValue / 100;
        display.value = percentValue.toString();
        addToHistory(`${currentValue}%`, percentValue.toString());
    }
});

decimalBtn.addEventListener('click', () => {
    if (!display.value.includes('.')) {
        display.value += '.';
    }
});

multiplyBtn.addEventListener('click', () => {
    display.value += '*';
    currentExpression += '*';
    currentExpressionDisplay.textContent = currentExpression;
});
divideBtn.addEventListener('click', () => {
    display.value += '/';
    currentExpression += '/';
    currentExpressionDisplay.textContent = currentExpression;
});

piBtn.addEventListener('click', () => {
    display.value += Math.PI.toString();
});

powerBtn.addEventListener('click', () => {
    display.value += '**'; // Use ** for power operator
    currentExpression += '**';
    currentExpressionDisplay.textContent = currentExpression;
});

function factorial(n: number): number {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

factorialBtn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue) && currentValue >= 0 && Number.isInteger(currentValue)) {  // Check for valid input
        const result = factorial(currentValue);
        display.value = result.toString();
        addToHistory(`${currentValue}!`, result.toString());
    } else {
        display.value = "Invalid input for factorial";
    }
});

// Rest of your existing code
});
