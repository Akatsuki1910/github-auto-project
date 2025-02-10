// ... (Existing code)
const display = document.getElementById("display") as HTMLInputElement;
let currentInput = "";
let currentExpression = "";
const currentExpressionDisplay = document.getElementById("currentExpressionDisplay") as HTMLDivElement;
const historyDiv = document.getElementById("history") as HTMLDivElement;
const historyArr: string[] = [];
let lastAnswer = 0;
let memoryValue = 0;
let mode = 'rad';
let keypadVisible = true;
let scientificMode = false;
let theme = 'light';
let fontSize = 16;

window.addEventListener("DOMContentLoaded", () => {
    // existing code
    // ... (Other button event listeners)
    // ... (Other buttons)
    // ... existing buttons
    // ... existing functions
    // ... existing button event listeners
    // ... other functions
    const toggleRadDegButton = document.getElementById("toggle-rad-deg") as HTMLButtonElement;
    toggleRadDegButton.addEventListener('click', () => {
        mode = mode === 'rad' ? 'deg' : 'rad';
        toggleRadDegButton.textContent = mode.toUpperCase();
    });

    // ... other existing event listeners

    const toggleCalculatorButton = document.getElementById("toggle-calculator") as HTMLButtonElement;
    const calculatorDiv = document.getElementById("calculator") as HTMLDivElement;
    toggleCalculatorButton.addEventListener('click', () => {
        calculatorDiv.style.display = calculatorDiv.style.display === 'none' ? 'grid' : 'none';
    });
    const toggleDateButton = document.getElementById("toggle-date") as HTMLButtonElement;
    toggleDateButton.addEventListener('click',()=>{
        const now = new Date();
        const dateString = now.toLocaleDateString();
        display.value = dateString;
    });
});

// ... other existing functions