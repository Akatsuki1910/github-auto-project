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

    const squaredButton = document.getElementById("squared") as HTMLButtonElement;
    squaredButton.addEventListener("click", () => {
        // ... existing squared function
    });

    const cubedButton = document.getElementById("cubed") as HTMLButtonElement;
    cubedButton.addEventListener("click", () => {
       // ... existing cubed function
    });

    const logButton = document.getElementById("log") as HTMLButtonElement;
    // ... (rest of the code)

    const tenToThePowerXButton = document.getElementById("ten-to-the-power-x") as HTMLButtonElement;
    tenToThePowerXButton.addEventListener("click", () => {
        const num = parseFloat(display.value);
        if (!isNaN(num)) {
            const result = Math.pow(10, num);
            display.value = result.toString();
            currentInput = result.toString();
            displayMessage("10 to the power " + num + " calculated");
        } else {
            displayMessage("Invalid input for 10^x");
            display.value = "Error";
            currentInput = "";
        }
    });

     const clearHistoryButton = document.getElementById("clear-history") as HTMLButtonElement;
    clearHistoryButton.addEventListener("click", () => {
        history = [];
        historyDiv.innerHTML = "";
        displayMessage("History cleared");
    });
});

function displayMessage(message: string) {
    // ... (existing code)
}

// ... (Existing functions like factorial)