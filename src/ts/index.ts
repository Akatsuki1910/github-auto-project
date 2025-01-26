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
const calculateSphereVolumeBtn = document.getElementById('calculateSphereVolume') as HTMLButtonElement;
const calculateCylinderVolumeBtn = document.getElementById('calculateCylinderVolume') as HTMLButtonElement;
const toggleThemeBtn = document.getElementById('toggleTheme') as HTMLButtonElement;
const calculateCubeRootBtn = document.getElementById('calculateCubeRoot') as HTMLButtonElement;
const calculateConeVolumeBtn = document.getElementById('calculateConeVolume') as HTMLButtonElement;
const calculatePercentageBtn = document.getElementById('calculatePercentage') as HTMLButtonElement;

keys.forEach(key => {
    key.addEventListener('click', () => {
        display.value += key.textContent;
        currentExpression += key.textContent; // Update currentExpression
        currentExpressionDisplay.textContent = currentExpression;
    });
});


factorialBtn.addEventListener('click', () => {
    // ... existing factorial logic ...
});

// Function to toggle between light and dark themes
function toggleTheme() {
    // ... existing toggle theme logic ... 
}

toggleThemeBtn.addEventListener('click', toggleTheme);

calculateAreaOfCircleBtn.addEventListener('click', () => {
    // ... existing logic ...
});

calculateSphereVolumeBtn.addEventListener('click', () => {
  // ... existing logic ...
});

calculateCylinderVolumeBtn.addEventListener('click', () => {
 // ... existing logic ...
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
    // ... existing logic ...
});

calculateCubeRootBtn.addEventListener('click', () => {
  // ... existing logic ...
});

calculateConeVolumeBtn.addEventListener('click', () => {
// ... existing logic
});

calculatePercentageBtn.addEventListener('click', () => {
  const percentage = parseFloat(prompt("Enter the percentage:"));
  const number = parseFloat(display.value);
  if (isNaN(percentage) || isNaN(number)) {
    display.value = "Invalid input";
    return;
  }
  const result = (percentage / 100) * number;
  display.value = result.toString();
  addToHistory(`${percentage}% of ${number}`, result.toString());
});

});
