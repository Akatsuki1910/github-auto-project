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
    const mcButton = document.getElementById("mc") as HTMLButtonElement;
    mcButton.addEventListener("click", () => {
        memory = 0; // Clear memory
        displayMessage("Memory cleared");
    });

    const mrButton = document.getElementById("mr") as HTMLButtonElement;
    mrButton.addEventListener("click", () => {
        currentInput = memory.toString();
        display.value = currentInput;
        displayMessage("Memory recalled");
    });
    const msButton = document.getElementById("ms") as HTMLButtonElement;
    msButton.addEventListener("click", () => {
        // If there's a current input value, convert it to a number and store it in memory, else display 0
        memory = parseFloat(display.value) || 0;        displayMessage("Memory saved");
    });

    const ansButton = document.getElementById("ans") as HTMLButtonElement;
    // ... (rest of the existing code)
});

function displayMessage(message: string) {
    const messageContainer = document.getElementById("message-container") as HTMLDivElement;
    messageContainer.textContent = message;
    setTimeout(() => {
        messageContainer.textContent = ""; // Clear the message after a short delay
    }, 2000); // Clear message after 2 seconds
}

// ... (Existing functions like factorial)
