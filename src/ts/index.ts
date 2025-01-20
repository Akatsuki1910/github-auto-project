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
// Add keyboard support
document.addEventListener('keydown', (event) => {
    const key = event.key;
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.', 'Enter', 'Backspace', 'Delete','(',')'];
    if (allowedKeys.includes(key)) {
        if (key === 'Enter') {
            equalsBtn.click();
        } else if (key === 'Backspace' || key === 'Delete') {
            clearEntryBtn.click();
        } else {
            currentExpression += key;
            currentExpressionDisplay.textContent = currentExpression;
        }
    }
});
const openParenBtn = document.getElementById("openParen") as HTMLButtonElement;
openParenBtn.addEventListener("click", () => {
    currentExpression += "(";
    currentExpressionDisplay.textContent = currentExpression; 
});
const closeParenBtn = document.getElementById("closeParen") as HTMLButtonElement;
closeParenBtn.addEventListener("click", () => {
    currentExpression += ")";
    currentExpressionDisplay.textContent = currentExpression; 
});
const clearBtn = document.getElementById("clear") as HTMLButtonElement;
clearBtn.addEventListener("click", () => {
  display.value = '';
  currentExpression = '';
  currentExpressionDisplay.textContent = '';
});

// Add square root functionality
const sqrtBtn = document.getElementById("sqrt") as HTMLButtonElement;
sqrtBtn.addEventListener("click", () => {
  currentExpression += "Math.sqrt(";
  currentExpressionDisplay.textContent = currentExpression;
});

// Add percentage functionality
const percentageBtn = document.getElementById("percentage") as HTMLButtonElement;
percentageBtn.addEventListener("click", () => {
  currentExpression += "/ 100"; // Calculate percentage by dividing by 100
  currentExpressionDisplay.textContent = currentExpression;
});

const baseConverterBtn = document.getElementById("baseConverter") as HTMLButtonElement;
baseConverterBtn.addEventListener("click", () => {
    const base = prompt("Enter the base (2-36):", "10");
    if (base !== null) {
        const num = parseInt(display.value, 10); // Always parse from base 10
        display.value = num.toString(parseInt(base,10)); 
    }
});

const toggleHistoryBtn = document.getElementById("toggleHistory") as HTMLButtonElement;
toggleHistoryBtn.addEventListener("click", () => {
  if (historyDisplay.style.display === "none" || historyDisplay.style.display === "") {
    historyDisplay.style.display = "block";
  } else {
    historyDisplay.style.display = "none";
  }
});

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

// Add last answer functionality
const lastAnswerBtn = document.getElementById("lastAnswer") as HTMLButtonElement;
lastAnswerBtn.addEventListener("click", () => {
    currentExpression += lastAnswer.toString();
    currentExpressionDisplay.textContent = currentExpression;
});

// Add factorial functionality
const factorialBtn = document.getElementById("factorial") as HTMLButtonElement;

function factorial(n: number): number {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

factorialBtn.addEventListener("click", () => {
  try {
    const num = parseFloat(display.value);
    if (isNaN(num)) {
      display.value = "Error: Invalid input for factorial";
    } else {
        const result = factorial(num);
      display.value = result.toString();
      addToHistory(`${num}!`, result.toString()); // Add to history
    }

  } catch (error) {
    display.value = "Error";
  }
});

const clearAllHistoryBtn = document.getElementById("clearAllHistory") as HTMLButtonElement;

clearAllHistoryBtn.addEventListener("click", () => {
    history = []; // Clear the history array
    updateHistoryDisplay(); // Update the display to reflect the empty history
});
// Add memory functionality
const memoryPlusBtn = document.getElementById("memoryPlus") as HTMLButtonElement;
const memoryRecallBtn = document.getElementById("memoryRecall") as HTMLButtonElement;
const memoryClearBtn = document.getElementById("memoryClear") as HTMLButtonElement;

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
// Add cube root functionality
const cubeRootBtn = document.getElementById("cuberoot") as HTMLButtonElement;
cubeRootBtn.addEventListener("click", () => {
    try{
    const num = parseFloat(display.value);
    const result = Math.cbrt(num);
    display.value = result.toString();
    addToHistory(`cbrt(${num})`, result.toString());
    }catch (error) {
        display.value = "Error";
    }
});
const exitBtn = document.getElementById("exit") as HTMLButtonElement;
exitBtn.addEventListener("click", () => {
    window.close();

});
});
