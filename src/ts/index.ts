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

const calculateSumBtn = document.getElementById("calculateSum") as HTMLButtonElement;

calculateSumBtn.addEventListener("click", () => {
    const input = prompt("Enter numbers separated by commas:");
    if (input) {
        const numbers = input.split(',').map(Number).filter(num => !isNaN(num));
        const sum = numbers.reduce((a, b) => a + b, 0);
        display.value = sum.toString();
    }
});

const calculateAverageBtn = document.getElementById("calculateAverage") as HTMLButtonElement;

calculateAverageBtn.addEventListener("click", () => {
    const input = prompt("Enter numbers separated by commas:");
    if (input) {
        const numbers = input.split(',').map(Number).filter(num => !isNaN(num));
		if (numbers.length === 0) {
			display.value = "0";
			return;		
		}
        const sum = numbers.reduce((a, b) => a + b, 0);
        const average = sum / numbers.length;
        display.value = average.toString();
    }
});
const calculateProductBtn = document.getElementById("calculateProduct") as HTMLButtonElement;

calculateProductBtn.addEventListener("click", () => {
    const input = prompt("Enter numbers separated by commas:");
    if (input) {
        const numbers = input.split(',').map(Number).filter(num => !isNaN(num));
        const product = numbers.reduce((a, b) => a * b, 1);
        display.value = product.toString();
    }
});
function gcd(a: number, b: number): number {
    while (b) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
const calculateGcdBtn = document.getElementById("calculateGcd") as HTMLButtonElement;

calculateGcdBtn.addEventListener("click", () => {
    const input = prompt("Enter two numbers separated by a comma (e.g., 12,18):");
    if (input) {
        const numbers = input.split(',').map(Number);
        if (numbers.length === 2 && !isNaN(numbers[0]) && !isNaN(numbers[1])) {
            const result = gcd(numbers[0], numbers[1]);
            display.value = result.toString();
        } else {
            display.value = "Invalid input";
        }
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
const modeBtn = document.getElementById("mode") as HTMLButtonElement;
const clearEntryBtn = document.getElementById("clear-entry") as HTMLButtonElement;
const backBtn = document.getElementById("back") as HTMLButtonElement;
const roundNearestBtn = document.getElementById("round-nearest") as HTMLButtonElement;
const dateBtn = document.getElementById("date") as HTMLButtonElement;
const timeBtn = document.getElementById("time") as HTMLButtonElement;
const plusMinusBtn = document.getElementById("plusMinus") as HTMLButtonElement;
const powerOfTwoBtn = document.getElementById("powerOfTwo") as HTMLButtonElement;

  // ... existing code

    const equalsBtn = document.getElementById("equals") as HTMLButtonElement;
    const display = document.getElementById("display") as HTMLInputElement;
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
plusMinusBtn.addEventListener("click", () => {
    if (display.value) {
        display.value = (-parseFloat(display.value)).toString();
    }
});
dateBtn.addEventListener("click", () => {
  display.value = new Date().toLocaleDateString();
});
timeBtn.addEventListener("click", () => {
    display.value = new Date().toLocaleTimeString();
});
clearEntryBtn.addEventListener("click", () => {
    display.value = ""; // Clear the current entry/display
});
backBtn.addEventListener("click", () => {
  if (display.value.length > 0) {
    display.value = display.value.slice(0, -1); // Remove last character
  }
});
roundNearestBtn.addEventListener("click", () => {
    if (display.value) {
        display.value = Math.round(parseFloat(display.value)).toString();
    }
});
powerOfTwoBtn.addEventListener("click", () => {
    if(display.value) {
        const num = parseFloat(display.value);
        display.value = (num * num).toString();
    }
});

// ... (Rest of the existing event listeners)
});