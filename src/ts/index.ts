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

    const logButton = document.getElementById("log") as HTMLButtonElement;
    logButton.addEventListener("click", () => {
        const num = parseFloat(display.value);
        if (!isNaN(num) && num > 0) {  // Check for valid input and positive number
            const logValue = Math.log10(num);
            display.value = logValue.toString();
            currentInput = logValue.toString();
            displayMessage("log(" + num + ") calculated");
        } else if (num <= 0) {
            displayMessage("Invalid input for log (must be positive)");
            display.value = "Error";
            currentInput = "";
        }        else {
            displayMessage("Invalid input for log");
            display.value = "Error";
            currentInput = "";
        }
    });

        const expButton = document.getElementById("exp") as HTMLButtonElement;
        expButton.addEventListener("click", () => {
            const num = parseFloat(display.value);
            if (!isNaN(num)) {
                const expValue = Math.exp(num);
                display.value = expValue.toString();
                currentInput = expValue.toString();
                displayMessage("exp(" + num + ") calculated");
            } else {
                displayMessage("Invalid input for exp");
                display.value = "Error";
                currentInput = "";
            }
        });
});

function displayMessage(message: string) {
    const messageContainer = document.getElementById("message-container") as HTMLDivElement;
    messageContainer.textContent = message;
    setTimeout(() => {
        messageContainer.textContent = ""; // Clear the message after a short delay
    }, 2000); // Clear message after 2 seconds
}

// ... (Existing functions like factorial)