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
       const duplicateButton = document.getElementById("duplicate") as HTMLButtonElement;
    duplicateButton.addEventListener('click', () => {
        currentInput = currentInput.concat(currentInput);
        display.value = currentInput;
    });
    // ... other event listeners
    // ... other event listeners
    const lnButton = document.getElementById("ln") as HTMLButtonElement;
    lnButton.addEventListener('click', () => {
        try {
            const num = parseFloat(currentInput);
            currentInput = Math.log(num).toString();
            display.value = currentInput;
        } catch (error) {
            display.value = "Error";
        }
    });

    const exitButton = document.getElementById("exit") as HTMLButtonElement;
    exitButton.addEventListener('click',()=>{
        window.close();
    })

    // ... other event listeners
    const nthRootButton = document.getElementById("nth-root") as HTMLButtonElement;
    nthRootButton.addEventListener('click', () => {
      if (currentExpression.length > 0 && currentInput.length > 0) {
        try {
          const base = parseFloat(currentInput);
          currentExpression = `Math.pow(${currentExpression}, 1/${base})`;
          currentInput = eval(currentExpression).toString();
          display.value = currentInput;
          currentExpression = currentInput;
        } catch (error) {
          display.value = "Error";
        }
      }
    });
        const expm1Button = document.getElementById("expm1") as HTMLButtonElement;
    expm1Button.addEventListener('click', () => {
        try {
            currentInput = Math.expm1(parseFloat(currentInput)).toString();
            display.value = currentInput;
        } catch (error) {
            display.value = "Error";
        }
    });

    // ... existing event listeners
});
