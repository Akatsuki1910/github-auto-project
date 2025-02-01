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

const backButton = document.getElementById('back') as HTMLButtonElement;

backButton.addEventListener('click', () => {
    currentExpression = currentExpression.slice(0, -1);
    (document.getElementById('display') as HTMLInputElement).value = currentExpression;
});
const clearDisplayButton = document.getElementById('clearDisplay') as HTMLButtonElement;

clearDisplayButton.addEventListener('click', () => {
  (document.getElementById('display') as HTMLInputElement).value = '';
});

//Memory Feature
const memoryPlusButton = document.getElementById('memory-plus') as HTMLButtonElement;
const memoryRecallButton = document.getElementById('memory-recall') as HTMLButtonElement;
const memoryClearButton = document.getElementById('memory-clear') as HTMLButtonElement;
const memoryStoreButton = document.getElementById('memory-store') as HTMLButtonElement;

memoryPlusButton.addEventListener('click', () => {
  const displayValue = parseFloat((document.getElementById('display') as HTMLInputElement).value);
  if (!isNaN(displayValue)) {
    memoryValue += displayValue;
  }
});

memoryRecallButton.addEventListener('click', () => {
  (document.getElementById('display') as HTMLInputElement).value = memoryValue.toString();
});

memoryClearButton.addEventListener('click', () => {
  memoryValue = 0;
});

memoryStoreButton.addEventListener('click', () => {
    const displayValue = parseFloat((document.getElementById('display') as HTMLInputElement).value);
    if (!isNaN(displayValue)) {
      memoryValue = displayValue;
    }
  });

    const clearAllEntriesButton = document.getElementById('clearAllEntries') as HTMLButtonElement;
  clearAllEntriesButton.addEventListener('click', () => {
      currentExpression = '';
      (document.getElementById('display') as HTMLInputElement).value = '';
      currentExpressionDisplay.textContent = ''; // Clear current expression display 
  });
});
