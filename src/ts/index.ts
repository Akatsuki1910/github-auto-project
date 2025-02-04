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

    // ... existing event listeners for squared, cubed, etc.
});

function displayMessage(message: string) {
    // ... (existing code)
}

// ... (Existing functions like factorial)
