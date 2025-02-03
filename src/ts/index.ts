// ... (Existing code)

const display = document.getElementById("display") as HTMLInputElement;
let currentInput = "";
let currentExpression = "";
const currentExpressionDisplay = document.getElementById("currentExpressionDisplay") as HTMLDivElement;
const historyDiv = document.getElementById("history") as HTMLDivElement;
let history: string[] = [];
let parenthesisOpen = false;
let lastAnswer = 0;

// ... (Other existing code)

window.addEventListener("DOMContentLoaded", () => {
    // ... existing code
    const ansButton = document.getElementById("ans") as HTMLButtonElement;
    ansButton.addEventListener("click", () => {
        currentInput += lastAnswer.toString();
        currentExpression += lastAnswer.toString();
        display.value = currentInput;
        currentExpressionDisplay.textContent = currentExpression;
    });

    const parenthesisButton = document.getElementById("parenthesis") as HTMLButtonElement;
    parenthesisButton.addEventListener("click", () => {
        if (parenthesisOpen) {
            currentInput += ")";
            currentExpression += ")";
            parenthesisOpen = false;
        } else {
            currentInput += "(";
            currentExpression += "(";
            parenthesisOpen = true;
        }
        display.value = currentInput;
        currentExpressionDisplay.textContent = currentExpression;
    });
    const eButton = document.getElementById("e") as HTMLButtonElement;
    eButton.addEventListener("click", () => {
        currentInput += "e";
        currentExpression += Math.E;
        display.value = currentInput;
        currentExpressionDisplay.textContent = currentExpression;    
    });

    // ... (rest of the existing code)
    document.querySelectorAll('#calculator button').forEach(button => {
        button.addEventListener('click', () => {
          // ... existing button click logic
        });
    });

    const equalsButton = document.getElementById("equals") as HTMLButtonElement;
    equalsButton.addEventListener("click", () =>{
        try {
            const result = eval(currentExpression);
            lastAnswer = result;
            display.value = result.toString();

        } catch(error) {
            // ... error handling ...
        }
    })
});

// ... (Existing functions like factorial)
