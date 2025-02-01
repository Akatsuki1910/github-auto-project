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

// Toggle History Display (New Feature)
const toggleHistoryButton = document.getElementById('toggleHistory') as HTMLButtonElement;

toggleHistoryButton.addEventListener('click', () => {
    if (historyDisplay.style.display === 'none' || historyDisplay.style.display === '') {
        historyDisplay.style.display = 'block';
        showMessage("History Displayed"); // Show message
    } else {
        historyDisplay.style.display = 'none';
        showMessage("History Hidden"); // Show message
    }
});

const clearAllButton = document.getElementById('clearAll') as HTMLButtonElement;

  clearAllButton.addEventListener('click', () => {
    history = [];
    updateHistoryDisplay();
});
const currentTimeButton = document.getElementById('current-time') as HTMLButtonElement;

currentTimeButton.addEventListener('click', () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    showMessage(`Current Time: ${timeString}`);
    addToHistory('Time', timeString); // Add time to history
});
const currentDayButton = document.getElementById('current-day') as HTMLButtonElement;

currentDayButton.addEventListener('click', () => {
  const now = new Date();
  const dayString = now.toLocaleDateString();
  showMessage(`Current Day: ${dayString}`);
  addToHistory('Date', dayString);
});
const currentYearButton = document.getElementById('current-year') as HTMLButtonElement;

currentYearButton.addEventListener('click', () => {
  const now = new Date();
  const year = now.getFullYear();
  showMessage(`Current Year: ${year}`);
  addToHistory('Year', year.toString());
});
const currentMonthButton = document.getElementById('current-month') as HTMLButtonElement;

currentMonthButton.addEventListener('click', () => {
  const now = new Date();
  const month = now.toLocaleString('default', { month: 'long' });
  showMessage(`Current Month: ${month}`);
  addToHistory('Month', month);
});
const squareButton = document.getElementById('square') as HTMLButtonElement;
squareButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    const squaredValue = currentValue * currentValue;
    display.value = squaredValue.toString();
    currentExpression = `${currentValue}^2`;
    currentExpressionDisplay.textContent = currentExpression; 
    addToHistory(currentExpression, squaredValue.toString());
  });
const currentSecondsButton = document.getElementById('current-seconds') as HTMLButtonElement;

currentSecondsButton.addEventListener('click', () => {
  const now = new Date();
  const seconds = now.getSeconds();
  showMessage(`Current Seconds: ${seconds}`);
  addToHistory('Seconds', seconds.toString());
});

const currentMinutesButton = document.getElementById('current-minutes') as HTMLButtonElement;
currentMinutesButton.addEventListener('click', () => {
    const now = new Date();
    const minutes = now.getMinutes();
    showMessage(`Current Minutes: ${minutes}`);
    addToHistory('Minutes', minutes.toString());
});

const currentMillisecondsButton = document.getElementById('current-milliseconds') as HTMLButtonElement;
currentMillisecondsButton.addEventListener('click', () => {
    const now = new Date();
    const milliseconds = now.getMilliseconds();
    showMessage(`Current Milliseconds: ${milliseconds}`);
    addToHistory('Milliseconds', milliseconds.toString());
});
const roundToNButton = document.getElementById('round-to-n') as HTMLButtonElement;
const roundToNInput = document.getElementById('round-to-n-input') as HTMLInputElement;

roundToNButton.addEventListener('click', () => {
  if (roundToNInput.style.display === 'none' || roundToNInput.style.display === '') {
    roundToNInput.style.display = 'inline-block'; // Show the input field
  } else {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    const decimalPlaces = parseInt(roundToNInput.value);

    if (!isNaN(currentValue) && !isNaN(decimalPlaces)) {
      const roundedValue = parseFloat(currentValue.toFixed(decimalPlaces));
      display.value = roundedValue.toString();
      currentExpression = `round(${currentValue}, ${decimalPlaces})`;
      currentExpressionDisplay.textContent = currentExpression;
      addToHistory(currentExpression, roundedValue.toString());

      roundToNInput.style.display = 'none'; // Hide the input field again
      roundToNInput.value = ''; // Clear the input field
    } else {
      showMessage('Invalid input for rounding');
    }
  }
});
const currentHourButton = document.getElementById('current-hour') as HTMLButtonElement;
currentHourButton.addEventListener('click', () => {
    const now = new Date();
    const hour = now.getHours();
    showMessage(`Current Hour: ${hour}`);
    addToHistory('Hour', hour.toString());
});
const randomNumberButton = document.getElementById('random-number') as HTMLButtonElement;
randomNumberButton.addEventListener('click', () => {
    const randomNumber = Math.random();
    (document.getElementById('display') as HTMLInputElement).value = randomNumber.toString();
    currentExpression = 'random()';
    currentExpressionDisplay.textContent = currentExpression;
    addToHistory(currentExpression, randomNumber.toString());
});
// ... (Rest of the existing code)
});
