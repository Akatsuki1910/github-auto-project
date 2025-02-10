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
    toggleDateButton.addEventListener('click', () => {
        const now = new Date();
        const dateString = now.toLocaleDateString();
        display.value = dateString;
    });
    const currentTimeButton = document.getElementById("current-time") as HTMLButtonElement;
    currentTimeButton.addEventListener('click', () => {
        const now = new Date();
        const timeString = timeFormat24H ? now.toLocaleTimeString('en-GB', { timeZone: timeZone }) : now.toLocaleTimeString('en-US', { timeZone: timeZone });
        display.value = timeString;
    });
    const toggle24hButton = document.getElementById("toggle-24h") as HTMLButtonElement;
    toggle24hButton.addEventListener('click', () => {
        timeFormat24H = !timeFormat24H;
        toggle24hButton.textContent = timeFormat24H ? "24H" : "12H";
    });
    const currentDatetimeButton = document.getElementById("current-datetime") as HTMLButtonElement;
    currentDatetimeButton.addEventListener('click', () => {
        const now = new Date();
        const datetimeString = now.toLocaleString(undefined, { timeZone: timeZone });
        display.value = datetimeString;
    });
    const toggleTimeZoneButton = document.getElementById("toggle-time-zone") as HTMLButtonElement;
    toggleTimeZoneButton.addEventListener('click', () => {
        timeZone = timeZone === 'UTC' ? Intl.DateTimeFormat().resolvedOptions().timeZone : 'UTC';
        toggleTimeZoneButton.textContent = `Time Zone: ${timeZone}`;
    });
    const currentYearButton = document.getElementById("current-year") as HTMLButtonElement;
    currentYearButton.addEventListener('click', () => {
        const now = new Date();
        display.value = now.getFullYear().toString();
    });
    const randomButton = document.getElementById("random") as HTMLButtonElement;
    randomButton.addEventListener('click', () => {
        const randomNumber = Math.random();
        display.value = randomNumber.toString();
    });
});

// ... other existing functions
