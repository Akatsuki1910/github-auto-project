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
        const num = parseFloat(display.value);
        if (!isNaN(num)) {
            const squaredValue = num * num;
            display.value = squaredValue.toString();
            currentInput = squaredValue.toString();
            displayMessage(num + " squared calculated");
        } else {
            displayMessage("Invalid input for squaring");
            display.value = "Error";
            currentInput = "";
        }
    });

    const cubedButton = document.getElementById("cubed") as HTMLButtonElement;
    cubedButton.addEventListener("click", () => {
        const num = parseFloat(display.value);
        if (!isNaN(num)) {
            const cubedValue = num * num * num;
            display.value = cubedValue.toString();
            currentInput = cubedValue.toString();
            displayMessage(num + " cubed calculated");
        } else {
            displayMessage("Invalid input for cubing");
            display.value = "Error";
            currentInput = "";
        }
    });

    const logButton = document.getElementById("log") as HTMLButtonElement;
    // ... (rest of the code)
});

function displayMessage(message: string) {
    // ... (existing code)
}

// ... (Existing functions like factorial)