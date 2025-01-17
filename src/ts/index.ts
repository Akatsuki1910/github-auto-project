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

const eBtn = document.getElementById("e") as HTMLButtonElement;
eBtn.addEventListener("click", () => {
    currentExpression += Math.E;
    currentExpressionDisplay.textContent = currentExpression;
});

const ansBtn = document.getElementById("ans") as HTMLButtonElement;
ansBtn.addEventListener("click", () => {
    currentExpression += lastAnswer;
    currentExpressionDisplay.textContent = currentExpression;
});
//Floor Functionality
const floorBtn = document.getElementById("floor") as HTMLButtonElement;
floorBtn?.addEventListener("click", () => {
    try {
        const result = Math.floor(eval(currentExpression));
        display.value = result.toString();
        lastAnswer = result;
        addToHistory(`${currentExpression} = ${result}`);
        currentExpression = "";
        currentExpressionDisplay.textContent = currentExpression;
    }
    catch (error) {
        display.value = "Error";
    }
});

//Ceil Functionality
const ceilBtn = document.getElementById("ceil") as HTMLButtonElement;
ceilBtn?.addEventListener("click", () => {
    try {
        const result = Math.ceil(eval(currentExpression));
        display.value = result.toString();
        lastAnswer = result;
        addToHistory(`${currentExpression} = ${result}`);
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