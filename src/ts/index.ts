// ... (Existing code)
const display = document.getElementById("display") as HTMLInputElement;
let currentInput = "";
let currentExpression = "";
const currentExpressionDisplay = document.getElementById(
  "currentExpressionDisplay",
) as HTMLDivElement;
const historyDiv = document.getElementById("history") as HTMLDivElement;
const historyArr: string[] = [];
let lastAnswer = 0;
let memoryValue = 0; 

window.addEventListener("DOMContentLoaded", () => {
  // existing code
  // ... (Other button event listeners)

    // ... other button listeners

    const leftParenButton = document.getElementById("left-paren") as HTMLButtonElement;
    leftParenButton.addEventListener("click", () => {
        currentInput += "(";
        display.value = currentInput;
    });

    const rightParenButton = document.getElementById("right-paren") as HTMLButtonElement;
    rightParenButton.addEventListener("click", () => {
        currentInput += ")";
        display.value = currentInput;
    });
  const eButton = document.getElementById("e") as HTMLButtonElement;
  eButton.addEventListener("click", () => {
    currentInput += "Math.E";
    display.value = currentInput;
  });
  // ... (Other button event listeners)

  // ... existing code

  const tanButton = document.getElementById("tan") as HTMLButtonElement;
  tanButton.addEventListener("click", () => {
    currentInput += "Math.tan(";
    display.value = currentInput;
  });

  const cubeButton = document.getElementById("cube") as HTMLButtonElement;
  cubeButton.addEventListener("click", () => {
    try {
        const num = parseFloat(currentInput);
        currentInput = Math.pow(num,3).toString();

        display.value = currentInput;
    } catch (error) {
        console.error("Error calculating cube:", error);
        display.value = "Error";
    }
});
const maxButton = document.getElementById("max") as HTMLButtonElement;
maxButton.addEventListener("click", () => {
currentInput += "Math.max(";
display.value = currentInput;
});
const minButton = document.getElementById("min") as HTMLButtonElement;
minButton.addEventListener("click", () => {
    currentInput += "Math.min(";
    display.value = currentInput;
});

});

// ... (rest of the code)