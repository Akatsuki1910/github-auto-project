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
const sumButton = document.getElementById('sum') as HTMLButtonElement;
sumButton.addEventListener('click', () => {
    const currentValue = (document.getElementById('display') as HTMLInputElement).value;
    const numbers = currentValue.split('+').map(Number).filter(num => !isNaN(num)); //added filter
    if (numbers.length > 0) {
        const result = numbers.reduce((sum, num) => sum + num, 0);
        (document.getElementById('display') as HTMLInputElement).value = result.toString();
        showMessage(`Sum of numbers: ${result}`);
        addToHistory(`Sum(${currentValue})`, result.toString()); //Fixed history
    } else{
        showMessage("Invalid input for Sum operation")
    }
});

const averageButton = document.getElementById('average') as HTMLButtonElement;
averageButton.addEventListener('click', () => {
  const currentValue = (document.getElementById('display') as HTMLInputElement).value;
  const numbers = currentValue.split('+').map(Number).filter(num => !isNaN(num));
  if (numbers.length > 0) {
    const sum = numbers.reduce((total, num) => total + num, 0);
    const average = sum / numbers.length;
    (document.getElementById('display') as HTMLInputElement).value = average.toString();
    showMessage(`Average of numbers: ${average}`);
    addToHistory(`Avg(${currentValue})`, average.toString());
  } else {
    showMessage("Invalid input for Average operation");
  }
});

const minButton = document.getElementById('min') as HTMLButtonElement;
minButton.addEventListener('click', () => {
    const currentValue = (document.getElementById('display') as HTMLInputElement).value;
    const numbers = currentValue.split(',').map(Number).filter(num => !isNaN(num));
    if (numbers.length > 0) {
        const min = Math.min(...numbers); // Using spread syntax
        (document.getElementById('display') as HTMLInputElement).value = min.toString();
        showMessage(`Minimum of numbers: ${min}`);
        addToHistory(`Min(${currentValue})`, min.toString());
    } else {
        showMessage("Invalid input for Min operation");
    }
});

const maxButton = document.getElementById('max') as HTMLButtonElement;
maxButton.addEventListener('click', () => {
    const currentValue = (document.getElementById('display') as HTMLInputElement).value;
    const numbers = currentValue.split(',').map(Number).filter(num => !isNaN(num));
    if (numbers.length > 0) {
        const max = Math.max(...numbers); // Using spread syntax
        (document.getElementById('display') as HTMLInputElement).value = max.toString();
        showMessage(`Maximum of numbers: ${max}`);
        addToHistory(`Max(${currentValue})`, max.toString());
    } else {
        showMessage("Invalid input for Max operation");
    }
});

});
