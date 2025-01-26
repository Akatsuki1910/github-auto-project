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

calculateStandardDeviationBtn.addEventListener('click', () => {
    // ... existing code for standard deviation
});

calculateVarianceBtn.addEventListener('click', () => {
    // ... existing code for variance calculation
});
rndBtn.addEventListener('click', () => {
    // ... existing code for random number generation
});

calculateFibonacciBtn.addEventListener('click', () => {
    // ... existing code for fibonacci calculation
});

calculatePrimeBtn.addEventListener('click', () => {
    const num = parseInt(prompt("Enter a number to check if it's prime:") || "0", 10);
    if (isNaN(num)) {
        display.value = "Invalid input";
        return;
    }

    let isPrime = true;
    if (num <= 1) isPrime = false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    display.value = isPrime ? "Prime" : "Not Prime";
    addToHistory(`isPrime(${num})`, isPrime.toString());
});

clearAllHistoryBtn.addEventListener('click', () => {
    history = [];
    updateHistoryDisplay();
});

calculateFactorialBtn.addEventListener('click', () => {
    // ... existing code for factorial calculation
});

calculateAbsoluteBtn.addEventListener('click', () => {
    // existing code for absolute calculation
});
calculateSquareRootBtn.addEventListener('click', () => {
  const num = parseFloat(display.value);
  if (isNaN(num)) {
    display.value = "Invalid input";
    return;
  }
  const result = Math.sqrt(num);
  display.value = result.toString();
  addToHistory(`sqrt(${num})`, result.toString());
});

cubeRootBtn.addEventListener('click', () => {
    const num = parseFloat(display.value);
    if (isNaN(num)) {
      display.value = "Invalid input";
      return;
    }
    const result = Math.cbrt(num);
    display.value = result.toString();
    addToHistory(`cbrt(${num})`, result.toString());
  });
//Rest of the existing code
});
