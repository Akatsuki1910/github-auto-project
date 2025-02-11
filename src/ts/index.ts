// ... (Existing code)
const display = document.getElementById("display") as HTMLInputElement;
let currentInput = "";
let currentExpression = "";
const currentExpressionDisplay = document.getElementById("currentExpressionDisplay") as HTMLDivElement;
const historyDiv = document.getElementById("history") as HTMLDivElement;
const historyArr: string[] = [];
let lastAnswer = 0;
let memoryValue = 0;
let displayColor = "black";

window.addEventListener("DOMContentLoaded", () => {
    // ... existing code

    const toggleDisplayColorButton = document.getElementById("toggle-display-color") as HTMLButtonElement;
    toggleDisplayColorButton.addEventListener('click', () => {
        displayColor = displayColor === "black" ? "red" : "black";
        display.style.color = displayColor;
    });

    // ... other existing event listeners
    //Added Inverse Functionality
    const inverseButton = document.getElementById("inverse") as HTMLButtonElement;
    inverseButton.addEventListener('click', () => {
        try {
            const result = 1 / parseFloat(currentInput);
            currentInput = result.toString();
            display.value = currentInput;
        } catch (error) {
            display.value = "Error";
        }
    });

    //Round Functionality
    const roundButton = document.getElementById("round") as HTMLButtonElement;
    roundButton.addEventListener('click', () => {
      try {
        const result = Math.round(parseFloat(currentInput));
        currentInput = result.toString();
        display.value = currentInput;
      } catch (error) {
        display.value = "Error";
      }
    });

        const openParenButton = document.getElementById("open-paren") as HTMLButtonElement;
    // ... (rest of the code)
});