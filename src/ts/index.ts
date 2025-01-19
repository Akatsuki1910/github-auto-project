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
function lcm(a: number, b: number): number {
    return (a * b) / gcd(a, b);
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
const calculateLcmBtn = document.getElementById("calculateLcm") as HTMLButtonElement;

calculateLcmBtn.addEventListener("click", () => {
    const input = prompt("Enter two numbers separated by a comma (e.g., 12,18):");
    if (input) {
        const numbers = input.split(',').map(Number);
        if (numbers.length === 2 && !isNaN(numbers[0]) && !isNaN(numbers[1])) {
            const result = lcm(numbers[0], numbers[1]);
            display.value = result.toString();
        } else {
            display.value = "Invalid input";
        }
    }
});
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
// ... (Rest of the existing event listeners)
});