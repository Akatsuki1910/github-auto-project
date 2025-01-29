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
const eBtn = document.getElementById("e") as HTMLButtonElement;

//Euler's number button
eBtn.addEventListener('click', () => {
    display.value += Math.E;
    currentExpression += Math.E;
    currentExpressionDisplay.textContent = currentExpression;
});
const reciprocalBtn = document.getElementById("reciprocal") as HTMLButtonElement;
const squared2Btn = document.getElementById("squared2") as HTMLButtonElement; // Get x^2 button
const exp2Btn = document.getElementById("exp2") as HTMLButtonElement; // Get 2^x button
const cubeRootBtn = document.getElementById("cube-root") as HTMLButtonElement;
const signChangeBtn = document.getElementById("signChange") as HTMLButtonElement;
const percentageBtn = document.getElementById("percentage") as HTMLButtonElement;
const exitBtn = document.getElementById("exit") as HTMLButtonElement;
const squareRootBtn = document.getElementById("squareRoot") as HTMLButtonElement;
const historyToggleBtn = document.getElementById("history-toggle") as HTMLButtonElement;
const plusMinusBtn = document.getElementById("plusMinus") as HTMLButtonElement;

percentageBtn.addEventListener('click', () => {
    // ... (percentageBtn logic)
});

squareRootBtn.addEventListener('click', () => {
    // ... (squareRootBtn logic)
});

reciprocalBtn.addEventListener('click', () => {
    // ... (reciprocalBtn logic)
});

squared2Btn.addEventListener('click', () => {
    // ... (squared2Btn logic)
});

exp2Btn.addEventListener('click', () => {
    // ... (exp2Btn logic)
});

cubeRootBtn.addEventListener('click', () => {
    // ... (cubeRootBtn logic)
});

signChangeBtn.addEventListener('click', () => {
    // ... (signChangeBtn logic)
});
exitBtn.addEventListener('click', () => {
    // ... (exitBtn logic)
});

historyToggleBtn.addEventListener('click', () => {
    if (historyDisplay.style.display === "none" || historyDisplay.style.display === "") {
        historyDisplay.style.display = "block";
    } else {
        historyDisplay.style.display = "none";
    }
});

plusMinusBtn.addEventListener('click', () => {
  if (display.value) {
    display.value = (parseFloat(display.value) * -1).toString();
    // Update current expression
currentExpression = display.value; 
currentExpressionDisplay.textContent = currentExpression;
  }
});


// ... (rest of the existing code)
});
