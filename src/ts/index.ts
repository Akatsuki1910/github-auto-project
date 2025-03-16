// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
let currentExpression = '';
const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
let lastAnswer = 0;
let memoryValue = 0; 
const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
let history: string[] = [];
// ... (Other existing code and functions)
// ... existing filters
//Absolute Value
// ... (Existing functions)
//Floor function
// ... existing math functions
//Copy to Clipboard
const copyToClipboardButton = document.getElementById('copy-to-clipboard') as HTMLButtonElement;
copyToClipboardButton.addEventListener('click', () => {
    navigator.clipboard.writeText(display.value).then(() => {
        alert('Copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
});
// ... existing code
// ... (Existing functions)
// ... existing buttons
// ... existing toggle functions
// ... existing functions for month, year, day, second, millisecond, minute, hour, etc.
// ... existing functions
// ... existing functions
// ... (Existing functions)
// ... existing event listeners
// ... existing button event listeners
// ... existing code
const toggleBrightnessButton = document.getElementById('toggle-brightness') as HTMLButtonElement;
toggleBrightnessButton.addEventListener('click', () => {
    document.body.classList.toggle('low-brightness');
});
const toggleFontsizeButton = document.getElementById('toggle-fontsize') as HTMLButtonElement;
toggleFontsizeButton.addEventListener('click', () => {
    display.classList.toggle('large-display');
});
const calculatorContainer = document.getElementById('calculator') as HTMLDivElement;
const toggleCalculatorVisibilityButton = document.getElementById('toggle-calculator-visibility') as HTMLButtonElement;
toggleCalculatorVisibilityButton.addEventListener('click', () => {
  calculatorContainer.style.display = calculatorContainer.style.display === 'none' ? 'block' : 'none';
});
const negateButton = document.getElementById('negate') as HTMLButtonElement;
negateButton.addEventListener('click', () => {
    if (display.value) {
        display.value = (-parseFloat(display.value)).toString();
    }
});
const toggleHistoryVisibilityButton = document.getElementById('toggle-history-visibility') as HTMLButtonElement;
toggleHistoryVisibilityButton.addEventListener('click', () => {
    historyDisplay.style.display = historyDisplay.style.display === 'none' ? 'block' : 'none';
});
const toggleOpacityButton = document.getElementById('toggle-opacity') as HTMLButtonElement;
toggleOpacityButton.addEventListener('click', () => {
    document.body.classList.toggle('low-opacity');
});
const toggleOscillatorButton = document.getElementById('toggle-oscillator') as HTMLButtonElement;
let oscillatorInterval: number | undefined;
toggleOscillatorButton.addEventListener('click', () => {
    if (oscillatorInterval) {
        clearInterval(oscillatorInterval);
        oscillatorInterval = undefined;
    } else {
        oscillatorInterval = setInterval(() => {
            display.value = Math.sin(Date.now() / 1000).toString();
        }, 50);
    }
});
