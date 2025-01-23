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
const modeBtn = document.getElementById("mode") as HTMLButtonElement;
const reciprocalBtn = document.getElementById("reciprocal") as HTMLButtonElement;
const percentBtn = document.getElementById("percent") as HTMLButtonElement;
const plusminusBtn = document.getElementById("plusminus") as HTMLButtonElement;
const factorialBtn = document.getElementById("factorial") as HTMLButtonElement;
const exp2Btn = document.getElementById("exp2") as HTMLButtonElement; // New button

modeBtn.addEventListener('click', () => {
    mode = mode === "rad" ? "deg" : "rad";
    display.value = mode;
});
calculateBtn.addEventListener('click', () => {
    try {
        const result = eval(display.value);
        display.value = result.toString();
        addToHistory(display.value, result);
    } catch (error) {
        display.value = "Error";
    }
});
const sumBtn = document.getElementById("sum") as HTMLButtonElement;
sumBtn.addEventListener('click', () => {
    const numbers = prompt("Enter numbers separated by commas:");
    if (!numbers) return;

    const numArray = numbers.split(',').map(Number);
    const sum = numArray.reduce((acc, curr) => acc + curr, 0);
    display.value = sum.toString();
    addToHistory(`sum(${numbers})`, sum.toString());
});

// ... (Existing event listeners)

percentBtn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (currentValue / 100).toString();
        addToHistory(`${currentValue}%`, display.value);
    }
});

plusminusBtn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (-currentValue).toString();
    }
});

factorialBtn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        let result = 1;
        for (let i = 1; i <= currentValue; i++) {
            result *= i;
        }
        display.value = result.toString();
        addToHistory(`${currentValue}!`, display.value);
    }
});

exp2Btn.addEventListener('click', () => { // Event listener for the new button
  display.value = Math.exp(parseFloat(display.value) || 0).toString();
});

});