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
const exponentKey = document.getElementById('exponent-key') as HTMLButtonElement;
const openParenKey = document.querySelector('.open-paren-key') as HTMLButtonElement;
const closeParenKey = document.getElementById('close-paren-key') as HTMLButtonElement;
const equalsKey = document.getElementById('equals-key') as HTMLButtonElement;
const clearDisplayBtn = document.getElementById('clearDisplay') as HTMLButtonElement;
const factorialBtn = document.getElementById('factorial') as HTMLButtonElement;
const currentExpressionBtn = document.getElementById('currentExpressionBtn') as HTMLButtonElement;

keys.forEach(key => {
    key.addEventListener('click', () => {
        display.value += key.textContent;
        currentExpression += key.textContent;
        currentExpressionDisplay.textContent = currentExpression; // Update the display
    });
});

backspaceKey.addEventListener('click', () => {
  display.value = display.value.slice(0, -1);
  currentExpression = currentExpression.slice(0, -1); // Update current expression
  currentExpressionDisplay.textContent = currentExpression;
});

clearKey.addEventListener('click', () => {
  display.value = '';
  currentExpression = ''; // Clear current expression
  currentExpressionDisplay.textContent = currentExpression; 
});
//Rest of the code
// ... (rest of the code)
currentExpressionBtn.addEventListener('click', () => {
  display.value = currentExpression;
});

});