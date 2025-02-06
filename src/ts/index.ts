// ... (Existing code)
const display = document.getElementById("display") as HTMLInputElement;
let currentInput = "";
let currentExpression = "";
const currentExpressionDisplay = document.getElementById("currentExpressionDisplay") as HTMLDivElement;
const historyDiv = document.getElementById("history") as HTMLDivElement;
const historyArr: string[] = [];
let lastAnswer = 0;
let memoryValue = 0;
let isDegreeMode = true;

window.addEventListener("DOMContentLoaded", () => {
    // existing code
    // ... (Other button event listeners)

    //Memory Features
    // ... existing memory functions

    const memoryResetButton = document.getElementById("mr") as HTMLButtonElement;
    memoryResetButton.addEventListener("click", () => {
        memoryValue = 0; // Reset memory value to 0
        display.value = "0";
        currentExpressionDisplay.textContent = ""; // Clear the current expression display
        currentInput = "";
        updateDisplay();
    });
    const toggleDarkModeButton = document.getElementById("toggle-dark-mode") as HTMLButtonElement;
    toggleDarkModeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
    });
    const currentTimButton = document.getElementById("current-time") as HTMLButtonElement;
    currentTimButton.addEventListener("click",()=>{
        const now = new Date();
        const currentTime = now.toLocaleTimeString();
        display.value = currentTime;
        currentExpressionDisplay.textContent = ""; // Clear the current expression display
        currentInput = currentTime;  //sets the current time to the input
        //No need to push to history since its not a calculation
    });
    const randomDigitButton = document.getElementById("random-digit") as HTMLButtonElement;
    randomDigitButton.addEventListener("click", () => {
        const randomDigit = Math.floor(Math.random() * 10);
        currentInput += randomDigit;
        display.value = currentInput;
    });
    const currentDateButton = document.getElementById("current-date") as HTMLButtonElement;
currentDateButton.addEventListener("click", () => {
    const now = new Date();
    const currentDate = now.toLocaleDateString();
    display.value = currentDate;
    currentExpressionDisplay.textContent = "";
    currentInput = currentDate;
});
const leftParenthesisButton = document.getElementById("left-parenthesis") as HTMLButtonElement;
leftParenthesisButton.addEventListener("click", () => {
  currentInput += "(";
  display.value = currentInput;
});

const rightParenthesisButton = document.getElementById("right-parenthesis") as HTMLButtonElement;
rightParenthesisButton.addEventListener("click", () => {
  currentInput += ")";
  display.value = currentInput;
});
const roundToNDecimalsButton = document.getElementById("round-to-n-decimals") as HTMLButtonElement;
roundToNDecimalsButton.addEventListener("click", () => {
  const n = parseInt(prompt("Enter the number of decimal places:", "2") || "2", 10);
  if (!isNaN(n)) {
    const num = parseFloat(currentInput);
    if (!isNaN(num)) {
      currentInput = num.toFixed(n);
      display.value = currentInput;
    } else {
      display.value = "Invalid Input";
    }
  } else {
    display.value = "Invalid Input for n";
  }
});
const random0To1Button = document.getElementById("random-0-to-1") as HTMLButtonElement;
random0To1Button.addEventListener("click", () => {
    currentInput = Math.random().toString();
    display.value = currentInput;
});
const random1To100Button = document.getElementById("random-1-to-100") as HTMLButtonElement;
random1To100Button.addEventListener("click", () => {
  currentInput = Math.floor(Math.random() * 100 + 1).toString();
  display.value = currentInput;
});
const invertButton = document.getElementById("invert") as HTMLButtonElement;
invertButton.addEventListener("click", () => {
    try {
        const currentValue = parseFloat(currentInput);
        if(currentValue === 0){
            display.value = "Cannot divide by zero";
        } else{
            const invertedValue = 1 / currentValue;
            currentInput = invertedValue.toString();
            display.value = currentInput;
        }
    } catch (error) {
        display.value = "Invalid Input";
    }
});
const absValueButton = document.getElementById("abs-value") as HTMLButtonElement;
absValueButton.addEventListener("click", () => {
    try {
        const currentValue = parseFloat(currentInput);
        currentInput = Math.abs(currentValue).toString();
        display.value = currentInput;
    } catch (error) {
        display.value = "Invalid Input";
    }
});

    // ... (rest of the existing code)
});
