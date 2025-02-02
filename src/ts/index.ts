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

const randomDecimalBtn = document.getElementById('random-decimal') as HTMLButtonElement;
randomDecimalBtn.addEventListener('click', () => {
    const randomNumber = Math.random();
    showMessage(`Random Decimal (0-1): ${randomNumber}`);
    (document.getElementById('display') as HTMLInputElement).value = randomNumber.toString();
    addToHistory('Random Decimal', randomNumber.toString());
});

const piButton = document.getElementById('pi') as HTMLButtonElement;
piButton.addEventListener('click', () => {
  const pi = Math.PI;
  (document.getElementById('display') as HTMLInputElement).value = pi.toString();
  showMessage(`π: ${pi}`);
    addToHistory('π', pi.toString());
});

const eulerButton = document.getElementById('euler') as HTMLButtonElement;
eulerButton.addEventListener('click', () => {
    const euler = Math.E;
    (document.getElementById('display') as HTMLInputElement).value = euler.toString();
    showMessage(`e: ${euler}`);
    addToHistory('e', euler.toString());
});

const memoryPlusButton = document.getElementById('memory-plus') as HTMLButtonElement;
memoryPlusButton.addEventListener('click', () => {
    const currentValue = parseFloat((document.getElementById('display') as HTMLInputElement).value);
    if (!isNaN(currentValue)) {
        memoryValue += currentValue;
        showMessage(`Added ${currentValue} to memory. Memory: ${memoryValue}`);
    }
});

const memoryRecallButton = document.getElementById('memory-recall') as HTMLButtonElement;
memoryRecallButton.addEventListener('click', () => {
  (document.getElementById('display') as HTMLInputElement).value = memoryValue.toString();
  showMessage(`Recalled from memory: ${memoryValue}`);
});

const sinButton = document.getElementById('sin') as HTMLButtonElement;
sinButton.addEventListener('click', () => {
    const currentValue = parseFloat((document.getElementById('display') as HTMLInputElement).value);
    if (!isNaN(currentValue)) {
        const result = Math.sin(currentValue);
        (document.getElementById('display') as HTMLInputElement).value = result.toString();
        showMessage(`sin(${currentValue}): ${result}`);
        addToHistory(`sin(${currentValue})`, result.toString());
    }
});

});
