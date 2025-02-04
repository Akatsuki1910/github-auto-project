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

window.addEventListener("DOMContentLoaded", () => {
  // existing code 
  const signChangeButton = document.getElementById("sign-change") as HTMLButtonElement;
  signChangeButton.addEventListener("click", () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
      display.value = (-currentValue).toString();
      currentInput = display.value;
    } else {
        displayMessage("Invalid input");
    }
  });

 const sqrtButton = document.getElementById("sqrt") as HTMLButtonElement;
sqrtButton.addEventListener("click", () => {
    const num = Number.parseFloat(display.value);
    if (!isNaN(num) && num>=0) {
      const result = Math.sqrt(num);
      display.value = result.toString();
      currentInput = result.toString();
      currentExpression = `√(${num})`;
      currentExpressionDisplay.textContent = currentExpression;
      history.push(`${currentExpression} = ${result}`);
      updateHistory();
      lastAnswer = result;
    } else {
      displayMessage("Invalid input for sqrt");
    }
  });

  const toggleHistoryButton = document.getElementById("toggle-history") as HTMLButtonElement;
toggleHistoryButton.addEventListener("click", () => {
    if (historyDiv.style.display === "none") {
      historyDiv.style.display = "block";
    } else {
      historyDiv.style.display = "none";
    }
  });

  const percentButton = document.getElementById("percent") as HTMLButtonElement;
  percentButton.addEventListener("click", () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
      const result = currentValue / 100;
      display.value = result.toString();
      currentInput = result.toString();
    } else {
      displayMessage("Invalid input");
    }
  });

  const piButton = document.getElementById("pi") as HTMLButtonElement;
  piButton.addEventListener("click", () => {
    display.value = Math.PI.toString();
    currentInput = Math.PI.toString();
  });

  const squareButton = document.getElementById("square") as HTMLButtonElement;
  squareButton.addEventListener("click", () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
      const result = currentValue * currentValue;
      display.value = result.toString();
      currentInput = result.toString();
      currentExpression = `${currentValue}²`;
      currentExpressionDisplay.textContent = currentExpression;
      history.push(`${currentExpression} = ${result}`);
      updateHistory();
      lastAnswer = result;      
    } else {
      displayMessage("Invalid input");
    }
  });
});

function displayMessage(message: string) {
  const messageContainer = document.getElementById("message-container") as HTMLDivElement;
  messageContainer.textContent = message;
  setTimeout(() => {
    messageContainer.textContent = "";
  }, 3000);
}

function updateHistory() {
  historyDiv.innerHTML = "";
  history.forEach((item) => {
    const p = document.createElement("p");
    p.textContent = item;
    historyDiv.appendChild(p);
  });
}
