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

// ... existing functions for calculations (sum, average)
const productBtn = document.getElementById("product") as HTMLButtonElement;
productBtn.addEventListener("click", () => {
  const numStr = display.value;
  const nums = numStr.split("*").map(Number);
  if (nums.some(isNaN)) {
    display.value = "Invalid input";
  } else {
    const product = nums.reduce((a, b) => a * b, 1);
    display.value = product.toString();
    addToHistory(nums.join(" * "), product.toString());
  }
});

const toggleScientificBtn = document.getElementById("toggleScientific") as HTMLButtonElement;
let isScientificMode = false; // Flag to track scientific mode

toggleScientificBtn.addEventListener("click", () => {
  isScientificMode = !isScientificMode; // Toggle the mode

  // Select all scientific buttons (you'll need to add appropriate IDs or classes to these buttons)
  const scientificButtons = document.querySelectorAll('.scientific');

  // Toggle their visibility based on the mode
  scientificButtons.forEach((button) => {
    (button as HTMLButtonElement).style.display = isScientificMode ? 'inline-block' : 'none';
  });
});
//Base Conversion
// ... existing base conversion code

// ... existing trigonometric function code

// ... existing other functions
const floorBtn = document.getElementById("floor") as HTMLButtonElement;
floorBtn.addEventListener("click", () => {
    const num = parseFloat(display.value);
    if (isNaN(num)) {
        display.value = "Invalid input";
    } else {
        display.value = Math.floor(num).toString();
        addToHistory(`floor(${num})`, Math.floor(num).toString());
    }
});

const ceilBtn = document.getElementById("ceil") as HTMLButtonElement;
ceilBtn.addEventListener("click", () => {
    const num = parseFloat(display.value);
    if (isNaN(num)) {
        display.value = "Invalid input";
    } else {
        display.value = Math.ceil(num).toString();
        addToHistory(`ceil(${num})`, Math.ceil(num).toString());
    }
});

const absBtn = document.getElementById("abs") as HTMLButtonElement;
absBtn.addEventListener("click", () => {
    const num = parseFloat(display.value);
    if (isNaN(num)) {
        display.value = "Invalid input";
    } else {
        display.value = Math.abs(num).toString();
        addToHistory(`abs(${num})`, Math.abs(num).toString());
    }
});

const sumBtn = document.getElementById("sum") as HTMLButtonElement;
sumBtn.addEventListener("click", () => {
  const numStr = display.value;
  const nums = numStr.split("\+").map(Number);
  if (nums.some(isNaN)) {
    display.value = "Invalid input";
  } else {
    const sum = nums.reduce((a, b) => a + b, 0);
    display.value = sum.toString();
    addToHistory(nums.join(" + "), sum.toString());
  }
});
const avgBtn = document.getElementById("average") as HTMLButtonElement;
avgBtn.addEventListener("click", () => {
    const numStr = display.value;
    const nums = numStr.split("\+").map(Number);
    if (nums.some(isNaN)) {
        display.value = "Invalid input";
    } else {
        const sum = nums.reduce((a, b) => a + b, 0);
        const average = sum / nums.length;
        display.value = average.toString();
        addToHistory(nums.join(" + "), average.toString());
    }
});

const squareBtn = document.getElementById("square") as HTMLButtonElement;
squareBtn?.addEventListener("click", () => {
  const num = parseFloat(display.value);
  if (isNaN(num)) {
    display.value = "Invalid input";
  } else {
    const result = num * num; // Calculate square
    display.value = result.toString();
    addToHistory(`${num}²`, result.toString()); // Add to history
  }
});

});
