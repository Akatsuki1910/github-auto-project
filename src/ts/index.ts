// ... (Existing Code)

// Add factorial button

// Existing code ...

// ... (Existing event listeners and functions)

//Existing code ...

let history: string[] = [];
const historyDisplay = document.getElementById("history") as HTMLDivElement;
let lastAnswer = 0;
let memory = 0;
let mode = "rad"; // Initialize mode to radians
let isInverse = false; // Flag for inverse mode

function addToHistory(expression: string, result: string) {
    history.push(`${expression} = ${result}`);
    updateHistoryDisplay();
    lastAnswer = parseFloat(result); // Store the last answer
}

function updateHistoryDisplay(){
    historyDisplay.innerHTML = history.map(item => `<div>${item}</div>`).join('');
}
// ... other existing buttons

// ... existing code

window.addEventListener("DOMContentLoaded", () => {
  // ... existing code
const calculateBtn = document.getElementById("calculate") as HTMLButtonElement;
const display = document.getElementById("display") as HTMLInputElement;
calculateBtn.addEventListener('click', () => {
    try {
        const result = eval(display.value);
        display.value = result.toString();
        addToHistory(display.value, result);
    } catch (error) {
        display.value = "Error";
    }
});

const currentDateBtn = document.getElementById("current-date") as HTMLButtonElement;
currentDateBtn.addEventListener("click", () => {
    const today = new Date();
    const dateString = today.toLocaleDateString();
    display.value = dateString;
});

const piBtn = document.getElementById("pi") as HTMLButtonElement;
piBtn.addEventListener('click', () => {
    display.value = Math.PI.toString();
});

const factorialBtn = document.getElementById("factorial") as HTMLButtonElement;
factorialBtn.addEventListener('click', () => {
  try {
    const num = parseFloat(display.value);
    if (isNaN(num)) {
      display.value = "Error: Invalid input";
      return;
    }
    if (num < 0) {
      display.value = "Error: Factorial not defined for negative numbers";
      return;
    }

    const result = factorial(num); 
    display.value = result.toString();
    addToHistory(`${num}!`, result);
  } catch (error) {
    display.value = "Error";
  }
});

function factorial(n: number): number {
    if (n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
  }

const powerBtn = document.getElementById("power") as HTMLButtonElement;
powerBtn.addEventListener('click', () => {
    const base = parseFloat(display.value);
    if(isNaN(base)){
        display.value = "Error: Invalid Input";
    } else {
      display.value += "**";
}
});

const logBtn = document.getElementById("log") as HTMLButtonElement;
logBtn.addEventListener('click', () => {
  try {
    const num = parseFloat(display.value);
    if (isNaN(num)) {
      display.value = "Error: Invalid input";
      return;
    }
    const result = Math.log10(num);
    display.value = result.toString();
    addToHistory(`log(${num})`, result.toString());
  } catch (error) {
    display.value = "Error";
  }
});
});
