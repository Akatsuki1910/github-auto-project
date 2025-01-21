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
});