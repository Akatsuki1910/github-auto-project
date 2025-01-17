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

//Existing code ...
});

//Existing Pow Button Code...

//Existing Square Root Button Code...

//Existing Cube Root Button Code...

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
const divideBtn = document.getElementById("divide") as HTMLButtonElement;
divideBtn.addEventListener("click", () => {
    currentExpression += '/';
    currentExpressionDisplay.textContent = currentExpression;
});

const remainderBtn = document.getElementById("remainder") as HTMLButtonElement;
remainderBtn.addEventListener("click", () => {
  currentExpression += '%';
  currentExpressionDisplay.textContent = currentExpression;
});

