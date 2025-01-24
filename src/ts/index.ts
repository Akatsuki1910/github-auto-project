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
const inverseSinBtn = document.getElementById("inverseSin") as HTMLButtonElement;
const degRadBtn = document.getElementById("deg-rad") as HTMLButtonElement;
const squared3Btn = document.getElementById("squared3") as HTMLButtonElement;
const nthRootBtn = document.getElementById("nthRoot") as HTMLButtonElement;

// ... (Existing Event Listeners)

squared3Btn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
      const result = currentValue * currentValue;
      display.value = result.toString();
      addToHistory(`sqr(${currentValue})`, result.toString());
    }
});

thRootBtn.addEventListener('click', () => {
    // Implement nth root logic here. This is a placeholder.
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
      // Example: Calculate the square root (replace with actual nth root logic)
      const result = Math.sqrt(currentValue);
      display.value = result.toString();
    }
});

// ... other event listeners

degRadBtn.addEventListener('click', () => {
    mode = (mode === "rad") ? "deg" : "rad";
    degRadBtn.textContent = (mode === "rad") ? "Rad" : "Deg";
});
});