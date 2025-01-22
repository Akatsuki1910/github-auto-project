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

// ... (Existing event listeners)

//Add exp button functionality
const expBtn = document.getElementById("exp") as HTMLButtonElement;
expBtn.addEventListener('click', () => {
    try {
        const num = parseFloat(display.value);
        if (isNaN(num)) {
            display.value = "Error: Invalid Input";
            return;
        }
        const result = Math.exp(num);
        display.value = result.toString();
        addToHistory(`exp(${num})`, result.toString());
    } catch (error) {
        display.value = "Error";
    }
});
const cosBtn = document.getElementById("cos") as HTMLButtonElement;
cosBtn.addEventListener('click', () => {
  try {
    const num = parseFloat(display.value);
    if (isNaN(num)) {
      display.value = "Error: Invalid Input";
      return;
    }
    const result = Math.cos(num);
    display.value = result.toString();
    addToHistory(`cos(${num})`, result.toString());
  } catch (error) {
    display.value = "Error";
  }
});

const tanBtn = document.getElementById("tan") as HTMLButtonElement;
tanBtn.addEventListener('click', () => {
    try {
      const num = parseFloat(display.value);
      if (isNaN(num)) {
        display.value = "Error: Invalid Input";
        return;
      }
      const result = Math.tan(num);
      display.value = result.toString();
      addToHistory(`tan(${num})`, result.toString());
    } catch (error) {
      display.value = "Error";
    }
  });
const roundBtn = document.getElementById("round") as HTMLButtonElement;
roundBtn.addEventListener('click', () => {
    try {
        const num = parseFloat(display.value);
        if (isNaN(num)) {
            display.value = "Error: Invalid input";
            return;
        }
        const result = Math.round(num);
        display.value = result.toString();
        addToHistory(`round(${num})`, result.toString());
    } catch (error) {
        display.value = "Error";
    }
});
const absBtn = document.getElementById("abs") as HTMLButtonElement;
absBtn.addEventListener('click', () => {
    try {
        const num = parseFloat(display.value);
        if (isNaN(num)) {
            display.value = "Error: Invalid input";
            return;
        }
        const result = Math.abs(num);
        display.value = result.toString();
        addToHistory(`abs(${num})`, result.toString());
    } catch (error) {
        display.value = "Error";
    }
});
const lnBtn = document.getElementById("ln") as HTMLButtonElement;
lnBtn.addEventListener('click', () => {
    try {
        const num = parseFloat(display.value);
        if (isNaN(num) || num <= 0) {
            display.value = "Error: Invalid input (must be > 0)";
            return;
        }
        const result = Math.log(num);
        display.value = result.toString();
        addToHistory(`ln(${num})`, result.toString());
    } catch (error) {
        display.value = "Error";
    }
});
const modBtn = document.getElementById("mod") as HTMLButtonElement;
modBtn.addEventListener('click', () => {
  display.value += '%';
});

});
