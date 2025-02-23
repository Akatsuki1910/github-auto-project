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
document.getElementById('round')?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const roundedValue = Math.round(currentValue);
        display.value = roundedValue.toString();
        currentExpression = roundedValue.toString();
    }
});

//Absolute Value function
document.getElementById('abs')?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const absValue = Math.abs(currentValue);
        display.value = absValue.toString();
        currentExpression = absValue.toString();
    }
});

//Inverse function
document.getElementById('inverse')?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue) && currentValue !== 0) {
        const inverseValue = 1 / currentValue;
        display.value = inverseValue.toString();
        currentExpression = inverseValue.toString();
    } else if (currentValue === 0) {
        display.value = "Cannot divide by zero";
        currentExpression = ""; // Clear the current expression to avoid further calculations
    }
});

// Square function
document.getElementById('square')?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
      const squaredValue = currentValue * currentValue;
      display.value = squaredValue.toString();
      currentExpression = squaredValue.toString();
    }
  });

//Cube root function
document.getElementById('cuberoot')?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const cubeRootValue = Math.cbrt(currentValue);
        display.value = cubeRootValue.toString();
        currentExpression = cubeRootValue.toString();
    }
});

// 10 to the power of x function
document.getElementById('ten-to-the-power')?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = Math.pow(10, currentValue);
        display.value = result.toString();
        currentExpression = result.toString();
    }
});
// ... rest of the code