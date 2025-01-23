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
const modeBtn = document.getElementById("mode") as HTMLButtonElement;
// ... other buttons
const backBtn = document.getElementById("back") as HTMLButtonElement; // Back button
const openParenBtn = document.getElementById("open-parenthesis") as HTMLButtonElement;
const closeParenBtn = document.getElementById("close-parenthesis") as HTMLButtonElement;
const currentTimeBtn = document.getElementById("current-time") as HTMLButtonElement;
const currentDateTimeBtn = document.getElementById("current-datetime") as HTMLButtonElement;
const copyToClipboardBtn = document.getElementById("copy-to-clipboard") as HTMLButtonElement;
const resetBtn = document.getElementById("reset") as HTMLButtonElement;
const powerOfTwoBtn = document.getElementById("powerOfTwo") as HTMLButtonElement;

// ... (Existing Event Listeners)
backBtn.addEventListener('click', () => {
    if (currentExpression.length > 0) {
        currentExpression = currentExpression.slice(0, -1);
        display.value = currentExpression;
    }
});

openParenBtn.addEventListener('click', () => {
    currentExpression += "(";
    display.value = currentExpression;
  });

  closeParenBtn.addEventListener('click', () => {
    currentExpression += ")";
    display.value = currentExpression;
  });
currentTimeBtn.addEventListener('click', () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    display.value = timeString;
    addToHistory("Time", timeString);
});

currentDateTimeBtn.addEventListener('click', () => {
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    display.value = dateTimeString;
    addToHistory("Date & Time", dateTimeString);
});

copyToClipboardBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(display.value).then(() => {
      alert('Copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy: ', err);
      alert('Failed to copy to clipboard.');
    });
  });

resetBtn.addEventListener('click', () => {
    currentExpression = '';
    display.value = '';
});
powerOfTwoBtn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = currentValue * currentValue;
        display.value = result.toString();
        addToHistory(currentValue.toString() + "^2", result.toString());
    }
});

// ... other event listeners
});
