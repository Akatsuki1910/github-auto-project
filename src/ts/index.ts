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
    // ... existing code
    // ... existing functions
    const ceilButton = document.getElementById("ceil") as HTMLButtonElement;
    ceilButton.addEventListener('click', () => {
        const num = parseFloat(display.value);
        if (!isNaN(num)) {
            display.value = Math.ceil(num).toString();
        }
    });

    // ... other existing event listeners
});