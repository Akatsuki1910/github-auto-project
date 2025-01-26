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
rndBtn.addEventListener('click', () => {
    const randomNumber = Math.random();
    display.value = randomNumber.toString();
});
const rndBtn = document.getElementById('Rnd') as HTMLButtonElement;
const calculateGeometricMeanBtn = document.getElementById('calculateGeometricMean') as HTMLButtonElement;
const calculateLogarithmBtn = document.getElementById('calculateLogarithm') as HTMLButtonElement;
const calculateAverageBtn = document.getElementById('calculateAverage') as HTMLButtonElement;
const calculateMedianBtn = document.getElementById('calculateMedian') as HTMLButtonElement;
const calculateModeBtn = document.getElementById('calculateMode') as HTMLButtonElement;
const factorialBtn = document.getElementById('factorial') as HTMLButtonElement;
const roundTo2DecimalBtn = document.getElementById('roundTo2Decimal') as HTMLButtonElement;
const calculateStandardDeviationBtn = document.getElementById('calculateStandardDeviation') as HTMLButtonElement;

calculateStandardDeviationBtn.addEventListener('click', () => {
    const numbersStr = prompt("Enter numbers separated by commas:");
    if (!numbersStr) return;
    const numbers = numbersStr.split(',').map(Number).filter(n => !isNaN(n));
    if (numbers.length === 0) return;

    const n = numbers.length;
    const sum = numbers.reduce((acc, val) => acc + val, 0);
    const mean = sum / n;

    const sqDiffSum = numbers.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0);
    const variance = sqDiffSum / n;
    const stdDev = Math.sqrt(variance);

    display.value = stdDev.toString();
    addToHistory(`Standard Deviation of ${numbers.join(',')}`, stdDev.toString());
});
//Rest of the existing code
});
