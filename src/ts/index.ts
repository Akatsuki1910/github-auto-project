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
// ... other existing variables
let displayFontSize = 20;
let displayBackgroundColor = "white";

window.addEventListener("DOMContentLoaded", () => {
    // ... existing code

    const toggleDisplayFontSizeButton = document.getElementById("toggle-display-font-size") as HTMLButtonElement;
    toggleDisplayFontSizeButton.addEventListener('click', () => {
        displayFontSize += 2;
        if (displayFontSize > 40) {
            displayFontSize = 20;
        }
        display.style.fontSize = displayFontSize + "px";
    });
    const toggleDisplayBackgroundColor = document.getElementById("toggle-display-background-color") as HTMLButtonElement;
    toggleDisplayBackgroundColor.addEventListener('click', () => {
        displayBackgroundColor = displayBackgroundColor === "white" ? "lightblue" : "white";
        display.style.backgroundColor = displayBackgroundColor;
    });

    // ... other existing event listeners
});