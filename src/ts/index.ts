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

document.getElementById('toggle-theme')?.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
    document.getElementById('calculator')?.classList.toggle('dark-mode', isDarkMode);
});

// History toggle and clear functionality
document.getElementById('toggle-history')?.addEventListener('click', () => {
    historyDisplay.style.display = historyDisplay.style.display === 'block' ? 'none' : 'block';
});
document.getElementById('clear-history')?.addEventListener('click', () => {
    history = [];
    historyDisplay.innerHTML = '';
});

// Add sin, cos, tan functions (Existing code)

// ... (Rest of the existing code)
// Add calculations to history
function addToHistory(expression: string, result: string) {
    history.push(`${expression} = ${result}`);
    historyDisplay.innerHTML = history.map(item => `<p>${item}</p>`).join('');
}

// Toggle Scientific Functions
document.getElementById('toggle-sci')?.addEventListener('click', () => {
    additionalFunctions.style.display = additionalFunctions.style.display === 'grid' ? 'none' : 'grid';
});

//Round function
// ... (Existing functions)
document.getElementById('sign')?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (currentValue * -1).toString();
        currentExpression = display.value;
    }
});

//Random Number Generation
document.getElementById('rand')?.addEventListener('click', () => {
    const randomNumber = Math.random();
    display.value = randomNumber.toString();
    currentExpression = display.value;
});

//Floor function
document.getElementById('floor')?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
      display.value = Math.floor(currentValue).toString();
      currentExpression = display.value;
    }
  });

//Cube Root function
document.getElementById('cbrt')?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.cbrt(currentValue).toString();
        currentExpression = display.value;
    }
});

//Modulo function
document.getElementById('mod')?.addEventListener('click', () => {
  currentExpression += '%';
  currentExpressionDisplay.textContent = currentExpression;
});

//Power of Two
document.getElementById('power-of-two')?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (currentValue * currentValue).toString();
        currentExpression = display.value;
    }
});
// ... rest of the code