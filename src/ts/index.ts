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

// ... existing date and time buttons

const currentTimeMillisecondsButton = document.getElementById('current-time-milliseconds') as HTMLButtonElement;
currentTimeMillisecondsButton.addEventListener('click', () => {
    const now = new Date();
    const timeMilliseconds = now.getTime();
    showMessage(`Current Time in Milliseconds: ${timeMilliseconds}`);
    addToHistory('Time in Milliseconds', timeMilliseconds.toString());
});

// ... (Rest of the existing code)
});
