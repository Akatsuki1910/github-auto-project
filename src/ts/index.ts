// ... (Existing Code)

// Add factorial button

// Existing code ...

// ... (Existing event listeners and functions)

//Existing code ...

let history: string[] = [];
const historyDisplay = document.getElementById("history") as HTMLDivElement;
let lastAnswer = 0;
let memory = 0;
let mode = "rad"; // Initialize mode to radians
let isInverse = false; // Flag for inverse mode
let isParenthesesOpen = false;
let currentExpression = "";
const currentExpressionDisplay = document.getElementById("currentExpressionDisplay") as HTMLDivElement;

function addToHistory(expression: string, result: string) {
    history.push(`${expression} = ${result}`);
    updateHistoryDisplay();
    lastAnswer = parseFloat(result); // Store the last answer
}

function updateHistoryDisplay(){
    historyDisplay.innerHTML = history.map(item => `<div>${item}</div>`).join('');
}
// ... other existing buttons

// ... existing code

window.addEventListener("DOMContentLoaded", () => {
  // ... existing code
const calculateBtn = document.getElementById("calculate") as HTMLButtonElement;
const display = document.getElementById("display") as HTMLInputElement;
// ... other existing buttons
const signBtn = document.getElementById("sign") as HTMLButtonElement;
const copyResultBtn = document.getElementById("copyResult") as HTMLButtonElement;
const currentDatBtn = document.getElementById("current-date") as HTMLButtonElement;
const keyboardBtn = document.getElementById("keyboard") as HTMLButtonElement;
const keyboardContainer = document.getElementById("keyboardContainer") as HTMLDivElement;
let isKeyboardVisible = false; // Flag to track keyboard visibility
const keys = document.querySelectorAll('.key');
const backspaceKey = document.getElementById('backspace-key') as HTMLButtonElement;
const clearKey = document.getElementById('clear-key') as HTMLButtonElement;
const equalsKey = document.getElementById('equals-key') as HTMLButtonElement;
const clearDisplayBtn = document.getElementById('clearDisplay') as HTMLButtonElement;
const factorialBtn = document.getElementById('factorial') as HTMLButtonElement;
const currentExpressionBtn = document.getElementById('currentExpressionBtn') as HTMLButtonElement;
const lastAnswerBtn = document.getElementById('lastAnswer') as HTMLButtonElement;
const memoryPlusBtn = document.getElementById('memoryPlus') as HTMLButtonElement; // Memory Plus button
const memoryRecallBtn = document.getElementById('memoryRecall') as HTMLButtonElement; //Memory Recall
const memoryClearBtn = document.getElementById('memoryClear') as HTMLButtonElement; // Memory Clear
const squareBtn = document.getElementById('square') as HTMLButtonElement;
const cubeBtn = document.getElementById('cube') as HTMLButtonElement;
const negateBtn = document.getElementById('negate') as HTMLButtonElement;
const sqrtBtn = document.getElementById('sqrt') as HTMLButtonElement;
const percentBtn = document.getElementById('percent') as HTMLButtonElement;
const roundToNDecimalBtn = document.getElementById('roundToNDecimal') as HTMLButtonElement; //New Button
const roundTo2DecimalBtn = document.getElementById('roundTo2Decimal') as HTMLButtonElement; //New Button
const exponentBtn = document.querySelector('.key[data-key="^"]') as HTMLButtonElement; //Added exponent
const rndBtn = document.getElementById('Rnd') as HTMLButtonElement;
const roundToNDecimalPlacesBtn = document.getElementById('roundToNDecimalPlaces') as HTMLButtonElement;
const calculateTaxBtn = document.getElementById('calculateTax') as HTMLButtonElement;
const calculateTipBtn = document.getElementById('calculateTip') as HTMLButtonElement;

keys.forEach(key => {
    key.addEventListener('click', () => {
        display.value += key.textContent;
        currentExpression += key.textContent; // Update currentExpression
        currentExpressionDisplay.textContent = currentExpression;
    });
});

exponentBtn.addEventListener('click', () => {
  display.value += '**'; // Use ** for exponent in calculations
  currentExpression += '**';
  currentExpressionDisplay.textContent = currentExpression; 
});

factorialBtn.addEventListener('click', () => {
    try {
      const num = parseFloat(display.value);
      if (isNaN(num)) {
        display.value = "Error: Invalid input";
      } else if (num < 0) {
        display.value = "Error: Factorial of negative number";
      } else {
        let result = 1;
        for (let i = 2; i <= num; i++) {
          result *= i;
        }
        display.value = result.toString();
        addToHistory(`fact(${num})`, result.toString());
      }
    } catch (error) {
      display.value = "Error";
    }
  });

  roundTo2DecimalBtn.addEventListener('click', () => {
    const num = parseFloat(display.value);
    if (!isNaN(num)) {
      const rounded = Math.round(num * 100) / 100; // Round to 2 decimal places
      display.value = rounded.toString();
        addToHistory(`round(${num},2)`,rounded.toString())
    }
  });

  rndBtn.addEventListener('click', () => {
      const randomNumber = Math.random();
      display.value = randomNumber.toString();
      addToHistory('rnd',randomNumber.toString());
    });

roundToNDecimalPlacesBtn.addEventListener('click', () => {
    const decimalPlaces = parseInt(prompt('Enter the number of decimal places:', '2') || '2', 10);
  if (isNaN(decimalPlaces)){
    display.value = "Invalid input";
        return;
    }
    const num = parseFloat(display.value);
    if (!isNaN(num)) {
        const rounded = parseFloat(num.toFixed(decimalPlaces));
        display.value = rounded.toString();
        addToHistory(`round(${num},${decimalPlaces})`, rounded.toString());
    }
});

calculateTaxBtn.addEventListener('click', () => {
    const price = parseFloat(display.value);
    if (isNaN(price)) {
      display.value = "Invalid input";
      return;
    }
    const taxRate = parseFloat(prompt('Enter tax rate (e.g., 8 for 8%):', '8') || '8');
    if (isNaN(taxRate)) {
      display.value = "Invalid tax rate";
      return;
    }
    const taxAmount = price * (taxRate / 100);
    const totalPrice = price + taxAmount;
    display.value = totalPrice.toString();
    addToHistory(`tax(${price}, ${taxRate})`, totalPrice.toString());
  });

  calculateTipBtn.addEventListener('click', () => {
    const billAmount = parseFloat(display.value);
    if (isNaN(billAmount) || billAmount < 0) {
        display.value = "Invalid input";
        return;
    }
    const tipPercentage = parseFloat(prompt('Enter tip percentage (e.g., 15 for 15%):', '15') || '15');
    if (isNaN(tipPercentage) || tipPercentage < 0) {
        display.value = "Invalid tip percentage";
        return;
    }
    const tipAmount = (billAmount * tipPercentage) / 100;
    display.value = tipAmount.toString();
    addToHistory(`tip(${billAmount}, ${tipPercentage})`, tipAmount.toString());
});

//Rest of the code
}
);
