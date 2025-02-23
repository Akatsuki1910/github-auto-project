// ... (Existing code)

// ... (Existing functions)

// ... existing functions

// ... (Other existing functions)
const display = document.getElementById('display') as HTMLInputElement;
let isDegreeMode = true;
let ans = 0; // Store the last answer
let history: string[] = []; // History array to store calculations
const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
const additionalFunctions = document.querySelector('.additional-functions') as HTMLDivElement;
const mainPad = document.querySelector('.main-pad') as HTMLDivElement;
const scientificSection = document.querySelector('.scientific-section') as HTMLDivElement;
const memorySection = document.querySelector('.memory-section') as HTMLDivElement;
const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
let currentExpression = '';
let isKeyboardEnabled = false;
let isNumpadEnabled = false; // Add flag for numpad
let isDarkMode = false; // Flag for dark mode

// ... (Existing Event Listeners)

document.getElementById('toggle-numpad')?.addEventListener('click', () => {
    isNumpadEnabled = !isNumpadEnabled;
    if (isNumpadEnabled) {
        document.addEventListener('keydown', handleNumpadInput);
    } else {
        document.removeEventListener('keydown', handleNumpadInput);
    }
});

function handleNumpadInput(event: KeyboardEvent) {
    const key = event.key;
    if (!isNaN(parseInt(key)) && event.location === KeyboardEvent.DOM_KEY_LOCATION_NUMPAD) {
        display.value += key;
    }
}

// Dark mode toggle
document.getElementById('toggle-dark-mode')?.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
    document.getElementById('calculator')?.classList.toggle('dark-mode', isDarkMode);
});

// Add sin function
document.getElementById('sin')?.addEventListener('click', () => {
    const value = parseFloat(display.value);
    if (!isNaN(value)) {
        const result = isDegreeMode ? Math.sin(value * Math.PI / 180) : Math.sin(value);
        display.value = result.toString();
        currentExpression += `sin(${value})`;
        currentExpressionDisplay.textContent = currentExpression;
    }
});

// Add cos function
document.getElementById('cos')?.addEventListener('click', () => {
    const value = parseFloat(display.value);
    if (!isNaN(value)) {
        const result = isDegreeMode ? Math.cos(value * Math.PI / 180) : Math.cos(value);
        display.value = result.toString();
        currentExpression += `cos(${value})`;
        currentExpressionDisplay.textContent = currentExpression;
    }
});

// Add tan function
document.getElementById('tan')?.addEventListener('click', () => {
    const value = parseFloat(display.value);
    if (!isNaN(value)) {
        const result = isDegreeMode ? Math.tan(value * Math.PI / 180) : Math.tan(value);
        display.value = result.toString();
        currentExpression += `tan(${value})`;
        currentExpressionDisplay.textContent = currentExpression;
    }
});

// ... (Rest of the existing code)