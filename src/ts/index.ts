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

// ... existing functions for calculations (sum, average, product)

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
});
