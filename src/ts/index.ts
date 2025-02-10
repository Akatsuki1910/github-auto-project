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

window.addEventListener("DOMContentLoaded", () => {
    // ... existing code
    const toggleCalculatorSizeButton = document.getElementById("toggle-calculator-size") as HTMLButtonElement;
    toggleCalculatorSizeButton.addEventListener('click', () => {
        const calculator = document.getElementById('calculator') as HTMLDivElement;
        switch (calculatorSize) {
            case 'small':
                calculatorSize = 'medium';
                calculator.style.maxWidth = '300px';
                break;
            case 'medium':
                calculatorSize = 'large';
                calculator.style.maxWidth = '450px';
                break;
            case 'large':
                calculatorSize = 'small';
                calculator.style.maxWidth = '150px';
                break;
        }
    });

    const toggleContrastButton = document.getElementById("toggle-contrast") as HTMLButtonElement;
    toggleContrastButton.addEventListener('click', () => {
        highContrast = !highContrast;
        if (highContrast) {
            document.body.classList.add('high-contrast');
        } else {
            document.body.classList.remove('high-contrast');
        }
    });
    const toggleAudioButton = document.getElementById("toggle-audio") as HTMLButtonElement;
    toggleAudioButton.addEventListener('click', () => {
        audioEnabled = !audioEnabled;
    });
    const toggleInputBorderButton = document.getElementById("toggle-input-border") as HTMLButtonElement;
    toggleInputBorderButton.addEventListener('click', () => {
        inputBorder = !inputBorder;
        const display = document.getElementById('display') as HTMLInputElement;
        display.style.border = inputBorder ? '1px solid #ccc' : 'none';
    });

    // ... other existing event listeners
});