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
let isInverse = false; // Flag for inverse mode
let isParenthesesOpen = false;
let currentExpression = "";
const currentExpressionDisplay = document.getElementById("currentExpressionDisplay") as HTMLDivElement;

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
const calculateBtn = document.getElementById("calculate") as HTMLButtonElement;
const display = document.getElementById("display") as HTMLInputElement;
// ... other existing buttons
const cosBtn = document.getElementById("cos") as HTMLButtonElement;
const tanBtn = document.getElementById("tan") as HTMLButtonElement; // Add tan button
const asinBtn = document.getElementById("asin") as HTMLButtonElement; //asin
const atanBtn = document.getElementById("atan") as HTMLButtonElement; //atan
const roundBtn = document.getElementById("round") as HTMLButtonElement;
const floorBtn = document.getElementById("floor") as HTMLButtonElement; // floor button
const ceilBtn = document.getElementById("ceil") as HTMLButtonElement; // ceil button
const absBtn = document.getElementById("abs") as HTMLButtonElement; // Absolute value button
const randBtn = document.getElementById("rand") as HTMLButtonElement; //rand button
const expm1Btn = document.getElementById("expm1") as HTMLButtonElement;
const eBtn = document.getElementById("e") as HTMLButtonElement;
const lnBtn = document.getElementById("ln") as HTMLButtonElement; // Natural logarithm button
const percentBtn = document.getElementById("percent") as HTMLButtonElement; // Percentage button
const inverseBtn = document.getElementById("inverse") as HTMLButtonElement;
const factorialBtn = document.getElementById("factorial") as HTMLButtonElement;
const degRadBtn = document.getElementById("deg-rad") as HTMLButtonElement; // Deg/Rad Toggle
const sumBtn = document.getElementById("sum") as HTMLButtonElement;

// ... other event listeners

eBtn.addEventListener('click', () => {
    display.value = Math.E.toString();
});

cosBtn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = isInverse ? Math.acos(currentValue) : Math.cos(currentValue * (mode === "deg" ? Math.PI / 180 : 1)); // Convert to radians if in degree mode
        display.value = result.toString();
    }
});

tanBtn.addEventListener('click', () => { // Tan button functionality
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
         const result = isInverse ? Math.atan(currentValue) : Math.tan(currentValue * (mode === "deg" ? Math.PI / 180 : 1)); // Convert to radians if in degree mode
        display.value = result.toString();
    }
});
asinBtn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = Math.asin(currentValue);
        display.value = result.toString();
    }
});
atanBtn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = Math.atan(currentValue);
        display.value = result.toString();
    }
});

roundBtn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = Math.round(currentValue);
        display.value = result.toString();
    }
});

floorBtn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = Math.floor(currentValue);
        display.value = result.toString();
    }
});

ceilBtn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = Math.ceil(currentValue);
        display.value = result.toString();
    }
});

absBtn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
      const result = Math.abs(currentValue);
      display.value = result.toString();
    }
  });

randBtn.addEventListener('click', () => {
    const randValue = Math.random();
    display.value = randValue.toString();
});

expm1Btn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = Math.expm1(currentValue);
        display.value = result.toString();
    }
});

lnBtn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue) && currentValue > 0) { // Check for positive value
        const result = Math.log(currentValue);
        display.value = result.toString();
    } else {
        display.value = "Error"; // Handle invalid input
    }
});

percentBtn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = currentValue / 100;
        display.value = result.toString();
    }
});
inverseBtn.addEventListener('click', () => {
    isInverse = !isInverse; // Toggle the inverse mode flag
});

factorialBtn.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue) && currentValue >= 0 && Number.isInteger(currentValue)) {
        let result = 1;
        for (let i = 2; i <= currentValue; i++) {
            result *= i;
        }
        display.value = result.toString();
    } else {
      display.value = "Error"; // Or handle the error as needed
    }
  });

  degRadBtn.addEventListener('click', () => {
    mode = mode === "rad" ? "deg" : "rad";
    degRadBtn.textContent = mode.toUpperCase(); // Update button label
});

sumBtn.addEventListener('click', () => {
    const currentValue = display.value;
    const numbers = currentValue.split('+').map(Number).filter(isFinite);
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    display.value = sum.toString();
});

});
