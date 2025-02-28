// ... (Existing code)
// ... (Existing functions)

// ... existing functions

// ... (Other existing functions)
// ... (Existing code)
// ... (Existing variables)

// ... (Existing Event Listeners)

// ... (Existing functions and event listeners)

// ... (Existing Functions)

//Squared Sum Functionality

// ... (Other existing functions)

// Add power of two functionality
// ... existing code

//Add ln functionality
// ... existing code

// Add e functionality

//Add Mod functionality

// Add expm1 functionality

//Add sign change functionality

//Add Sum functionality

//Add Product functionality

// Add Average functionality

// Add Square Root functionality

// Add Cube Root functionality

// Add x^y functionality

//Add log2 functionality

// Add log1p functionality

const numpadToggle = document.getElementById('numpad-toggle') as HTMLButtonElement;
const numpad = document.getElementById('numpad') as HTMLDivElement;

// ... (Existing variable declarations)
const cubedButton = document.getElementById('cubed') as HTMLButtonElement;
const nthRootButton = document.getElementById('nth-root') as HTMLButtonElement;
const duplicateButton = document.getElementById('duplicate') as HTMLButtonElement;
const squareButton = document.getElementById('square') as HTMLButtonElement;
const resetButton = document.getElementById('reset') as HTMLButtonElement;
const modButton = document.getElementById('mod') as HTMLButtonElement;
const exp2Button = document.getElementById('exp2') as HTMLButtonElement;
const calculateSumButton = document.getElementById('calculate-sum') as HTMLButtonElement;
const calculateProductButton = document.getElementById('calculate-product') as HTMLButtonElement;
const calculateAverageButton = document.getElementById('calculate-average') as HTMLButtonElement;
const calculateMedianButton = document.getElementById('calculate-median') as HTMLButtonElement;
const clearEntryButton = document.getElementById('clear-entry') as HTMLButtonElement;
const decimalSeparatorButton = document.getElementById('decimal-separator') as HTMLButtonElement;
const exponentButton = document.getElementById('exponent') as HTMLButtonElement;
const percentChangeButton = document.getElementById('percent-change') as HTMLButtonElement;
let currentDecimalSeparator = '.';
let lastAnswer = 0;
const lastAnswerButton = document.getElementById('last-answer') as HTMLButtonElement;
const dateButton = document.getElementById('date') as HTMLButtonElement;
const currentTimeButton = document.getElementById('current-time') as HTMLButtonElement;
const fibonacciButton = document.getElementById('fibonacci') as HTMLButtonElement;

// ... (Existing Event Listeners)

// ... existing event listeners

// ... (Existing event listeners)

exp2Button.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    display.value = Math.pow(2, currentValue).toString();
});


cubedButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    display.value = Math.pow(currentValue, 3).toString();
});

nthRootButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentDisplay = display.value;
    if (currentDisplay.includes('√')) {
      const parts = currentDisplay.split('√');
      const x = parseFloat(parts[0]);
      const y = parseFloat(parts[1]);
      display.value = Math.pow(y, 1/x).toString();
    } else {
      display.value += '√';
    }
});
duplicateButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value += display.value;
});

squareButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    display.value = Math.pow(currentValue, 2).toString();
});

resetButton.addEventListener('click', () => {
  (document.getElementById('display') as HTMLInputElement).value = '';
});

modButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value += '%';
});

calculateSumButton.addEventListener('click', () => {
  const display = document.getElementById('display') as HTMLInputElement;
  const numbers = display.value.split('+').map(Number);
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  display.value = sum.toString();
});

calculateProductButton.addEventListener('click', () => {
  const display = document.getElementById('display') as HTMLInputElement;
  const numbers = display.value.split('*').map(Number);
  const product = numbers.reduce((acc, num) => acc * num, 1);
  display.value = product.toString();
});

calculateAverageButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const numbers = display.value.split(',').map(Number);  // Split by comma
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    display.value = average.toString();
});

calculateMedianButton.addEventListener('click', () => {
  const display = document.getElementById('display') as HTMLInputElement;
  const numbers = display.value.split(',').map(Number).sort((a, b) => a - b);
  const mid = Math.floor(numbers.length / 2);
  display.value = numbers.length % 2 !== 0 ? numbers[mid].toString() : ((numbers[mid - 1] + numbers[mid]) / 2).toString();
});
numpadToggle.addEventListener('click', () => {
  if (numpad.style.display === 'none') {
    numpad.style.display = 'grid';
  } else {
    numpad.style.display = 'none';
  }
});

clearEntryButton.addEventListener('click', () => {
  (document.getElementById('display') as HTMLInputElement).value = '';
});
decimalSeparatorButton.addEventListener('click', () => {
  if (currentDecimalSeparator === '.') {
    currentDecimalSeparator = ',';
    decimalSeparatorButton.textContent = ',';
    decimalSeparatorButton.dataset.separator = ',';
  } else {
    currentDecimalSeparator = '.';
    decimalSeparatorButton.textContent = '.';
    decimalSeparatorButton.dataset.separator = '.';
  }
});

exponentButton.addEventListener('click', () => {
  const display = document.getElementById('display') as HTMLInputElement;
  display.value = Math.exp(parseFloat(display.value)).toString();
});

percentChangeButton.addEventListener('click', () => {
  const display = document.getElementById('display') as HTMLInputElement;
  const currentValue = parseFloat(display.value);
  // Logic for percent change calculation (e.g., relative to a previous value)
  //  This is a placeholder, requiring further implementation details
  //  For example, store a previous value and calculate the percentage change based on it
  display.value = "(Percent Change Calculation Here)";
});
lastAnswerButton.addEventListener('click', () => {
    (document.getElementById('display') as HTMLInputElement).value += lastAnswer.toString();
});
dateButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = new Date().toDateString();
});
currentTimeButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = new Date().toLocaleTimeString();
});

fibonacciButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const n = parseInt(display.value);
    if (isNaN(n) || n < 0) {
        display.value = "Invalid input";
    } else {
        let a = 0, b = 1, temp;
        for (let i = 0; i < n; i++) {
            temp = b;
            b = a + b;
            a = temp;
        }
        display.value = a.toString();
    }
});
// ... (Rest of the existing code)
