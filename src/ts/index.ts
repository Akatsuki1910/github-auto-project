// ... (Existing code)

const display = document.getElementById("display") as HTMLInputElement;
let currentInput = "";
let currentExpression = "";
const currentExpressionDisplay = document.getElementById("currentExpressionDisplay") as HTMLDivElement;
const historyDiv = document.getElementById("history") as HTMLDivElement;
let history: string[] = [];
let parenthesisOpen = false;
let lastAnswer = 0;
let memory = 0;

// ... (Other existing code)

window.addEventListener("DOMContentLoaded", () => {
    // ... existing code

    // ... (rest of the existing code)

    const signChangeButton = document.getElementById("sign-change") as HTMLButtonElement;
    signChangeButton.addEventListener("click", () => {
        const num = parseFloat(display.value);
        if (!isNaN(num)) {
            display.value = (-num).toString();
            currentInput = (-num).toString();
            displayMessage("Sign changed");
        } else {
            displayMessage("Invalid input for sign change");
        }
    });

    const lnButton = document.getElementById("ln") as HTMLButtonElement;
    lnButton.addEventListener("click", () => {
        const num = parseFloat(display.value);
        if (!isNaN(num) && num > 0) {
            const result = Math.log(num);
            display.value = result.toString();
            currentInput = result.toString();
            currentExpression = `ln(${num})`;
            currentExpressionDisplay.textContent = currentExpression;
            history.push(`${currentExpression} = ${result}`);
            updateHistory();
            lastAnswer = result;        
        } else {
            displayMessage("Invalid input for natural logarithm (ln)");
        }
    });
    // ... existing event listeners for squared, cubed, etc.
});

function displayMessage(message: string) {
    // ... (existing code)
}

function updateHistory() {
  historyDiv.innerHTML = ""; // Clear existing history
  history.forEach(item => {
    const p = document.createElement("p");
    p.textContent = item;
    historyDiv.appendChild(p);
  });
}

// ... (Existing functions like factorial)
