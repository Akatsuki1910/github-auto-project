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
const calculatePrimeBtn = document.getElementById('calculatePrime') as HTMLButtonElement;
const clearAllHistoryBtn = document.getElementById('clear-all-history') as HTMLButtonElement;
const calculateFactorialBtn = document.getElementById('calculateFactorial') as HTMLButtonElement;
const calculateAbsoluteBtn = document.getElementById('calculateAbsolute') as HTMLButtonElement;
const calculateSquareRootBtn = document.getElementById('calculateSquareRoot') as HTMLButtonElement;
const cubeRootBtn = document.getElementById('cubeRoot') as HTMLButtonElement;
const calculateExponentBtn = document.getElementById('calculateExponent') as HTMLButtonElement;
const log10Btn = document.getElementById('log10') as HTMLButtonElement;
const calculateAgeBtn = document.getElementById('calculateAge') as HTMLButtonElement;
const currentTimeBtn = document.getElementById('currentTime') as HTMLButtonElement;
const currentDateBtn = document.getElementById('currentDate') as HTMLButtonElement;

currentDateBtn.addEventListener('click', () => {
    const now = new Date();
    const dateString = now.toLocaleDateString();
    display.value = dateString;
    addToHistory('Current Date', dateString);
});

currentTimeBtn.addEventListener('click', () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    display.value = timeString;
    addToHistory('Current Time', timeString);
});

calculateAgeBtn.addEventListener('click', () => {
    const birthdate = prompt("Enter your birthdate (YYYY-MM-DD):");
    if (birthdate) {
        const birthDate = new Date(birthdate);
        const ageDifMs = Date.now() - birthDate.getTime();
        const ageDate = new Date(ageDifMs);
        const age = Math.abs(ageDate.getUTCFullYear() - 1970);
        display.value = age.toString();
        addToHistory(`Age`, age.toString());
    }
});

// Rest of your existing code
});
