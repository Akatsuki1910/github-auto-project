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
// ... (Rest of the existing event listeners)

//Power of ten button
const powerOfTenBtn = document.getElementById("powerOfTen") as HTMLButtonElement;
powerOfTenBtn.addEventListener("click", () => {
    currentExpression = `10**(${currentExpression})`;
    currentExpressionDisplay.textContent = currentExpression;
});

const clearEntryBtn = document.getElementById("clear-entry") as HTMLButtonElement;
clearEntryBtn.addEventListener("click", () => {
    currentExpression = ""; // Clear the current expression
    currentExpressionDisplay.textContent = ""; // Clear the display
});

});
