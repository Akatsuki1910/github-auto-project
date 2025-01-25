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

keys.forEach(key => {
    key.addEventListener('click', () => {
        display.value += key.textContent;
    });
});

backspaceKey.addEventListener('click', () => {
    display.value = display.value.slice(0, -1);
});

clearKey.addEventListener('click', () => {
  display.value = '';
});
//Rest of the code
signBtn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (-currentValue).toString();
    }
});

copyResultBtn.addEventListener('click', () => {
    const result = display.value;
    if (result) {
      navigator.clipboard.writeText(result)
        .then(() => {
          alert('Result copied to clipboard!');
        })
        .catch(err => {
          console.error('Failed to copy: ', err);
        });
    }
  });

  currentDatBtn.addEventListener('click', () => {
    const currentDate = new Date().toLocaleDateString();
    display.value = currentDate;
});

keyboardBtn.addEventListener('click', () => {
    isKeyboardVisible = !isKeyboardVisible;
    keyboardContainer.style.display = isKeyboardVisible ? "block" : "none";
});

openParenKey.addEventListener('click', () => {
  display.value += '(';
});

closeParenKey.addEventListener('click', () => {
  display.value += ')';
});

exponentKey.addEventListener('click', () => {
    display.value += '**'; // Use ** for exponent in JavaScript
});
equalsKey.addEventListener('click', () => {
    try {
      const result = eval(display.value);
      display.value = result;
    } catch (error) {
      display.value = 'Error';
    }
  });

clearDisplayBtn.addEventListener('click', () => {
    display.value = '';
});

});
