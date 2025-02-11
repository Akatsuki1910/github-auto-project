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

window.addEventListener("DOMContentLoaded", () => {
    // ... existing code
    const openNewWindowButton = document.getElementById("open-new-window") as HTMLButtonElement;
    openNewWindowButton.addEventListener('click', () => {
        window.open('https://www.example.com', '_blank');
    });

    const toggleInputFontSizeButton = document.getElementById("toggle-input-font-size") as HTMLButtonElement;
    toggleInputFontSizeButton.addEventListener('click', () => {
        inputFontSize += 2;
        if (inputFontSize > 24) {
            inputFontSize = 16;
        }
        display.style.fontSize = inputFontSize + "px";
    });

    const toggleInputBorderColorButton = document.getElementById("toggle-input-border-color") as HTMLButtonElement;
    toggleInputBorderColorButton.addEventListener('click', () => {
        if (inputBorderColor === 'black') {
            inputBorderColor = 'red';
        } else {
            inputBorderColor = 'black';
        }
        display.style.borderColor = inputBorderColor;
    });
    const toggleInputBackgroundColorButton = document.getElementById("toggle-input-background") as HTMLButtonElement;
    toggleInputBackgroundColorButton.addEventListener('click', () => {
        if (inputBackgroundColor === 'white') {
            inputBackgroundColor = 'lightblue';
        } else {
            inputBackgroundColor = 'white';
        }
        display.style.backgroundColor = inputBackgroundColor;
    });
    const openGithubButton = document.getElementById("open-github") as HTMLButtonElement;
    openGithubButton.addEventListener('click', () => {
        window.open('https://github.com', '_blank');
    });
    const toggleInputBorderStyleButton = document.getElementById("toggle-input-border-style") as HTMLButtonElement;
    toggleInputBorderStyleButton.addEventListener('click', () => {
        if (inputBorderStyle === 'solid') {
            inputBorderStyle = 'dashed';
        } else {
            inputBorderStyle = 'solid';
        }
        display.style.borderStyle = inputBorderStyle;
    });
    // ... other existing event listeners
});
