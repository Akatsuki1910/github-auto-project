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
const calculateDiscountBtn = document.getElementById('calculateDiscount') as HTMLButtonElement;
const calculateProfitMarginBtn = document.getElementById('calculateProfitMargin') as HTMLButtonElement;
const calculateSimpleInterestBtn = document.getElementById('calculateSimpleInterest') as HTMLButtonElement;
const calculateCompoundInterestBtn = document.getElementById('calculateCompoundInterest') as HTMLButtonElement;
const calculateAreaOfCircleBtn = document.getElementById('calculateAreaOfCircle') as HTMLButtonElement;

keys.forEach(key => {
    key.addEventListener('click', () => {
        display.value += key.textContent;
        currentExpression += key.textContent; // Update currentExpression
        currentExpressionDisplay.textContent = currentExpression;
    });
});


factorialBtn.addEventListener('click', () => {
    const num = parseFloat(display.value);
    if (isNaN(num)) {
        display.value = "Invalid input";
        return;
    }
    if (num < 0) {
        display.value = "Factorial is not defined for negative numbers";
    } else if (!Number.isInteger(num)) {
        display.value = "Factorial is only defined for integers";
    } else {
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        display.value = result.toString();
    addToHistory(`${num}!`, result.toString());
}
});

calculateAreaOfCircleBtn.addEventListener('click', () => {
    const radius = parseFloat(prompt('Enter the radius of the circle:', '0'));
    if (isNaN(radius) || radius < 0) {
        display.value = "Invalid input";
        return;
    }
    const area = Math.PI * radius * radius;
    display.value = area.toString();
    addToHistory(`Area of Circle (r=${radius})`, area.toString());
});

// ... (rest of the existing code)
calculateProfitMarginBtn.addEventListener('click', () => {
    // ... (Existing profit margin calculation logic)
});

calculateDiscountBtn.addEventListener('click', () => {
    // ... (Existing discount calculation logic)
});

calculateSimpleInterestBtn.addEventListener('click', () => {
    // ... (Existing simple interest calculation logic)
});

calculateCompoundInterestBtn.addEventListener('click', () => {
    const principal = parseFloat(prompt('Enter principal amount:', '0'));
    const rate = parseFloat(prompt('Enter annual interest rate (e.g., 5 for 5%):', '0'));
    const time = parseFloat(prompt('Enter time in years:', '0'));
    const n = parseFloat(prompt('Enter number of times interest is compounded per year:', '1'));

    if (isNaN(principal) || isNaN(rate) || isNaN(time) || isNaN(n) || principal < 0 || rate < 0 || time < 0 || n < 0) {
        display.value = "Invalid input";
        return;
    }

    const amount = principal * Math.pow(1 + (rate / (100 * n)), n * time);
    const compoundInterest = amount - principal;
    display.value = compoundInterest.toString();
    addToHistory(`Compound Interest`, compoundInterest.toString());
});

});
