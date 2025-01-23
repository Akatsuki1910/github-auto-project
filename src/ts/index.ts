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
const sumBtn = document.getElementById("sum") as HTMLButtonElement;
sumBtn.addEventListener('click', () => {
    const numbers = prompt("Enter numbers separated by commas:");
    if (!numbers) return;

    const numArray = numbers.split(',').map(Number);
    const sum = numArray.reduce((acc, curr) => acc + curr, 0);
    display.value = sum.toString();
    addToHistory(`sum(${numbers})`, sum.toString());
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
const roundToBtn = document.getElementById("roundTo") as HTMLButtonElement;
roundToBtn.addEventListener('click', () => {
    const n = parseFloat(prompt("Enter the number of decimal places to round to:"));
    if(isNaN(n) || !Number.isInteger(n) || n < 0) {
        display.value = "Invalid input for rounding";
        return;
    }
    const num = parseFloat(display.value);
    if (isNaN(num)) {
        display.value = "Error: Invalid input";
        return;
    }
    const result = parseFloat(num.toFixed(n)); // Parse to remove trailing zeros
    display.value = result.toString();
    addToHistory(`round(${num}, ${n})`, result.toString());
});

const truncateBtn = document.getElementById("truncate") as HTMLButtonElement;
truncateBtn.addEventListener('click', () => {
    const num = parseFloat(display.value);
    if (isNaN(num)) {
        display.value = "Error: Invalid input";
        return;
    }
    const result = Math.trunc(num);
    display.value = result.toString();
    addToHistory(`trunc(${num})`, result.toString());
});
const cubeRootBtn = document.getElementById("cubeRoot") as HTMLButtonElement;
cubeRootBtn.addEventListener('click', () => {
  const num = parseFloat(display.value);
  if (isNaN(num)) {
    display.value = "Error: Invalid input";
    return;
  }
  const result = Math.cbrt(num);
  display.value = result.toString();
  addToHistory(`cbrt(${num})`, result.toString());
});
const squaredBtn = document.getElementById("squared") as HTMLButtonElement;
squaredBtn.addEventListener('click', () => {
    const num = parseFloat(display.value);
    if (isNaN(num)) {
        display.value = "Error: Invalid input";
        return;
    }
    const result = num * num; // Or Math.pow(num, 2)
    display.value = result.toString();
    addToHistory(`sqr(${num})`, result.toString());
});
const negateBtn = document.getElementById("negate") as HTMLButtonElement;
negateBtn.addEventListener('click', () => {
    const currentValue = display.value;
    if (currentValue) {
        display.value = (parseFloat(currentValue) * -1).toString();
    }
});
const duplicateBtn = document.getElementById("duplicate") as HTMLButtonElement;
duplicateBtn.addEventListener('click', () => {
  display.value = display.value + display.value; 
});
const averageBtn = document.getElementById("average") as HTMLButtonElement;
averageBtn.addEventListener('click', () => {
    const numbers = prompt("Enter numbers separated by commas:");
    if (!numbers) return;
    const numArray = numbers.split(',').map(Number);
    const sum = numArray.reduce((a, b) => a + b, 0);
    const avg = sum / numArray.length;
    display.value = avg.toString();
    addToHistory(`avg(${numbers})`, avg.toString());
});
const minBtn = document.getElementById("min") as HTMLButtonElement;
minBtn.addEventListener('click', () => {
    const numbers = prompt("Enter numbers separated by commas:");
    if (!numbers) return;
    const numArray = numbers.split(',').map(Number);
    const min = Math.min(...numArray);
    display.value = min.toString();
    addToHistory(`min(${numbers})`, min.toString());
});

});
