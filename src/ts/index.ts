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

const factorialButton = document.getElementById("factorial");
factorialButton.addEventListener("click", () => {
    try {
        const currentValue = parseFloat(display.value);
        if (currentValue < 0) {
            display.value = "Error: Factorial of negative number";
        } else {
            let result = 1;
            for (let i = 2; i <= currentValue; i++) {
                result *= i;
            }
            display.value = result.toString();
            currentExpression = `fact(${currentExpression})`;
        }
    } catch (error) {
        display.value = "Error";
    }
});

// ... (Rest of the code)
});
