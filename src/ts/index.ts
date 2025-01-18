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

const calculateSumBtn = document.getElementById("calculateSum") as HTMLButtonElement;

calculateSumBtn.addEventListener("click", () => {
    const input = prompt("Enter numbers separated by commas:");
    if (input) {
        const numbers = input.split(',').map(Number).filter(num => !isNaN(num));
        const sum = numbers.reduce((a, b) => a + b, 0);
        display.value = sum.toString();
    }
});

  const leftParenBtn = document.getElementById("left-paren") as HTMLButtonElement;
  const rightParenBtn = document.getElementById("right-paren") as HTMLButtonElement;
  const clearHistoryBtn = document.getElementById("clearHistory") as HTMLButtonElement; 
 const memoryPlusBtn = document.getElementById("memoryPlus") as HTMLButtonElement; 
 const memoryRecallBtn = document.getElementById("memoryRecall") as HTMLButtonElement;
 const memoryClearBtn = document.getElementById("memoryClear") as HTMLButtonElement;
 const leftShiftBtn = document.getElementById("left-shift") as HTMLButtonElement;
 const rightShiftBtn = document.getElementById("right-shift") as HTMLButtonElement;
 const fibonacciBtn = document.getElementById("fibonacci") as HTMLButtonElement;
 const baseConversionBtn = document.getElementById("base-conversion") as HTMLButtonElement;
const toggleHistoryBtn = document.getElementById("toggleHistory") as HTMLButtonElement;
const copyBtn = document.getElementById("copy") as HTMLButtonElement;
const exp2Btn = document.getElementById("exp2") as HTMLButtonElement;
const cubeRootBtn = document.getElementById("cubeRoot") as HTMLButtonElement;
const tenToThePowerOfXBtn = document.getElementById("ten-to-the-power-of-x") as HTMLButtonElement;
const expm1Btn = document.getElementById("expm1") as HTMLButtonElement;
const geoMeanBtn = document.getElementById("geoMean") as HTMLButtonElement;


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
        updateHistoryDisplay(); // Clear the history display
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

baseConversionBtn.addEventListener("click", () => {
    const num = parseInt(display.value);
    const base = prompt("Enter the base (2-36):");
    if (base === null || isNaN(parseInt(base)) || parseInt(base) < 2 || parseInt(base) > 36) {
        display.value = "Invalid base";
    } else {
        display.value = num.toString(parseInt(base));
    }
});

toggleHistoryBtn.addEventListener("click", () => {
    if (historyDisplay.style.display === "none" || historyDisplay.style.display === ""){
        historyDisplay.style.display = "block";
    } else{
        historyDisplay.style.display = "none";
    }
})

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(display.value).then(() => {
    // Optional: Provide feedback to the user
    console.log("Copied to clipboard");
  }, (err) => {
    console.error('Failed to copy: ', err);
  });
});

exp2Btn.addEventListener("click", () => {
    const num = parseFloat(display.value);
    if (!isNaN(num)) {
      display.value = Math.pow(2, num).toString();
    }
});

cubeRootBtn.addEventListener("click", () => {
    const num = parseFloat(display.value);
    if (!isNaN(num)) {
        display.value = Math.cbrt(num).toString();
    }
});

tenToThePowerOfXBtn.addEventListener("click", () => {
    const num = parseFloat(display.value);
    if(!isNaN(num)){
        display.value = Math.pow(10, num).toString();
    }
})

expm1Btn.addEventListener("click", () => {
  const num = parseFloat(display.value);
  if (!isNaN(num)) {
    display.value = Math.expm1(num).toString();
  }
});

geoMeanBtn.addEventListener("click", () => {
    const input = prompt("Enter numbers separated by commas:");
    if (input) {
        const numbers = input.split(',').map(Number).filter(num => !isNaN(num) && num > 0);
        if (numbers.length === 0) {
            display.value = "Invalid input";
            return;
        }
        const product = numbers.reduce((a, b) => a * b, 1);
        const geoMean = Math.pow(product, 1 / numbers.length);
        display.value = geoMean.toString();
    }
});

});