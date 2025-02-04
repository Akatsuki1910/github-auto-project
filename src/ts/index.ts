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

  const factorialButton = document.getElementById(
    "factorial",
  ) as HTMLButtonElement;
  factorialButton.addEventListener("click", () => {
    const currentValue = parseFloat(display.value);
    if (
      !isNaN(currentValue) &&
      currentValue >= 0 &&
      Number.isInteger(currentValue)
    ) {
      const result = factorial(currentValue);
      display.value = result.toString();
      currentInput = result.toString();
      currentExpression = `${currentValue}!`;
      currentExpressionDisplay.textContent = currentExpression;
      historyArr.push(`${currentExpression} = ${result}`);
      updateHistory();
      lastAnswer = result;
    } else {
      displayMessage("Invalid input for factorial");
    }
  });

    const ansButton = document.getElementById("ans") as HTMLButtonElement;
    ansButton.addEventListener("click", () => {
      currentInput += lastAnswer;
      display.value = currentInput;
    });

    const powerButton = document.getElementById("power") as HTMLButtonElement;
    powerButton.addEventListener("click", () => {
      currentInput += "^";
      display.value = currentInput;    
    });

});

function factorial(n: number): number {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

function displayMessage(message: string) {
  const messageContainer = document.getElementById(
    "message-container",
  ) as HTMLDivElement;
  messageContainer.textContent = message;
  setTimeout(() => {
    messageContainer.textContent = "";
  }, 3000);
}

function updateHistory() {
  historyDiv.innerHTML = "";
  historyArr.forEach((item) => {
    const p = document.createElement("p");
    p.textContent = item;
    historyDiv.appendChild(p);
  });
}
