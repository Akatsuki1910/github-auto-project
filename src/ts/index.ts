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
let audioEnabled = true;
let calculatorSize = 'medium';
let inputBorder = true;
let inputWidth = 'medium';
let buttonColor = 'default';
let inputFontSize = 16;
let inputBackgroundColor = 'white';
let inputBorderColor = 'black';
let inputBorderStyle = 'solid';
let inputBorderWidth = 1;
let inputPadding = 5;
let displayColor = 'black';

window.addEventListener("DOMContentLoaded", () => {
    // ... existing code
    const toggleInputBorderWidthButton = document.getElementById("toggle-input-border-width") as HTMLButtonElement;
    toggleInputBorderWidthButton.addEventListener('click', () => {
        inputBorderWidth++;
        if (inputBorderWidth > 5) {
            inputBorderWidth = 1;
        }
        display.style.borderWidth = inputBorderWidth + "px";
    });

    const toggleInputPaddingButton = document.getElementById("toggle-input-padding") as HTMLButtonElement;
    toggleInputPaddingButton.addEventListener('click', () => {
        inputPadding++;
        if (inputPadding > 20) {
            inputPadding = 5;
        }
        display.style.padding = inputPadding + "px";
    });
    const toggleDisplayColorButton = document.getElementById("toggle-display-color") as HTMLButtonElement;
    toggleDisplayColorButton.addEventListener('click', () => {
        if (displayColor === 'black') {
            displayColor = 'red';
        } else {
            displayColor = 'black';
        }
        display.style.color = displayColor;
    });
    // ... other existing event listeners
});