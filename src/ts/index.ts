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
let lastAnswer = 0;

function addToHistory(expression: string) {
    history.push(expression);
    historyDisplay.innerHTML = history.map(item => `<div>${item}</div>`).join('');
}

// ... other existing buttons

// ... existing negate button code ...

// ... existing multiply, divide, remainder buttons and event listeners

// ... existing e button code ...

// ... existing ans button code ...

// ... existing floor button code ...

// ... existing ceil button code ...

// ... existing random button code ...

// ... existing duplicate button code ...

// ... existing swap button code ...

// ... existing ln button code ...

// ... existing mod button code ...

//Inverse Functionality
const inverseBtn = document.getElementById("inverse") as HTMLButtonElement;
inverseBtn.addEventListener("click", () => {
  try {
    const result = 1 / eval(currentExpression);
    display.value = result.toString();
    lastAnswer = result;
    addToHistory(`1/(${currentExpression}) = ${result}`);
    currentExpression = "";
    currentExpressionDisplay.textContent = currentExpression;
  } catch (error) {
    display.value = "Error";
  }
});

// Sum Functionality
const sumBtn = document.getElementById("sum") as HTMLButtonElement;
sumBtn.addEventListener("click", () => {
  try {
    const numbers = currentExpression.split('+').map(Number);
    const result = numbers.reduce((a, b) => a + b, 0);
    display.value = result.toString();
    lastAnswer = result;
    addToHistory(`sum(${currentExpression}) = ${result}`);
    currentExpression = "";
    currentExpressionDisplay.textContent = currentExpression;
  } catch (error) {
    display.value = "Error";
  }
});

});

//Existing Pow Button Code...

//Existing Square Root Button Code...

//Existing Cube Root Button Code...
