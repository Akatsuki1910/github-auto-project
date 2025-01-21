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

function addToHistory(expression: string, result: string) {
    history.push(`${expression} = ${result}`);
    updateHistoryDisplay();
}

function updateHistoryDisplay(){
    historyDisplay.innerHTML = history.map(item => `<div>${item}</div>`).join('');
}
// ... other existing buttons

// ... existing code

window.addEventListener("DOMContentLoaded", () => {
  // ... existing code
 // ... existing code ...

// ... existing functions for calculations (sum)
const averageBtn = document.getElementById("average") as HTMLButtonElement;

averageBtn.addEventListener("click", () => {
    const numStr = display.value;
    const nums = numStr.split("+").map(Number); // Split by '+' and convert to numbers
    if (nums.some(isNaN)) {
        display.value = "Invalid input";
    } else {
        const sum = nums.reduce((a, b) => a + b, 0);
        const average = sum / nums.length;
        display.value = average.toString();
        addToHistory(nums.join(" + "), average.toString());
    }
});

const roundBtn = document.getElementById("round") as HTMLButtonElement;
roundBtn.addEventListener("click", () => {
    const num = parseFloat(display.value);
    if (isNaN(num)) {
        display.value = "Invalid input";
    } else {
        const result = Math.round(num);
        display.value = result.toString();
        addToHistory(`round(${num})`, result.toString());
    }
});
// ... other functions

// Absolute Value function
// ... existing code

const duplicateBtn = document.getElementById("duplicate") as HTMLButtonElement;
duplicateBtn?.addEventListener("click", () => {
    const currentValue = display.value;
    display.value = currentValue + currentValue; // Duplicates the current value
});

const cubeBtn = document.getElementById("cube") as HTMLButtonElement;
cubeBtn.addEventListener("click", () => {
  const num = parseFloat(display.value);
  if (isNaN(num)) {
    display.value = "Invalid Input";
  } else {
    const result = num * num * num;
    display.value = result.toString();
    addToHistory(`cube(${num})`, result.toString());
  }
});

const squareBtn = document.getElementById("square") as HTMLButtonElement;
squareBtn.addEventListener("click", () => {
    const num = parseFloat(display.value);
    if(isNaN(num)) {
        display.value = "Invalid Input";
    } else {
        const result = num * num;
        display.value = result.toString();
        addToHistory(`sqr(${num})`, result.toString());
    }
});
const eBtn = document.getElementById("e") as HTMLButtonElement;
eBtn.addEventListener("click", () => {
    display.value += Math.E;
});

const lnBtn = document.getElementById("ln") as HTMLButtonElement;
lnBtn.addEventListener("click", () => {
    const num = parseFloat(display.value);
    if (isNaN(num)) {
        display.value = "Invalid Input";
    } else {
        const result = Math.log(num);
        display.value = result.toString();
        addToHistory(`ln(${num})`, result.toString());
    }
});
const modBtn = document.getElementById("mod") as HTMLButtonElement;
modBtn.addEventListener("click", () => {
  display.value += "%";
});

});
