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
const logButton = document.getElementById("log") as HTMLButtonElement;
logButton.addEventListener("click", () => {
currentInput += "Math.log10(";
display.value = currentInput;
});
const absButton = document.getElementById("abs") as HTMLButtonElement;
absButton.addEventListener("click", () => {
currentInput += "Math.abs(";
display.value = currentInput;
});
const roundButton = document.getElementById("round") as HTMLButtonElement;
roundButton.addEventListener("click", () => {
  try {
    currentInput = Math.round(eval(currentInput)).toString();
    display.value = currentInput;
  } catch (error) {
    display.value = "Error";
  }
});
const inverseButton = document.getElementById("inverse") as HTMLButtonElement;
inverseButton.addEventListener("click", () => {
  try {
    currentInput = (1 / eval(currentInput)).toString();
    display.value = currentInput;
  } catch (error) {
    display.value = "Error";
  }
});
const randButton = document.getElementById("rand") as HTMLButtonElement;
randButton.addEventListener("click", () => {
  currentInput += Math.random();
  display.value = currentInput;
});

});

// ... (rest of the code)