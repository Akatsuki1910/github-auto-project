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
let displayBorderRadius = 0;
let displayBorderColor = "black";

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

    const toggleDisplayBorderRadiusButton = document.getElementById("toggle-display-border-radius") as HTMLButtonElement;
    toggleDisplayBorderRadiusButton.addEventListener('click', () => {
        displayBorderRadius = (displayBorderRadius === 0) ? 10 : 0;
        display.style.borderRadius = displayBorderRadius + "px";
    });

    const toggleDisplayBorderButton = document.getElementById("toggle-display-border") as HTMLButtonElement;
    toggleDisplayBorderButton.addEventListener('click', () => {
        displayBorderColor = displayBorderColor === "black" ? "red" : "black";
        display.style.borderColor = displayBorderColor;
    });

    // ... other existing event listeners
});
