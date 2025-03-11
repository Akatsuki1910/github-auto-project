// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
let currentExpression = '';
const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
let lastAnswer = 0;
let memoryValue = 0; 
const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
let history: string[] = [];

// ... (Other existing code)

// ... existing functions

//Added screen brightness functionality
const toggleScreenBrightnessButton = document.getElementById('toggle-screen-brightness') as HTMLButtonElement;
let brightness = 1;
toggleScreenBrightnessButton.addEventListener('click', () => {
    brightness -= 0.1;
    if (brightness < 0) brightness = 1; // Reset to max brightness
    document.body.style.filter = `brightness(${brightness})`;
});

// ... existing code for toggleHistoryDisplayButton, clearLastNumberButton, debugButton, toggleCurrentExpressionButton, toggleKeyboardButton, toggleDisplayAlwaysOnButton

// Toggle Dark Mode
const toggleDarkModeButton = document.getElementById('toggle-dark-mode') as HTMLButtonElement;
let darkMode = false;
toggleDarkModeButton.addEventListener('click', () => {
    darkMode = !darkMode;
    document.body.classList.toggle('dark-scheme', darkMode);
    document.body.classList.toggle('light-scheme', !darkMode);
});

// Toggle Calculator Visibility
const toggleCalculatorVisibilityButton = document.getElementById('toggle-calculator-visibility') as HTMLButtonElement;
const calculatorDiv = document.getElementById('calculator') as HTMLDivElement;
toggleCalculatorVisibilityButton.addEventListener('click', () => {
    calculatorDiv.style.display = calculatorDiv.style.display === 'none' ? 'block' : 'none';
});

// Toggle CapsLock
// ... existing code

// Toggle Font Size
const toggleFontsizeButton = document.getElementById('toggle-fontsize') as HTMLButtonElement;
let fontSize = 16;
toggleFontsizeButton.addEventListener('click', () => {
  fontSize += 2;
  display.style.fontSize = fontSize + 'px';
});