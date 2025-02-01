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
// ... existing event listeners
// ... (rest of the existing code)

// ... existing functions ...

    // ... existing reciprocal button code
// Squared functionality
// ... existing squared button code

//Cubed Functionality (New Feature)
// ... existing cubed button code

// ...existing max function


// ...existing avg function

//Calculating average of numbers
const averageButton = document.getElementById('average') as HTMLButtonElement;
averageButton.addEventListener('click', () => {
    const numbers = display.value.split(',').map(Number);
    if (numbers.some(isNaN)) {
        display.value = "Invalid input";
    } else {
        const sum = numbers.reduce((a, b) => a + b, 0);
        display.value = (sum / numbers.length).toString();
    }
});
// Summation Function (New Feature Implementation)
// ... existing sumButton code

// Add Geometric Mean button functionality
const geoMeanButton = document.getElementById('geoMean') as HTMLButtonElement;
geoMeanButton.addEventListener('click', () => {
    const numbers = display.value.split(',').map(Number);
    if (numbers.some(isNaN) || numbers.some(n => n <= 0)) {
        display.value = "Invalid input (positive numbers only)";
    } else {
        const product = numbers.reduce((a, b) => a * b, 1);
        display.value = Math.pow(product, 1 / numbers.length).toString();
    }
});

// Calculate Expression Button (New Feature)
const calculateExpressionButton = document.getElementById('calculateExpression') as HTMLButtonElement;
calculateExpressionButton.addEventListener('click', () => {
    try {
        display.value = eval(display.value).toString();
    } catch (error) {
        display.value = "Error";
    }
});

// ... existing calculateExpressionButton

//Parentheses Button
const parenthesesButton = document.getElementById('parentheses') as HTMLButtonElement;
parenthesesButton.addEventListener('click', () => {
  // Get the current value from the display
  let currentValue = display.value;

  // Count the number of open and close parentheses
  let openCount = (currentValue.match(/\(/g) || []).length;
  let closeCount = (currentValue.match(/\)/g) || []).length;

  // Add an open parenthesis if there are more close than open parentheses,
  // or if there are no parentheses yet
  if (openCount <= closeCount) {
    currentValue += '(';
  } else {
    currentValue += ')';
  }

  // Update the display with the new value
  display.value = currentValue;
});
// ... existing parenthesesButton

// ... existing fibonacciButton

// ... existing timeButton

// ... existing exp2Button

// ... existing backspace2Button

// ... existing randomNumberButton

// ... existing roundToDecimalButton

//New Feature: Absolute Value Button
// ... Existing absButton code

// ... existing signButton code

//New Feature: Logarithm button (base 10)
// ... (existing logButton code)

// New Feature: Natural Logarithm button (base e)
// ... existing lnButton code

// ... existing expButton code

//New Feature: sin button 
// ... existing sinButton code

//New Feature: cos button
// ... existing cosButton code

// New Feature: tan button
// ... existing tanButton code

// ... existing roundButton code

// ... existing randomButton code

//New Feature: Floor button
// ... existing floorButton code

// New Feature: Euler's number button
// ... existing eulerButton code

// ... existing modButton code

//New Feature: Cube Root button
// ... existing cubeRootButton code

// New Feature: Nth Root button
// ... existing nthRootButton code

// New Feature: Inverse Sine button
// ... existing inverseSinButton code

// ... existing duplicate button code

// ... existing inverse button code

// ... existing ceil button code

// ... existing percentage button code
// ... existing max button code
// ... existing min button code
// ... existing medianButton code

//Mode button
// ... existing mode button code

const standardDeviationButton = document.getElementById('standardDeviation') as HTMLButtonElement;
standardDeviationButton.addEventListener('click', () => {
    const numbers = display.value.split(',').map(Number);
    if (numbers.some(isNaN)) {
        display.value = "Invalid Input";
        return;
    }

    const n = numbers.length;
    const mean = numbers.reduce((sum, num) => sum + num, 0) / n;
    const squaredDiffs = numbers.map(num => Math.pow(num - mean, 2));
    const variance = squaredDiffs.reduce((sum, diff) => sum + diff, 0) / n;
    const sd = Math.sqrt(variance);
    display.value = sd.toString();
});

const expm1Button = document.getElementById('expm1') as HTMLButtonElement;
expm1Button.addEventListener('click', () => {
    const value = parseFloat(display.value);
    if (isNaN(value)) {
        display.value = "Invalid input";
    } else {
        display.value = Math.expm1(value).toString();
    }
});

//Combination (nCr)
const comboButton = document.getElementById('combo') as HTMLButtonElement;
comboButton.addEventListener('click', () => {
    const values = display.value.split(',').map(Number);
    if (values.length !== 2 || values.some(isNaN)){
        display.value = "Invalid input";
        return;
    }

    const n = values[0];
    const r = values[1];

    if (n < 0 || r < 0 || r > n || !Number.isInteger(n) || !Number.isInteger(r)) {
        display.value = "Invalid input";
        return;
    }

    const nFact = factorial(n);
    const rFact = factorial(r);
    const nMinusRFact = factorial(n - r);

    display.value = (nFact / (rFact * nMinusRFact)).toString();
});

function factorial(n: number): number {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

});
