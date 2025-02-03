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
        memory = parseFloat(display.value) || 0;
        displayMessage("Memory saved");
    });

    const ansButton = document.getElementById("ans") as HTMLButtonElement;
    // ... (rest of the existing code)

    const copyButton = document.getElementById("copy") as HTMLButtonElement;
    copyButton.addEventListener("click", () => {
        navigator.clipboard.writeText(display.value).then(() => {
            displayMessage("Copied to clipboard");
        }).catch(err => {
            displayMessage("Could not copy to clipboard");
            console.error("Failed to copy: ", err);
        });
    });

    const roundButton = document.getElementById("round") as HTMLButtonElement;
    roundButton.addEventListener("click", () => {
        const num = parseFloat(display.value);
        if (!isNaN(num)) {
            const roundedNum = Math.round(num);
            display.value = roundedNum.toString();
            currentInput = roundedNum.toString();
            displayMessage("Rounded to " + roundedNum);
        } else {
            displayMessage("Invalid input for rounding");
        }
    });

    const inverseButton = document.getElementById("inverse") as HTMLButtonElement;
    inverseButton.addEventListener("click", () => {
        const num = parseFloat(display.value);
        if (num !== 0 && !isNaN(num)) {
            const inverse = 1 / num;
            display.value = inverse.toString();
            currentInput = inverse.toString();
            displayMessage("Inverse calculated");
        } else if (num === 0) {
            displayMessage("Cannot divide by zero");
            display.value = "Error";
            currentInput = "";
        } else {
            displayMessage("Invalid input for inverse");
        }
    });

    const sinButton = document.getElementById("sign") as HTMLButtonElement;
    sinButton.addEventListener("click", () => {
        const num = parseFloat(display.value);
        if (!isNaN(num)) {
            const sinValue = Math.sin(num);
            display.value = sinValue.toString();
            currentInput = sinValue.toString();
            displayMessage("sin(" + num + ") calculated");  // Display the message
        } else {
            displayMessage("Invalid input for sin");
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
