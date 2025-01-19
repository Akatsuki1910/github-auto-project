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

// ... existing functions for calculations (sum, average, product, gcd, lcm)

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

const copyBtn = document.getElementById("copy") as HTMLButtonElement;
const display = document.getElementById("display") as HTMLInputElement;
copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(display.value).then(() => {
        alert("Copied to clipboard!");
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
});

const equalsBtn = document.getElementById("equals") as HTMLButtonElement;
let currentExpression = "";
const currentExpressionDisplay = document.getElementById("currentExpressionDisplay") as HTMLDivElement;

equalsBtn.addEventListener("click", () => {
    try {
        const result = eval(currentExpression);
        display.value = result.toString();
        addToHistory(currentExpression, result.toString()); // Add result to history
        lastAnswer = result;
        currentExpression = "";
        currentExpressionDisplay.textContent = currentExpression; // Added this to clear the display
    } catch (error) {
         display.value = "Error";
    }
});
const sinBtn = document.getElementById("sin") as HTMLButtonElement;  // Get the sine button element
sinBtn.addEventListener("click", () => {  // Add an event listener
  // Assuming currentExpression is a number (you might need to parse it)
  currentExpression = isNaN(Number(currentExpression))
    ? "Math.sin(" + currentExpression + ")"
    : Math.sin(Number(currentExpression)).toString();
  currentExpressionDisplay.textContent = currentExpression; // Update the display
});

// ... existing cos, tan, round, abs buttons

const inverseBtn = document.getElementById("inverse") as HTMLButtonElement;
inverseBtn.addEventListener("click", () => {
    try {
        const currentValue = parseFloat(currentExpression);
        if (currentValue === 0) {
            display.value = "Error: Division by zero";
        } else {
            currentExpression = (1 / currentValue).toString();
            currentExpressionDisplay.textContent = currentExpression;
        }
    } catch (error) {
        display.value = "Error";
    }
});

const clearEntryBtn = document.getElementById("clear-entry") as HTMLButtonElement;
clearEntryBtn.addEventListener("click", () => {
  display.value = "0"; // Or clear the current input (display.value = "")
});
const squareBtn = document.getElementById("square") as HTMLButtonElement;
squareBtn.addEventListener("click", () => {
    try {
        const currentValue = parseFloat(currentExpression);
        currentExpression = (currentValue * currentValue).toString();
        currentExpressionDisplay.textContent = currentExpression;
    } catch (error) {
        display.value = "Error";
    }
});
const cuberootBtn = document.getElementById("cuberoot") as HTMLButtonElement;
cuberootBtn.addEventListener("click", () => {
    try {
        const currentValue = parseFloat(currentExpression);
        currentExpression = Math.cbrt(currentValue).toString();
        currentExpressionDisplay.textContent = currentExpression;
    } catch (error) {
        display.value = "Error";
    }
});
const randomBtn = document.getElementById("random") as HTMLButtonElement;
randomBtn.addEventListener("click", () => {
    currentExpression = Math.random().toString();
    currentExpressionDisplay.textContent = currentExpression;
});
const modeBtn = document.getElementById("mode") as HTMLButtonElement;
modeBtn.addEventListener("click", () => {
  mode = mode === "rad" ? "deg" : "rad";
  modeBtn.textContent = mode === "rad" ? "rad" : "deg"; // Update button text
});

const floorBtn = document.getElementById("floor") as HTMLButtonElement;
floorBtn.addEventListener("click", () => {
    try {
        currentExpression = `Math.floor(${currentExpression})`;
        currentExpressionDisplay.textContent = currentExpression;
    } catch (error) {
        display.value = "Error";
    }
});

const maxBtn = document.getElementById("max") as HTMLButtonElement;
maxBtn.addEventListener("click", () => {
    try {
        const numbers = currentExpression.split(',').map(Number);
        currentExpression = Math.max(...numbers).toString();
        currentExpressionDisplay.textContent = currentExpression;
    } catch (error) {
        display.value = "Error";
    }
});
const sumBtn = document.getElementById("sum") as HTMLButtonElement;
sumBtn.addEventListener("click", () => {
    try {
        const numbers = currentExpression.split(',').map(Number);
        const sum = numbers.reduce((a, b) => a + b, 0);
        currentExpression = sum.toString();
        currentExpressionDisplay.textContent = currentExpression;
    } catch (error) {
        display.value = "Error";
    }
});

const geoMeanBtn = document.getElementById("geoMean") as HTMLButtonElement;
geoMeanBtn.addEventListener("click", () => {
  try {
    const numbers = currentExpression.split(',').map(Number);
    const product = numbers.reduce((a, b) => a * b, 1);
    currentExpression = Math.pow(product, 1 / numbers.length).toString();
    currentExpressionDisplay.textContent = currentExpression;
  } catch (error) {
    display.value = "Error";
  }
});

const minBtn = document.getElementById("min") as HTMLButtonElement;
minBtn.addEventListener("click", () => {
    try {
        const numbers = currentExpression.split(',').map(Number);
        currentExpression = Math.min(...numbers).toString();
        currentExpressionDisplay.textContent = currentExpression; // Update the display
    } catch (error) {
        display.value = "Error";
    }
});
const avgBtn = document.getElementById("average") as HTMLButtonElement;
avgBtn.addEventListener("click", () => {
    try {
        const numbers = currentExpression.split(',').map(Number);
        const sum = numbers.reduce((a, b) => a + b, 0);
        currentExpression = (sum/numbers.length).toString();
        currentExpressionDisplay.textContent = currentExpression; // Update the display
    } catch (error) {
        display.value = "Error";
    }
});
const eBtn = document.getElementById("e") as HTMLButtonElement;
eBtn.addEventListener("click", () => {
    currentExpression += Math.E.toString();
    currentExpressionDisplay.textContent = currentExpression;
});
// ... (Rest of the existing event listeners)
});
