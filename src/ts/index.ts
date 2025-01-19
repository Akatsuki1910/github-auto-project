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

// ... existing functions for calculations (sum, average, product, gcd, lcm, geoMean)
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
const calculateSumBtn = document.getElementById("calculateSum") as HTMLButtonElement;

calculateSumBtn.addEventListener("click", () => {
    const input = prompt("Enter numbers separated by commas:");
    if (input) {
        const numbers = input.split(',').map(Number).filter(num => !isNaN(num));
        const sum = numbers.reduce((a, b) => a + b, 0);
        display.value = sum.toString();
    }
});

// ... (Other existing event listeners)

const currentDateBtn = document.getElementById("current-date") as HTMLButtonElement;
currentDateBtn.addEventListener("click", () => {
    const currentDate = new Date().toLocaleDateString();
    display.value = currentDate;
});

const squareRootBtn = document.getElementById("squareRoot") as HTMLButtonElement;
squareRootBtn.addEventListener("click", () => {
  const currentValue = parseFloat(display.value);
  if (!isNaN(currentValue)) {
    const result = Math.sqrt(currentValue);
    display.value = result.toString();
    addToHistory(`√(${currentValue})`, result.toString());
  } else {
    display.value = "Error";
  }
});
const calculateFactorialBtn = document.getElementById("calculateFactorial") as HTMLButtonElement;

function factorial(n: number): number {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

calculateFactorialBtn.addEventListener("click", () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue) && currentValue >= 0 && Number.isInteger(currentValue)) { // Check for valid input
        const result = factorial(currentValue);
        display.value = result.toString();
        addToHistory(`${currentValue}!`, result.toString());
    } else {
        display.value = "Error: Invalid input for factorial";
    }
});

    const equalsBtn = document.getElementById("equals") as HTMLButtonElement;
    const display = document.getElementById("display") as HTMLInputElement;
    let currentExpression = "";
    const currentExpressionDisplay = document.getElementById("currentExpressionDisplay") as HTMLDivElement;
      const exitBtn = document.getElementById("exit") as HTMLButtonElement;
const calculatorContainer = document.getElementById("calculator") as HTMLDivElement;
const toggleCalculatorBtn = document.getElementById("toggleCalculator") as HTMLButtonElement;
let calculatorVisible = true; // Initial state: calculator is visible
toggleCalculatorBtn.addEventListener("click", () => {
    calculatorVisible = !calculatorVisible;
    if (calculatorVisible) {
        calculatorContainer.style.display = "grid";
        toggleCalculatorBtn.textContent = "Hide Calculator";
    } else {
        calculatorContainer.style.display = "none";
        toggleCalculatorBtn.textContent = "Show Calculator";
    }
});
exitBtn.addEventListener("click", () => {
    window.close();
});
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
const toggleDarkModeBtn = document.getElementById("toggleDarkMode") as HTMLButtonElement;
let isDarkMode = false;

toggleDarkModeBtn.addEventListener("click", () => {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle("dark-mode", isDarkMode);
});
});