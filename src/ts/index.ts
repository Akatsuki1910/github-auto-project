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
  const lnButton = document.getElementById("ln") as HTMLButtonElement;
  lnButton.addEventListener("click", () => {
    currentInput += "Math.log("; // Add natural log function
    display.value = currentInput;
  });
  const expButton = document.getElementById("exp") as HTMLButtonElement;
  expButton.addEventListener("click", () => {
    currentInput += "Math.exp(";
    display.value = currentInput;
  });

});

// ... (rest of the code)