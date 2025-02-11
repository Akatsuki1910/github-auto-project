// ... (Existing code)
const display = document.getElementById("display") as HTMLInputElement;
let currentInput = "";
let currentExpression = "";
const currentExpressionDisplay = document.getElementById("currentExpressionDisplay") as HTMLDivElement;
const historyDiv = document.getElementById("history") as HTMLDivElement;
const historyArr: string[] = [];
let lastAnswer = 0;
let memoryValue = 0;
let displayColor = "black";

window.addEventListener("DOMContentLoaded", () => {
    // ... existing code

    const toggleDisplayColorButton = document.getElementById("toggle-display-color") as HTMLButtonElement;
    toggleDisplayColorButton.addEventListener('click', () => {
        displayColor = displayColor === "black" ? "red" : "black";
        display.style.color = displayColor;
    });

    const memoryStoreButton = document.getElementById("memory-store") as HTMLButtonElement;
    memoryStoreButton.addEventListener('click', () => {
        memoryValue = parseFloat(display.value);
    });

    const memoryRecallButton = document.getElementById("memory-recall") as HTMLButtonElement;
    memoryRecallButton.addEventListener('click', () => {
        display.value = memoryValue.toString();
        currentInput = display.value;
    });

    // ... other existing event listeners
});