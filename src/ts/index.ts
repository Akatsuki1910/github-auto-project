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

window.addEventListener("DOMContentLoaded", () => {
    // ... existing code
    const toggleInputFontSizeButton = document.getElementById("toggle-input-font-size") as HTMLButtonElement;
    toggleInputFontSizeButton.addEventListener('click', () => {
        inputFontSize += 2;
        if (inputFontSize > 24) {
            inputFontSize = 16;
        }
        display.style.fontSize = inputFontSize + "px";
    });
    const toggleButtonColorButton = document.getElementById("toggle-button-color") as HTMLButtonElement;
    toggleButtonColorButton.addEventListener('click', () => {
        const buttons = document.querySelectorAll('#calculator button');
        switch (buttonColor) {
            case 'default':
                buttonColor = 'red';
                buttons.forEach(button => button.style.backgroundColor = 'red');
                break;
            case 'red':
                buttonColor = 'green';
                buttons.forEach(button => button.style.backgroundColor = 'green');
                break;
            case 'green':
                buttonColor = 'blue';
                buttons.forEach(button => button.style.backgroundColor = 'blue');
                break;
            case 'blue':
                buttonColor = 'default';
                buttons.forEach(button => button.style.backgroundColor = '');
                break;
        }
    });
    const toggleInputBackgroundColorButton = document.getElementById("toggle-input-background-color") as HTMLButtonElement;
    toggleInputBackgroundColorButton.addEventListener('click', () => {
        switch (inputBackgroundColor) {
            case 'white':
                inputBackgroundColor = 'lightblue';
                break;
            case 'lightblue':
                inputBackgroundColor = 'lightgreen';
                break;
            case 'lightgreen':
                inputBackgroundColor = 'lightyellow';
                break;
            case 'lightyellow':
                inputBackgroundColor = 'white';
                break;
        }
        display.style.backgroundColor = inputBackgroundColor;
    });
    // ... other existing event listeners
});
