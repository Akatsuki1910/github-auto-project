// ... (Existing code)

// ... (Existing code)
const display = document.getElementById("display") as HTMLInputElement;
let currentInput = "";
let currentExpression = "";
const currentExpressionDisplay = document.getElementById(
  "currentExpressionDisplay",
) as HTMLDivElement;
const historyDiv = document.getElementById("history") as HTMLDivElement;
const history: string[] = [];
let lastAnswer = 0;

// ... (Other existing code)

window.addEventListener("DOMContentLoaded", () => {
  // ... existing code

  // ... (rest of the existing code)

  const ceilButton = document.getElementById("ceil") as HTMLButtonElement;
  ceilButton.addEventListener("click", () => {
    const num = Number.parseFloat(display.value);
    if (!isNaN(num)) {
      const result = Math.ceil(num);
      display.value = result.toString();
      currentInput = result.toString();
      currentExpression = `ceil(${num})`;
      currentExpressionDisplay.textContent = currentExpression;
      history.push(`${currentExpression} = ${result}`);
      updateHistory();
      lastAnswer = result;
    } else {
      displayMessage("Invalid input for ceil");
    }
  });

  // ... existing event listeners
});

// ... existing functions

function displayMessage(message: string) {
  // ... existing code
}

function updateHistory() {
  historyDiv.innerHTML = "";
  history.forEach((item) => {
    const p = document.createElement("p");
    p.textContent = item;
    historyDiv.appendChild(p);
  });
}
