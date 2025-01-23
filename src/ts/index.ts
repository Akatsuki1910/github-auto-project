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
let isParenthesesOpen = false;

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

const floorBtn = document.getElementById("floor") as HTMLButtonElement;
floorBtn.addEventListener('click', () => {
    try {
        const num = parseFloat(display.value);
        if (isNaN(num)) {
            display.value = "Error: Invalid input";
            return;
        }
        const result = Math.floor(num);
        display.value = result.toString();
        addToHistory(`floor(${num})`, result.toString());
    } catch (error) {
        display.value = "Error";
    }
});

// ... (Existing event listeners)
// ... existing code ...
const ceilBtn = document.getElementById("ceil") as HTMLButtonElement;
ceilBtn.addEventListener('click', () => {
    try {
        const num = parseFloat(display.value);
        if (isNaN(num)) {
            display.value = "Error: Invalid input";
            return;
        }
        const result = Math.ceil(num);
        display.value = result.toString();
        addToHistory(`ceil(${num})`, result.toString());
    } catch (error) {
        display.value = "Error";
    }
});

});
