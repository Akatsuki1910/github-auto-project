// ... (Existing Code)
window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code)

    // ... (Existing Code)
    // ... existing code
    // ... (rest of the code)
    let memoryValue = null;
    let lastAnswer = null;
    const history = [];
    const historyDiv = document.getElementById("history");
    const display = document.getElementById("display");
    let isDegreeMode = true; // Degree mode by default
    let currentExpression = ''; // Store the current expression
    const currentExpressionDisplay = document.getElementById("currentExpressionDisplay");

    // Clear button functionality
    const clearButton = document.getElementById("clear");
    clearButton.addEventListener("click", () => {
        display.value = '';
        currentExpression = '';
        currentExpressionDisplay.textContent = '';
    });


    // ... existing code ...

// ... (rest of the code)
const degRadButton = document.getElementById("deg-rad");
 //Added delete last char functionality
const deleteLastCharButton = document.getElementById("delete-last-char");

// ... (Other existing button event listeners)

//Settings Button and Functionality
const openSettingsButton = document.getElementById("open-settings");

const calculateSqrtButton = document.getElementById("calculate-sqrt");

// ... other functions

// ... (rest of code)

// Reciprocal Calculation
const calculateReciprocalButton = document.getElementById("calculate-reciprocal");

// Factorial Calculation
const calculateFactorialButton = document.getElementById("calculate-factorial");

const openNewTabButton = document.getElementById("open-new-tab");
const displayCurrentExpressionButton = document.getElementById("display-current-expression");

const insertAnsButton = document.getElementById("insert-ans");

 // Add keyboard support
document.addEventListener('keydown', (event) => {
    // ... (Existing keyboard handling code)
});
// ... (Other existing button event listeners)

//Square Root button functionality
const sqrtButton = document.getElementById("sqrt");
sqrtButton.addEventListener("click", () => {
    try {
        const currentValue = parseFloat(display.value);
        if (currentValue < 0) {
            display.value = "Error: Cannot calculate square root of negative number";
        } else {
            const sqrtValue = Math.sqrt(currentValue);
            display.value = sqrtValue.toString();
            currentExpression = `sqrt(${currentExpression})`; // Add to current expression
        }
    } catch (error) {
        display.value = "Error";
    }
});

// Square button functionality
const squareButton = document.getElementById("square");
squareButton.addEventListener("click", () => {
    try {
        const currentValue = parseFloat(display.value);
        const squareValue = currentValue * currentValue;
        display.value = squareValue.toString();
        currentExpression = `(${currentExpression})^2`;
    } catch (error) {
        display.value = "Error";
    }
});

// Cube button functionality
const cubeButton = document.getElementById("cube");
cubeButton.addEventListener("click", () => {
    try {
        const currentValue = parseFloat(display.value);
        const cubeValue = currentValue * currentValue * currentValue;
        display.value = cubeValue.toString();
        currentExpression = `(${currentExpression})^3`;
    } catch (error) {
        display.value = "Error";
    }
});

// Exponent button functionality
const exponentButton = document.getElementById("exponent");
exponentButton.addEventListener("click", () => {
  // Implementation for exponent calculation (x^y)
  currentExpression += '**'; // Use ** for exponent in currentExpression
  currentExpressionDisplay.textContent = currentExpression;
});

// Logarithm (base 10) button functionality
const logButton = document.getElementById("log");
logButton.addEventListener("click", () => {
    try {
        const currentValue = parseFloat(display.value);
        if (currentValue <= 0) {
            display.value = "Error: Cannot calculate logarithm of non-positive number";
        } else {
            const logValue = Math.log10(currentValue);
            display.value = logValue.toString();
            currentExpression = `log(${currentExpression})`;
        }
    } catch (error) {
        display.value = "Error";
    }
});

// ... (Rest of the code)
});
