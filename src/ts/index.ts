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
let timeFormat24H = true;
let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
let showTime = false;
let borderRadius = 5; // Initial border radius

window.addEventListener("DOMContentLoaded", () => {
    // ... existing code
    const toggleBorderRadiusButton = document.getElementById("toggle-border-radius") as HTMLButtonElement;
    toggleBorderRadiusButton.addEventListener('click', () => {
        borderRadius = borderRadius === 5 ? 20 : 5;
        const calculator = document.getElementById('calculator') as HTMLDivElement;
        calculator.style.borderRadius = `${borderRadius}px`;
    });
    const clearExpressionButton = document.getElementById("clear-expression") as HTMLButtonElement;
    clearExpressionButton.addEventListener('click', () => {
        currentExpression = '';
        currentExpressionDisplay.textContent = currentExpression;
    });
    // ... other existing event listeners
});