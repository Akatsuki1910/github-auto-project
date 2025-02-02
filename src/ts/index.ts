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

//Added Feature: get current time in seconds
const currentTimeSecondsButton = document.getElementById('current-time-seconds') as HTMLButtonElement;

currentTimeSecondsButton.addEventListener('click',()=>{
    const now = new Date();
    const seconds = now.getSeconds();
    showMessage(`Current Time in seconds : ${seconds}`);
    addToHistory('Time in seconds',seconds.toString());
});

// ... Other existing date/time buttons

// Generate Random decimal number
const randomDecimalBtn = document.getElementById('random-decimal') as HTMLButtonElement;
randomDecimalBtn.addEventListener('click', () => {
    const randomNumber = Math.random();
    showMessage(`Random Decimal (0-1): ${randomNumber}`);
    (document.getElementById('display') as HTMLInputElement).value = randomNumber.toString();
    addToHistory('Random Decimal', randomNumber.toString());
});

// Get current date and time as a formatted string
const currentDateTimeStringButton = document.getElementById('current-date-time-string') as HTMLButtonElement;
currentDateTimeStringButton.addEventListener('click', () => {
    const now = new Date();
    const dateTimeString = now.toLocaleString(); // Get current date & time string
    showMessage(`Date and Time String: ${dateTimeString}`);
    (document.getElementById('display') as HTMLInputElement).value = dateTimeString;
    addToHistory('Date and Time String', dateTimeString);
});

// Get current date and time as a local formatted string
const currentDateTimeLocalStringButton = document.getElementById('current-date-time-local-string') as HTMLButtonElement;
currentDateTimeLocalStringButton?.addEventListener('click', () => {
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    showMessage(`Date and Time Local String: ${dateTimeString}`);
    (document.getElementById('display') as HTMLInputElement).value = dateTimeString;
    addToHistory('Date and Time Local String', dateTimeString);
});

});
