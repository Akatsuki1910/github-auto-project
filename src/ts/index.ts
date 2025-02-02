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

const currentDateTimeButton = document.getElementById('current-date-time') as HTMLButtonElement;
currentDateTimeButton.addEventListener('click', () => {
    const now = new Date();
    const dateTimeString = now.toLocaleString(); // Get both date and time
    showMessage(`Current Date & Time: ${dateTimeString}`);
    addToHistory('Date & Time', dateTimeString); // Add to history
});

const currentTimestampButton = document.getElementById('current-timestamp') as HTMLButtonElement;
currentTimestampButton.addEventListener('click', () => {
  const timestamp = Date.now();
  showMessage(`Current Timestamp: ${timestamp}`);
  addToHistory('Timestamp', timestamp.toString());
});

const currentTimezoneButton = document.getElementById('current-timezone') as HTMLButtonElement;
currentTimezoneButton.addEventListener('click', () => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    showMessage(`Current Timezone: ${timezone}`);
    addToHistory('Timezone', timezone);
});

const currentLocaleButton = document.getElementById('current-locale') as HTMLButtonElement;
currentLocaleButton.addEventListener('click', () => {
    const locale = navigator.language;
    showMessage(`Current Locale: ${locale}`);
    addToHistory('Locale', locale); // Add to history
});


// ... (Rest of the existing code)
});
