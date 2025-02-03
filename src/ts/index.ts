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
// ... other existing buttons
// ... (Other existing event listeners)

const toggleKeyboardButton = document.getElementById('toggleKeyboard') as HTMLButtonElement;
const keyboardContainer = document.getElementById('keyboard-container') as HTMLDivElement;

toggleKeyboardButton.addEventListener('click', () => {
  if (keyboardContainer.style.display === 'none') {
    keyboardContainer.style.display = 'block';
  } else {
    keyboardContainer.style.display = 'none';
  }
});

const randomIntegerButton = document.getElementById('random-integer') as HTMLButtonElement;

randomIntegerButton.addEventListener('click', () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1; // Generates a random integer between 1 and 100
  showMessage(`Random Integer: ${randomNumber}`);
  addToHistory('Random Integer', randomNumber.toString());
});

});
