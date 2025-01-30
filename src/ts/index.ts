// ... (Existing Code)

// Add negate button functionality

// Existing code ...

// ... (Existing event listeners and functions)

//Existing code ...

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

// ... existing code

window.addEventListener("DOMContentLoaded", () => {
  // ... existing code
const display = document.getElementById("display") as HTMLInputElement;
// ... other existing button declarations
// ... existing event listeners
// ... (rest of the existing code)

// Max function
// ... existing max function

//Min/Max button
// ... existing min-max function

// Average function
// ... existing avg function
const summationBtn = document.getElementById("summation") as HTMLButtonElement;
summationBtn.addEventListener('click', () => {
    try {
        const numbers = display.value.split(',').map(Number);
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        display.value = sum.toString();
        currentExpression += `sum(${numbers.join(',')})`;
        currentExpressionDisplay.textContent = currentExpression;
        addToHistory(currentExpression, display.value); // Add to history
    } catch (error) {
        display.value = "Error";
        console.error("Error calculating sum:", error);
    }
});

// ... (rest of existing code)

const calculateExpressionButton = document.getElementById("calculate-expression") as HTMLButtonElement;
calculateExpressionButton.addEventListener('click', () => {
    try {
        const result = eval(display.value); // Use eval to evaluate the expression
        display.value = result.toString();
        addToHistory(display.value, result.toString());
    } catch (error) {
        display.value = "Error";
    }
});
const parenthesesButton = document.getElementById("parentheses") as HTMLButtonElement;
parenthesesButton.addEventListener('click', () => {
    // Get the current cursor position
    const cursorPosition = display.selectionStart;
    // Insert parentheses at the cursor position
    display.value = display.value.slice(0, cursorPosition) + "()" + display.value.slice(cursorPosition);
    // Move the cursor between the parentheses
    display.selectionStart = display.selectionEnd = cursorPosition + 1;
});

const fibonacciButton = document.getElementById("fibonacci") as HTMLButtonElement;
fibonacciButton.addEventListener('click', () => {
    const n = parseInt(display.value);
    if (isNaN(n) || n < 0) {
        display.value = "Error";
    } else {
        display.value = fibonacci(n).toString();
        addToHistory(`fibonacci(${n})`, display.value);
    }
});

function fibonacci(n: number): number {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const timeButton = document.getElementById("time") as HTMLButtonElement;
timeButton.addEventListener('click', () => {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  display.value = timeString;
  addToHistory('Time', timeString);
});

const exp2Button = document.getElementById("exp2") as HTMLButtonElement;
exp2Button.addEventListener('click', () => {
    try {
      const base = parseFloat(display.value);
      if (isNaN(base)) {
        display.value = "Error";
        return;
      }
      const exponent = prompt("Enter the exponent:");
      if (exponent === null || exponent.trim() === "") {
        return; // User cancelled or entered nothing
      }
      const exp = parseFloat(exponent);
      if (isNaN(exp)) {
        display.value = "Error";
        return;
      }
      const result = Math.pow(base, exp);
      display.value = result.toString();
      addToHistory(`${base}^${exp}`, result.toString());
    } catch (error) {
      display.value = "Error";
    }
  });
const backspace2Button = document.getElementById("backspace2") as HTMLButtonElement;
backspace2Button.addEventListener('click', () => {
  display.value = display.value.slice(0,-1);
});

const randomNumberButton = document.getElementById("random-number") as HTMLButtonElement;
randomNumberButton.addEventListener('click', () => {
    const randomNumber = Math.random();
    display.value = randomNumber.toString();
    addToHistory('Random', randomNumber.toString());
});
});
