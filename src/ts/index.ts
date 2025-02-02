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
const messageContainer = document.getElementById('message-container') as HTMLDivElement;

function showMessage(message: string) {
  const messageElement = document.createElement('div');
  messageElement.textContent = message;
  messageContainer.appendChild(messageElement);

  // Automatically remove the message after 3 seconds
  setTimeout(() => {
    messageElement.remove();
  }, 3000); 
}

// ... (Existing code for other buttons)
//Added Feature: get current time in seconds
const currentTimeSecondsButton = document.getElementById('current-time-seconds') as HTMLButtonElement;

currentTimeSecondsButton.addEventListener('click',()=>{
    const now = new Date();
    const seconds = now.getSeconds();
    showMessage(`Current Time in seconds : ${seconds}`);
    addToHistory('Time in seconds',seconds.toString());
});

// ... existing buttons
const squareButton = document.getElementById('square') as HTMLButtonElement;
squareButton.addEventListener('click', () => {
    const currentValue = parseFloat((document.getElementById('display') as HTMLInputElement).value);
    if (!isNaN(currentValue)) {
        const result = Math.pow(currentValue, 2);
        (document.getElementById('display') as HTMLInputElement).value = result.toString();
        showMessage(`(${currentValue})²: ${result}`);
        addToHistory(`(${currentValue})²`, result.toString());
    }
});

const cubeRootButton = document.getElementById('cube-root') as HTMLButtonElement;
cubeRootButton.addEventListener('click', () => {
    const currentValue = parseFloat((document.getElementById('display') as HTMLInputElement).value);
    if (!isNaN(currentValue)) {
        const result = Math.cbrt(currentValue);
        (document.getElementById('display') as HTMLInputElement).value = result.toString();
        showMessage(`∛(${currentValue}): ${result}`);
        addToHistory(`∛(${currentValue})`, result.toString());
    }
});

const inverseButton = document.getElementById('inverse') as HTMLButtonElement;
inverseButton.addEventListener('click', () => {
    const currentValue = parseFloat((document.getElementById('display') as HTMLInputElement).value);
    if (!isNaN(currentValue) && currentValue !== 0) { // Check for division by zero
        const result = 1 / currentValue;
        (document.getElementById('display') as HTMLInputElement).value = result.toString();
        showMessage(`1/(${currentValue}): ${result}`);
        addToHistory(`1/(${currentValue})`, result.toString());
    } else if (currentValue === 0) {
      showMessage("Division by zero error!");
    }
});

// ... other existing buttons
});