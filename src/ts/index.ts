// ... (Existing Code)

// ... existing variables and buttons
// ... existing event listeners
// ... existing functions (cube, inverse, round, etc)

// ... (Existing Code)

// ... existing functions

window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code and variables)
    // ... (Existing buttons)
    // ... existing variables
    // ... existing code
 // Add factorial button
    // ... existing functions

// Add factorial button
// ... (Existing factorial function)

// Existing code ...

// ... (Existing event listeners and functions)

const powBtn = document.getElementById("pow") as HTMLButtonElement;

powBtn.addEventListener("click", () => {
  const base = parseFloat(display.value);
  if (!isNaN(base)) {
    const exponent = parseFloat(prompt("Enter exponent:") || "0");
    if (!isNaN(exponent)) {
      const result = Math.pow(base, exponent);
      display.value = result.toString();
      currentExpression = `${base}^${exponent}`;
      currentExpressionDisplay.textContent = currentExpression;
      addToHistory(`${base}^${exponent}=${result}`); // Add this line
    }
     else {
      display.value = "Invalid exponent";
    }
  }
});
const squareRootBtn = document.getElementById("squareRoot") as HTMLButtonElement;
squareRootBtn.addEventListener("click", () => {
    const num = parseFloat(display.value);
    if (!isNaN(num)) {
        if (num < 0) {
            display.value = "Invalid input";
        } else {
            const result = Math.sqrt(num);
            display.value = result.toString();
            currentExpression = `√(${num})`;  // Update current expression
            currentExpressionDisplay.textContent = currentExpression;
            addToHistory(`√(${num})=${result}`); // Add this line
        }
    }
});

const cbrtBtn = document.getElementById("cuberoot") as HTMLButtonElement;
cbrtBtn.addEventListener("click", () => {
    const num = parseFloat(display.value);
    if (!isNaN(num)) {
      const result = Math.cbrt(num);
      display.value = result.toString();
      currentExpression = `∛(${num})`; // Update current expression for cube root
      currentExpressionDisplay.textContent = currentExpression;
      addToHistory(`∛(${num})=${result}`); // Add this line
    }
});

let history: string[] = [];
const historyDisplay = document.getElementById("history") as HTMLDivElement;

function addToHistory(expression: string) {
    history.push(expression);
    historyDisplay.innerHTML = history.map(item => `<div>${item}</div>`).join('');
}

const multiplyBtn = document.getElementById("multiply") as HTMLButtonElement;
multiplyBtn.addEventListener("click", () => {
    currentExpression += '*';
    currentExpressionDisplay.textContent = currentExpression;
});
//Existing code ...
});
