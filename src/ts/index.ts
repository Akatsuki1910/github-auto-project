// ... (Existing Code)

// Add factorial button
// ... (Existing factorial function)

// Existing code ...

// ... (Existing event listeners and functions)

//Existing code ...

let history: string[] = [];
const historyDisplay = document.getElementById("history") as HTMLDivElement;
let lastAnswer = 0;
let memory = 0;

function addToHistory(expression: string, result: string) {
    history.push(`${expression} = ${result}`);
    historyDisplay.innerHTML = history.map(item => `<div>${item}</div>`).join('');
}

// ... other existing buttons

// ... existing code

window.addEventListener("DOMContentLoaded", () => {
  // ... existing code

  const leftParenBtn = document.getElementById("left-paren") as HTMLButtonElement;
  const rightParenBtn = document.getElementById("right-paren") as HTMLButtonElement;
  const clearHistoryBtn = document.getElementById("clearHistory") as HTMLButtonElement; 
 const memoryPlusBtn = document.getElementById("memoryPlus") as HTMLButtonElement; 
 const memoryRecallBtn = document.getElementById("memoryRecall") as HTMLButtonElement;
 const memoryClearBtn = document.getElementById("memoryClear") as HTMLButtonElement;
 const leftShiftBtn = document.getElementById("left-shift") as HTMLButtonElement;
 const rightShiftBtn = document.getElementById("right-shift") as HTMLButtonElement;
 const fibonacciBtn = document.getElementById("fibonacci") as HTMLButtonElement;


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

memoryPlusBtn.addEventListener("click", () => {
    memory += parseFloat(display.value);
});

memoryRecallBtn.addEventListener("click", () => {
    currentExpression += memory.toString();
    currentExpressionDisplay.textContent = currentExpression;
});

memoryClearBtn.addEventListener("click", () => {
    memory = 0;
});
leftShiftBtn.addEventListener("click", () => {
    let num = parseInt(display.value);
    let shifted = num << 1; // Left shift operation
    display.value = shifted.toString();
  });
rightShiftBtn.addEventListener("click", () => {
    let num = parseInt(display.value);
    let shifted = num >> 1; // Right shift operation
    display.value = shifted.toString();
});
//Rest of  existing code

    const equalsBtn = document.getElementById("equals") as HTMLButtonElement;

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

//Existing Pow Button Code...

//Existing Square Root Button Code...

//Existing Cube Root Button Code...

function fibonacci(n: number): number {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

fibonacciBtn.addEventListener("click", () => {
    const n = parseInt(display.value);
    if (isNaN(n) || n < 0) {
        display.value = "Invalid input";
    } else {
        display.value = fibonacci(n).toString();
    }
});

});