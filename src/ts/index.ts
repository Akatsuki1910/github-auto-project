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
    const nthRootButton = document.getElementById("nth-root") as HTMLButtonElement;
    nthRootButton.addEventListener('click', () => {
        const num = parseFloat(display.value);
        if (!isNaN(num)) {
            const root = parseFloat(prompt("Enter the root (e.g., 2 for square root, 3 for cube root):", "2"));
            if (!isNaN(root)) {
                display.value = Math.pow(num, 1 / root).toString();
            }
        }
    });
    const exp10Button = document.getElementById("exp10") as HTMLButtonElement;
    exp10Button.addEventListener('click', () => {
        const num = parseFloat(display.value);
        if (!isNaN(num)) {
            display.value = Math.pow(10, num).toString();
        }
    });

    const floorButton = document.getElementById("floor") as HTMLButtonElement;
    floorButton.addEventListener('click', () => {
        const num = parseFloat(display.value);
        if (!isNaN(num)) {
            display.value = Math.floor(num).toString();
        }
    });
});
