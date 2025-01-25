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

keys.forEach(key => {
    key.addEventListener('click', () => {
        display.value += key.textContent;
        currentExpression += key.textContent; // Update currentExpression
        currentExpressionDisplay.textContent = currentExpression;
    });
});

backspaceKey.addEventListener('click', () => {
  display.value = display.value.slice(0, -1);
  currentExpression = currentExpression.slice(0, -1);
  currentExpressionDisplay.textContent = currentExpression;
});

clearKey.addEventListener('click', () => {
  display.value = '';
  currentExpression = '';
  currentExpressionDisplay.textContent = currentExpression;
});
//Rest of the code
// ... (rest of the code)
currentExpressionBtn.addEventListener('click', () => {
  display.value = currentExpression;
});

factorialBtn.addEventListener('click', () => {
    try {
      const num = parseFloat(display.value);
      if (isNaN(num)) {
        display.value = "Error: Invalid input";
      } else {
        const result = factorial(num);
        display.value = result.toString();
        addToHistory(num.toString() + "!" , result.toString());
      }
    } catch (error) {
      display.value = "Error";
    }
  });

lastAnswerBtn.addEventListener('click', () => {
    display.value += lastAnswer;
    currentExpression += lastAnswer;
    currentExpressionDisplay.textContent = currentExpression; // Update the display
});

memoryPlusBtn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
      memory += currentValue;
    }
  });
memoryRecallBtn.addEventListener('click', () => {
    display.value += memory;  // Append memory to current input
  currentExpression += memory;
  currentExpressionDisplay.textContent = currentExpression;
});

  function factorial(n: number): number {
    if (n < 0) {
      throw new Error("Factorial is not defined for negative numbers.");
    } else if (n === 0) {
      return 1;
    } else {
      let result = 1;
      for (let i = 1; i <= n; i++) {
        result *= i;
      }
      return result;
    }
  }

});
