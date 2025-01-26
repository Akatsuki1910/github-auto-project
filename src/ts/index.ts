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
const calculateGeometricMeanBtn = document.getElementById('calculateGeometricMean') as HTMLButtonElement;
const calculateLogarithmBtn = document.getElementById('calculateLogarithm') as HTMLButtonElement;
const calculateAverageBtn = document.getElementById('calculateAverage') as HTMLButtonElement;
const calculateMedianBtn = document.getElementById('calculateMedian') as HTMLButtonElement;
const calculateModeBtn = document.getElementById('calculateMode') as HTMLButtonElement;
const factorialBtn = document.getElementById('factorial') as HTMLButtonElement;
const roundTo2DecimalBtn = document.getElementById('roundTo2Decimal') as HTMLButtonElement;
const calculateStandardDeviationBtn = document.getElementById('calculateStandardDeviation') as HTMLButtonElement;
const calculateVarianceBtn = document.getElementById('calculateVariance') as HTMLButtonElement;
const calculateFibonacciBtn = document.getElementById('calculateFibonacci') as HTMLButtonElement;

calculateStandardDeviationBtn.addEventListener('click', () => {
    // ... existing code for standard deviation
});

calculateVarianceBtn.addEventListener('click', () => {
    const numbersStr = prompt("Enter numbers separated by commas:");
    if (!numbersStr) return;
    const numbers = numbersStr.split(',').map(Number).filter(n => !isNaN(n));
    if (numbers.length === 0) return;

    const n = numbers.length;
    const sum = numbers.reduce((acc, val) => acc + val, 0);
    const mean = sum / n;

    const sqDiffSum = numbers.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0);
    const variance = sqDiffSum / n;

    display.value = variance.toString();
    addToHistory(`Variance of ${numbers.join(',')}`, variance.toString());
});
rndBtn.addEventListener('click', () => {
    const randomNumber = Math.random();
    display.value = randomNumber.toString();
});

calculateFibonacciBtn.addEventListener('click', () => {
    const n = parseInt(prompt("Enter the number of terms for Fibonacci sequence:") || "0", 10);
    if (isNaN(n) || n < 0) {
        display.value = "Invalid input";
        return;
    }

    let a = 0, b = 1, next;
    let sequence = "";
    for (let i = 0; i < n; i++) {
        sequence += a + " ";
        next = a + b;
        a = b;
        b = next;
    }
    display.value = sequence.trim();
    addToHistory(`Fibonacci(${n})`, sequence.trim());
});

//Rest of the existing code
});
