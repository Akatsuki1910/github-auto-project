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

    // Reciprocal button functionality (New Feature)
    // ... existing reciprocal button code
// Squared functionality
// ... existing squared button code

//Cubed Functionality (New Feature)
// ... existing cubed button code

// Max function
// ... existing max function

//Min/Max button
// ... existing min-max function

// Average function
// ... existing avg function

// ... existing summation function

//Geometric mean
// ... existing geoMean function

// ... existing calculateExpressionButton

// ... existing parenthesesButton

// ... existing fibonacciButton

// ... existing timeButton

// ... existing exp2Button

// ... existing backspace2Button

// ... existing randomNumberButton

// ... existing roundToDecimalButton

//New Feature: Absolute Value Button
const absButton = document.getElementById("abs") as HTMLButtonElement;
absButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.abs(currentValue).toString();
        currentExpression = `abs(${currentExpression})`;
        currentExpressionDisplay.textContent = currentExpression;
    }
});

const signButton = document.getElementById("sign") as HTMLButtonElement;
signButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (-currentValue).toString();
        currentExpression = `-(${currentExpression})`; // Update currentExpression
        currentExpressionDisplay.textContent = currentExpression;
    }
});

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
const tanButton = document.getElementById('tan') as HTMLButtonElement;
tanButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = Math.tan(currentValue);
        display.value = result.toString();
        currentExpression = `tan(${currentExpression})`;
        currentExpressionDisplay.textContent = currentExpression;
        addToHistory(currentExpression, result.toString());
    } else {
        display.value = "Invalid input";
    }
});
const roundButton = document.getElementById('round') as HTMLButtonElement;
roundButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.round(currentValue).toString();
        currentExpression = `round(${currentExpression})`;
        currentExpressionDisplay.textContent = currentExpression;
    }
});

const randomButton = document.getElementById('random') as HTMLButtonElement;
randomButton.addEventListener('click', () => {
  const randomNumber = Math.random();
  display.value = randomNumber.toString();
  currentExpression = randomNumber.toString();
  currentExpressionDisplay.textContent = currentExpression;
});

});
