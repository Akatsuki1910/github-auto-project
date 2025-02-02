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

// ... (Existing code for other buttons)
const absoluteButton = document.getElementById('absolute') as HTMLButtonElement;

absoluteButton.addEventListener('click', () => {
    const currentValue = parseFloat((document.getElementById('display') as HTMLInputElement).value);
    if (!isNaN(currentValue)) {
        const result = Math.abs(currentValue);
        (document.getElementById('display') as HTMLInputElement).value = result.toString();
        showMessage(`|${currentValue}|: ${result}`);
        addToHistory(`|${currentValue}|`, result.toString());
    }
});

const backspaceButton = document.getElementById('backspace') as HTMLButtonElement;

backspaceButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = display.value.slice(0, -1);
});

});