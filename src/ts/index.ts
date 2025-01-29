// ... (Existing Code)

// Add negate button functionality

// Existing code ...

// ... (Existing event listeners and functions)

//Existing code ...

let history: string[] = [];
const historyDisplay = document.getElementById("history") as HTMLDivElement;
let lastAnswer = 0;
let currentExpression = "";
const currentExpressionDisplay = document.getElementById("currentExpressionDisplay") as HTMLDivElement;

let memoryValue = 0; // Initialize memory value

function addToHistory(expression: string, result: string) {
    history.push(`${expression} = ${result}`);
    updateHistoryDisplay();
    lastAnswer = parseFloat(result); // Store the last answer
}

function updateHistoryDisplay(){
    historyDisplay.innerHTML = history.map(item => `<div>${item}</div>`).join('');
}
// ... other existing buttons

// ... existing code

window.addEventListener("DOMContentLoaded", () => {
  // ... existing code
const display = document.getElementById("display") as HTMLInputElement;
// ... other existing button declarations
// ... existing event listeners
const exp10Btn = document.getElementById("exp10") as HTMLButtonElement;

exp10Btn.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        const result = Math.pow(10, currentValue);
        display.value = result.toString();
        currentExpression += `10^${currentValue}`;
        currentExpressionDisplay.textContent = currentExpression;
    } catch (error) {
        display.value = "Error";
        console.error("Error calculating 10^x:", error);
    }
});


const negateBtn = document.getElementById("negate") as HTMLButtonElement;

negateBtn.addEventListener('click', () => {
  if (display.value) {
    display.value = (parseFloat(display.value) * -1).toString();
    // Update current expression
currentExpression = display.value; 
currentExpressionDisplay.textContent = currentExpression;
  }
});

// ... (rest of the existing code)
const signBtn = document.getElementById("sign") as HTMLButtonElement;
signBtn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    const result = Math.sign(currentValue);
    display.value = result.toString();
    currentExpression += `sgn(${currentValue})`;
    currentExpressionDisplay.textContent = currentExpression;  
});
const cubeBtn = document.getElementById("cube") as HTMLButtonElement;

cubeBtn.addEventListener('click', () => {
  try {
    const currentValue = parseFloat(display.value);
    const result = Math.pow(currentValue, 3);
    display.value = result.toString();
    currentExpression += `${currentValue}^3`; // Update currentExpression
    currentExpressionDisplay.textContent = currentExpression;
  } catch (error) {
    display.value = "Error";
    console.error("Error calculating cube:", error);
  }
});
const inverseBtn = document.getElementById("inverse") as HTMLButtonElement;
inverseBtn.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        if (currentValue === 0) {
            display.value = "Error";
        } else {
            const result = 1 / currentValue;
            display.value = result.toString();
            currentExpression += `1/(${currentValue})`; // Add to current expression
            currentExpressionDisplay.textContent = currentExpression;
        }
    } catch (error) {
        display.value = "Error";
    }
});
const squareBtn = document.getElementById("square") as HTMLButtonElement;
squareBtn.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        const result = Math.pow(currentValue, 2);
        display.value = result.toString();
        currentExpression += `${currentValue}^2`;
        currentExpressionDisplay.textContent = currentExpression;
    } catch (error) {
        display.value = "Error";
        console.error("Error calculating x²:", error);
    }
});
const randomBtn = document.getElementById("random") as HTMLButtonElement;
randomBtn.addEventListener('click', () => {
    const randomNumber = Math.random();
    display.value = randomNumber.toString();
    currentExpression = randomNumber.toString();
    currentExpressionDisplay.textContent = currentExpression;  
});
const eulerBtn = document.getElementById("euler") as HTMLButtonElement;
eulerBtn.addEventListener('click', () => {
    display.value = Math.E.toString();
    currentExpression = Math.E.toString();
    currentExpressionDisplay.textContent = currentExpression;
});
const ansBtn = document.getElementById("ans") as HTMLButtonElement;
ansBtn.addEventListener('click', () => {
    display.value = lastAnswer.toString();
    currentExpression += lastAnswer.toString(); // Update currentExpression with last answer
    currentExpressionDisplay.textContent = currentExpression;
});
const modBtn = document.getElementById("mod") as HTMLButtonElement;
modBtn.addEventListener('click', () => {
currentExpression += '%';
currentExpressionDisplay.textContent = currentExpression;
});
const floorBtn = document.getElementById("floor") as HTMLButtonElement;
floorBtn.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        const result = Math.floor(currentValue);
        display.value = result.toString();
        currentExpression += `floor(${currentValue})`;
        currentExpressionDisplay.textContent = currentExpression;
    } catch (error) {
        display.value = "Error";
        console.error("Error calculating floor:", error);
    }
});

});
