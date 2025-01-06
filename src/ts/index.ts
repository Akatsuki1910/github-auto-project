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

// Inverse button functionality
const inverseButton = document.getElementById("inverse");
inverseButton.addEventListener("click", () => {
    try {
        const currentValue = parseFloat(display.value);
        if (currentValue === 0) {
            display.value = "Error: Division by zero";
        } else {
            const inverseValue = 1 / currentValue;
            display.value = inverseValue.toString();
            currentExpression = `1/(${currentExpression})`;
        }
    } catch (error) {
        display.value = "Error";
    }
});
const sinButton = document.getElementById("sin");
sinButton.addEventListener("click", () => {
  const currentValue = parseFloat(display.value);
  const result = Math.sin(currentValue);
  display.value = result.toString();
});

const cosButton = document.getElementById("cos");
cosButton.addEventListener("click", () => {
    const currentValue = parseFloat(display.value);
    const result = Math.cos(currentValue);
    display.value = result.toString();
});

const tanButton = document.getElementById("tan");
tanButton.addEventListener("click", () => {
    const currentValue = parseFloat(display.value);
    const result = Math.tan(currentValue);
    display.value = result.toString();
});

// ... (Rest of the code)
});
