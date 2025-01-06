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

// ... (Existing functions)

// ... existing code

// ... (Rest of the code)

const expButton = document.getElementById("exp");
expButton.addEventListener("click", () => {
    try {
        const currentValue = parseFloat(display.value);
        const result = Math.exp(currentValue);
        display.value = result.toString();
        currentExpression = `exp(${currentExpression})`;
    } catch (error) {
        display.value = "Error";
    }
});

const lnButton = document.getElementById("ln");
lnButton.addEventListener("click", () => {
    try {
        const currentValue = parseFloat(display.value);
        const result = Math.log(currentValue);
        display.value = result.toString();
        currentExpression = `ln(${currentExpression})`;
    } catch (error) {
        display.value = "Error";
    }
});

const parenthesisOpenButton = document.getElementById("parenthesis-open");
parenthesisOpenButton.addEventListener("click", () => {
  currentExpression += '(';
  currentExpressionDisplay.textContent = currentExpression;
});

const parenthesisCloseButton = document.getElementById("parenthesis-close");
parenthesisCloseButton.addEventListener("click", () => {
  currentExpression += ')';
  currentExpressionDisplay.textContent = currentExpression;
});
});
