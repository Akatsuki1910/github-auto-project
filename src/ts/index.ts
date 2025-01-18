// ... (Existing Code)

// Add factorial button
// ... (Existing factorial function)

// Existing code ...

// ... (Existing event listeners and functions)

//Existing code ...

let history: string[] = [];
const historyDisplay = document.getElementById("history") as HTMLDivElement;
let lastAnswer = 0;

function addToHistory(expression: string) {
    history.push(expression);
    historyDisplay.innerHTML = history.map(item => `<div>${item}</div>`).join('');
}

// ... other existing buttons

// ... existing code

window.addEventListener("DOMContentLoaded", () => {
  // ... existing code

  const leftParenBtn = document.getElementById("left-paren") as HTMLButtonElement;
  const rightParenBtn = document.getElementById("right-paren") as HTMLButtonElement;
  const clearHistoryBtn = document.getElementById("clearHistory") as HTMLButtonElement;

  leftParenBtn.addEventListener("click", () => {
    currentExpression += "(";
    currentExpressionDisplay.textContent = currentExpression;
  });

  rightParenBtn.addEventListener("click", () => {
    currentExpression += ")";
    currentExpressionDisplay.textContent = currentExpression;
  });

   clearHistoryBtn.addEventListener("click", () => {
        history = [];
        historyDisplay.innerHTML = ''; // Clear the history display
    });

//Rest of  existing code
});

//Existing Pow Button Code...

//Existing Square Root Button Code...

//Existing Cube Root Button Code...