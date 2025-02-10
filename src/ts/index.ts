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
let borderRadius = 5;
let calculatorVisible = true;
let opacity = 1;
let highContrast = false;

window.addEventListener("DOMContentLoaded", () => {
    // ... existing code
    const toggleContrastButton = document.getElementById("toggle-contrast") as HTMLButtonElement;
    toggleContrastButton.addEventListener('click', () => {
        highContrast = !highContrast;
        if (highContrast) {
            document.body.classList.add('high-contrast');
        } else {
            document.body.classList.remove('high-contrast');
        }
    });
    // ... other existing event listeners
});