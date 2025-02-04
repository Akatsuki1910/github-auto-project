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
let memoryValue = 0; // Added memory functionality

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

  const memoryStoreButton = document.getElementById("memory-store") as HTMLButtonElement;
  memoryStoreButton.addEventListener("click", () => {
    try {
      memoryValue = eval(currentInput);
    } catch (error) {
      display.value = "Error";
    }
  });

  const memoryRecallButton = document.getElementById("memory-recall") as HTMLButtonElement;
  memoryRecallButton.addEventListener("click", () => {
    currentInput += memoryValue.toString();
    display.value = currentInput;
  });
});

// ... (rest of the code)