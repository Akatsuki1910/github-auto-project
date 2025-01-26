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

const calculateGeometricMeanBtn = document.getElementById('calculateGeometricMean') as HTMLButtonElement;
// Calculate Geometric Mean
calculateGeometricMeanBtn.addEventListener('click', () => {
    const numbersStr = prompt("Enter numbers separated by commas:");
    if (!numbersStr) {
        display.value = "Invalid input";
        return; 
    }
    const numbers = numbersStr.split(',').map(Number).filter(n => !isNaN(n) && n > 0);
    if (numbers.length === 0) {
        display.value = "Invalid input for geometric mean (positive numbers only)";
        return;
    }
    const product = numbers.reduce((acc, curr) => acc * curr, 1);
    const geometricMean = Math.pow(product, 1 / numbers.length);
    display.value = geometricMean.toString();
    addToHistory(`Geometric Mean of ${numbers.join(',')}`, geometricMean.toString());  
});
const rndBtn = document.getElementById('Rnd') as HTMLButtonElement;
const calculateLogarithmBtn = document.getElementById('calculateLogarithm') as HTMLButtonElement;
const calculateAverageBtn = document.getElementById('calculateAverage') as HTMLButtonElement;
const calculateMedianBtn = document.getElementById('calculateMedian') as HTMLButtonElement;
const calculateModeBtn = document.getElementById('calculateMode') as HTMLButtonElement;


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

// Calculate Average
calculateAverageBtn.addEventListener('click', () => {
    const numbersStr = prompt("Enter numbers separated by commas:");
    if (!numbersStr) {
        display.value = "Invalid input";
        return; 
    }
    const numbers = numbersStr.split(',').map(Number).filter(n => !isNaN(n));
    if (numbers.length === 0) {
        display.value = "Invalid input";
        return;
    }
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    const average = sum / numbers.length;
    display.value = average.toString();
    addToHistory(`Average of ${numbers.join(',')}`, average.toString());  
});

//Calculate Median
calculateMedianBtn.addEventListener('click', () => {
    const numbersStr = prompt("Enter numbers separated by commas:");
    if (!numbersStr) {
        display.value = "Invalid Input";
        return;
    }
    const numbers = numbersStr.split(',').map(Number).filter(n => !isNaN(n));
    if(numbers.length === 0) {
        display.value = "Invalid Input";
        return;
    }
    numbers.sort((a, b) => a - b); // Sort numbers in ascending order
    const mid = Math.floor(numbers.length / 2);
    const median = numbers.length % 2 !== 0 ? numbers[mid] : (numbers[mid -1] + numbers[mid]) / 2;
    display.value = median.toString();
    addToHistory(`Median of ${numbers.join(',')}`, median.toString());
});
// Calculate Mode
calculateModeBtn.addEventListener('click', () => {
    const numbersStr = prompt("Enter numbers separated by commas:");
    if (!numbersStr) return;
    const numbers = numbersStr.split(',').map(Number).filter(n => !isNaN(n));
    if (numbers.length === 0) return;

    const counts = new Map();
    let mode: number | null = null;
    let maxCount = 0;

    for (const number of numbers) {
      const count = (counts.get(number) || 0) + 1;
      counts.set(number, count);
      if (count > maxCount) {
        mode = number;
        maxCount = count;
      }
    }

    if (mode !== null) {
      display.value = mode.toString();
      addToHistory(`Mode of ${numbers.join(',')}`, mode.toString());
    } else {
      display.value = "No mode found"; // Or handle the case where no mode exists as needed
    }
});

//Rest of the existing code
});
