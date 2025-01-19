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

// ... (Rest of the existing event listeners)
const lnBtn = document.getElementById("ln") as HTMLButtonElement;
lnBtn.addEventListener("click", () => {
    try {
        const currentValue = parseFloat(currentExpression);
        if (currentValue <= 0) {
            display.value = "Error: Invalid input for ln";
        } else {
            currentExpression = Math.log(currentValue).toString();
            currentExpressionDisplay.textContent = currentExpression;
        }
    } catch (error) {
        display.value = "Error";
    }
});

const ansBtn = document.getElementById("ans") as HTMLButtonElement;
ansBtn.addEventListener("click", () => {
  currentExpression += lastAnswer;
  currentExpressionDisplay.textContent = currentExpression; // Update the display
});
const parenthesesBtn = document.getElementById("parentheses") as HTMLButtonElement;
parenthesesBtn.addEventListener("click", () => {
    currentExpression += "()";
    currentExpressionDisplay.textContent = currentExpression;
});
const modBtn = document.getElementById("mod") as HTMLButtonElement;
modBtn.addEventListener("click", () => {
    currentExpression += "%";
    currentExpressionDisplay.textContent = currentExpression; 
});
const expm1Btn = document.getElementById("expm1") as HTMLButtonElement;
expm1Btn.addEventListener("click", () => {
    currentExpression = isNaN(Number(currentExpression))
    ? "Math.expm1(" + currentExpression + ")"
    : Math.expm1(Number(currentExpression)).toString();
    currentExpressionDisplay.textContent = currentExpression;
});
const duplicateBtn = document.getElementById("duplicate") as HTMLButtonElement;
duplicateBtn.addEventListener("click", () => {
    currentExpression += currentExpression; // Duplicate currentExpression
    currentExpressionDisplay.textContent = currentExpression;
});

const cubeBtn = document.getElementById("cube") as HTMLButtonElement;
cubeBtn.addEventListener("click", () => {
  currentExpression = isNaN(Number(currentExpression))
  ? "Math.pow(" + currentExpression + ", 3)"
  : Math.pow(Number(currentExpression), 3).toString();
currentExpressionDisplay.textContent = currentExpression;
});

});

