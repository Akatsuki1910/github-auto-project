// ... (Existing Code)

// ... (Existing event listeners and functions)

let history: string[] = [];
const historyDisplay = document.getElementById("history") as HTMLDivElement;
let lastAnswer = 0;
let currentExpression = "";
const currentExpressionDisplay = document.getElementById("currentExpressionDisplay") as HTMLDivElement;

let memoryValue = 0; // Initialize memory value

function addToHistory(expression: string, result: string) {
    history.push(`${expression} = ${result}`);
    updateHistoryDisplay();
    lastAnswer = parseFloat(result); // Store the last answer
}

function updateHistoryDisplay(){
    historyDisplay.innerHTML = history.map(item => `<div>${item}</div>`).join('');
}
// ... other existing buttons

window.addEventListener("DOMContentLoaded", () => {
  // ... existing code
// ... existing code and event listeners

// Toggle History Display (New Feature)
const toggleHistoryButton = document.getElementById('toggleHistory') as HTMLButtonElement;

toggleHistoryButton.addEventListener('click', () => {
    if (historyDisplay.style.display === 'none' || historyDisplay.style.display === '') {
        historyDisplay.style.display = 'block';
    } else {
        historyDisplay.style.display = 'none';
    }
});

const clearAllButton = document.getElementById('clearAll') as HTMLButtonElement;

  clearAllButton.addEventListener('click', () => {
    history = [];
    updateHistoryDisplay();
});

const keyboardButton = document.getElementById('keyboard') as HTMLButtonElement;
const keyboardContainer = document.getElementById('keyboard-container') as HTMLDivElement;
let keyboardVisible = false;

keyboardButton.addEventListener('click', () => {
  keyboardVisible = !keyboardVisible;
  // Implement logic to show/hide on-screen keyboard
  if (keyboardVisible) {
    keyboardContainer.style.display = 'block';
  } else {
    keyboardContainer.style.display = 'none';
  }
});

const currentExpressionBtn = document.getElementById('currentExpressionBtn') as HTMLButtonElement;

currentExpressionBtn.addEventListener('click', () => {
  // Show current expression in the display
  (document.getElementById('display') as HTMLInputElement).value = currentExpression;
});

});
