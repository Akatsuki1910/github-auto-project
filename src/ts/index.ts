// ... (Existing code)

// ... (Existing functions)

// ... existing functions

// ... (Other existing functions)
// ... (Existing code)
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
let openParenthesesCount = 0;
let memory = 0;
let memorySum = 0; 
let memoryCount = 0;

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
// ... (Existing code) ...

//Min Function
document.getElementById('min')?.addEventListener('click', () => {
    try {
        const numbers = currentExpression.split(',').map(Number);
        display.value = Math.min(...numbers).toString();
        currentExpression = display.value;
    } catch (error) {
        display.value = 'Error';
    }
});

// Copy to clipboard functionality
document.getElementById('copy')?.addEventListener('click', () => {
    navigator.clipboard.writeText(display.value).then(() => {
      // Optional: Display a message or change button style to indicate success
      console.log('Copied to clipboard');
    }, (err) => {
      console.error('Failed to copy: ', err);
    });
  });

//Factorial Function
document.getElementById('factorial')?.addEventListener('click', () => {
    try {
        const num = parseFloat(display.value);
        if (isNaN(num)) {
            display.value = "Invalid Input"
        }
        const result = factorial(num);
        display.value = result.toString();
        currentExpression = display.value; 
    } catch (error) {
        display.value = "Error";
    }
});
function factorial(n:number):number{
    if(n < 0) return -1; //Error
    if(n===0) return 1; //Base case
    return n * factorial(n-1);
}

// Exponential function
document.getElementById('exp')?.addEventListener('click', () => {
    try {
        const num = parseFloat(display.value);
        display.value = Math.exp(num).toString();
        currentExpression = display.value; 
    } catch (error) {
        display.value = "Error";
    }
});
//Parentheses
document.getElementById('open-parenthesis')?.addEventListener('click', () => {
    currentExpression += '(';
    currentExpressionDisplay.textContent = currentExpression;
});

document.getElementById('close-parenthesis')?.addEventListener('click', () => {
    currentExpression += ')';
    currentExpressionDisplay.textContent = currentExpression;
});

// Absolute value function
document.getElementById('abs')?.addEventListener('click', () => {
    try {
        const num = parseFloat(display.value);
        display.value = Math.abs(num).toString();
        currentExpression = display.value;
    } catch (error) {
        display.value = 'Error';
    }
});

// Round function
document.getElementById('round')?.addEventListener('click', () => {
    try {
        const num = parseFloat(display.value);
        display.value = Math.round(num).toString();
        currentExpression = display.value;
    } catch (error) {
        display.value = 'Error';
    }
});

//Sign function: Added
document.getElementById('sign')?.addEventListener('click', () => {
    try {
        const num = parseFloat(display.value);
        display.value = Math.sign(num).toString();
        currentExpression = display.value;
    } catch (error) {
        display.value = 'Error';
    }
});