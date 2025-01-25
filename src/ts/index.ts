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

keys.forEach(key => {
    key.addEventListener('click', () => {
        display.value += key.textContent;
        currentExpression += key.textContent; // Update currentExpression
        currentExpressionDisplay.textContent = currentExpression;
    });
});

// ... (rest of the existing code)
calculateProfitMarginBtn.addEventListener('click', () => {
    const costPrice = parseFloat(prompt('Enter cost price:', '0'));
    const sellingPrice = parseFloat(prompt('Enter selling price:', '0'));
    if (isNaN(costPrice) || isNaN(sellingPrice) || costPrice <= 0 || sellingPrice <= 0 || sellingPrice < costPrice) {
        display.value = "Invalid input";
        return;
    }
    const profit = sellingPrice - costPrice;
    const profitMargin = (profit / sellingPrice) * 100;
    display.value = profitMargin.toString() + '%';
    addToHistory(`Profit Margin`, profitMargin.toString() + '%');
});


calculateDiscountBtn.addEventListener('click', () => {
    const originalPrice = parseFloat(display.value);
    if (isNaN(originalPrice) || originalPrice < 0) {
        display.value = "Invalid input";
        return;
    }
    const discountPercentage = parseFloat(prompt('Enter discount percentage (e.g., 10 for 10%):', '10') || '10');
    if (isNaN(discountPercentage) || discountPercentage < 0 || discountPercentage > 100) { //Check for discountPercentage validity
        display.value = "Invalid discount percentage";
        return;
    }
    const discountAmount = (originalPrice * discountPercentage) / 100;
    const discountedPrice = originalPrice - discountAmount;
    display.value = discountedPrice.toString();
    addToHistory(`discount(${originalPrice}, ${discountPercentage})`, discountedPrice.toString());
});


});
