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
// ... (Existing functions)

const cubeBtn = document.getElementById("cube") as HTMLButtonElement;
cubeBtn?.addEventListener("click", () => {
  const num = parseFloat(display.value);
  if (isNaN(num)) {
    display.value = "Invalid input";
  } else {
    const result = num * num * num; // Calculate cube
    display.value = result.toString();
    addToHistory(`${num}³`, result.toString()); // Add to history
  }
});
const modBtn = document.getElementById("mod") as HTMLButtonElement;
modBtn.addEventListener("click", () => {
    const expression = display.value;
    try {
        const result = eval(expression); // Use eval for simplicity (consider security implications)
        display.value = result.toString();
        addToHistory(`mod(${expression})`, result.toString());
    } catch (error) {
        display.value = "Error";
    }
});

// Reciprocal
const reciprocalBtn = document.getElementById("reciprocal") as HTMLButtonElement;
reciprocalBtn.addEventListener("click", () => {
    const num = parseFloat(display.value);
    if (isNaN(num) || num === 0) {
        display.value = "Error"; // Handle division by zero
    } else {
        display.value = (1 / num).toString();
    }
});

//Sum Feature: sum button
const sumBtn = document.getElementById("sum") as HTMLButtonElement;
sumBtn.addEventListener("click", () => {
    const numStr = display.value;
    const nums = numStr.split("+").map(Number); // Split by '+' and convert to numbers
    if (nums.some(isNaN)) { //check if any value is not valid number
      display.value = "Invalid input"; //sets the error message
    } else {
      const sum = nums.reduce((a, b) => a + b, 0); // Calculate sum
      display.value = sum.toString();
      addToHistory(nums.join(" + "), sum.toString());
    }
});

const roundBtn = document.getElementById("round") as HTMLButtonElement;
roundBtn.addEventListener("click", () => {
    const num = parseFloat(display.value);
    if (!isNaN(num)) {
        display.value = Math.round(num).toString();
    }
});

// Min Feature: min button
const minBtn = document.getElementById("min") as HTMLButtonElement;
minBtn.addEventListener("click", () => {
    const numStr = display.value;
    const nums = numStr.split("+").map(Number); 
    if (nums.some(isNaN)) {
      display.value = "Invalid input";
    } else {
      const min = Math.min(...nums);
      display.value = min.toString();
      addToHistory(`min(${nums.join(", ")})`, min.toString());
    }
});

// Max feature: max button
const maxBtn = document.getElementById("max") as HTMLButtonElement;
maxBtn.addEventListener("click", () => {
  const numStr = display.value;
  const nums = numStr.split("+").map(Number);
  if (nums.some(isNaN)) {
    display.value = "Invalid input";
  } else {
    const max = Math.max(...nums);
    display.value = max.toString();
    addToHistory(`max(${nums.join(", ")})`, max.toString());
  }
});

});
