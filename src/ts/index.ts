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

let history: string[] = [];
const historyDisplay = document.getElementById("history") as HTMLDivElement;

function addToHistory(expression: string) {
    history.push(expression);
    historyDisplay.innerHTML = history.map(item => `<div>${item}</div>`).join('');
}

// ... other existing buttons

const negateBtn = document.getElementById("negate") as HTMLButtonElement;
negateBtn.addEventListener("click", () => {
  if (currentExpression) {
    if (currentExpression.startsWith("-")) {
      currentExpression = currentExpression.substring(1);
    } else {
      currentExpression = "-" + currentExpression;
    }
    currentExpressionDisplay.textContent = currentExpression;
  }
});

// ... existing multiply, divide, remainder buttons and event listeners
});

//Existing Pow Button Code...

//Existing Square Root Button Code...

//Existing Cube Root Button Code...

