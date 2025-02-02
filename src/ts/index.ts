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
const signButton = document.getElementById('sign') as HTMLButtonElement;

signButton.addEventListener('click', () => {
  const display = document.getElementById('display') as HTMLInputElement;
  let currentValue = display.value;

if (currentValue) {
    display.value = (parseFloat(currentValue) * -1).toString();
  }
});

const currentTimeMillisecondsButton = document.getElementById('current-time-milliseconds') as HTMLButtonElement;
currentTimeMillisecondsButton.addEventListener('click', () => {
    const now = new Date();
    const timeMilliseconds = now.getTime();
    showMessage(`Current Time in Milliseconds: ${timeMilliseconds}`);
    addToHistory('Time in Milliseconds', timeMilliseconds.toString());
});

const currentDateTimeMillisecondsButton = document.getElementById('current-date-time-milliseconds') as HTMLButtonElement;
currentDateTimeMillisecondsButton.addEventListener('click', () => {
  const now = new Date();
  const dateTimeMilliseconds = now.toString();
  showMessage(`Current Date & Time in Milliseconds: ${dateTimeMilliseconds}`);
  addToHistory('Date & Time in Milliseconds', dateTimeMilliseconds);
});

const currentDateTimeIsoButton = document.getElementById('current-date-time-iso') as HTMLButtonElement;
currentDateTimeIsoButton.addEventListener('click', () => {
  const now = new Date();
  const dateTimeIso = now.toISOString();
  showMessage(`Current Date & Time (ISO): ${dateTimeIso}`);
  addToHistory('Date & Time (ISO)', dateTimeIso);
});

const currentTimeStringButton = document.getElementById('current-time-string') as HTMLButtonElement;
currentTimeStringButton.addEventListener('click', () => {
  const now = new Date();
  const timeString = now.toLocaleTimeString(); // Get current time as a string
  showMessage(`Current Time String: ${timeString}`);
  addToHistory('Time String', timeString);
});

// ... (Rest of the existing code)
});
