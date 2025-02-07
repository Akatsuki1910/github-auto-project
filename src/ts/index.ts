// ... (Existing code)
const display = document.getElementById("display") as HTMLInputElement;
let currentInput = "";
let currentExpression = "";
const currentExpressionDisplay = document.getElementById("currentExpressionDisplay") as HTMLDivElement;
const historyDiv = document.getElementById("history") as HTMLDivElement;
const historyArr: string[] = [];
let lastAnswer = 0;
let memoryValue = 0;

window.addEventListener("DOMContentLoaded", () => {
    // existing code
    // ... (Other button event listeners)

    const copyToClipboardButton = document.getElementById("copy-to-clipboard") as HTMLButtonElement;
    copyToClipboardButton.addEventListener("click", () => {
        navigator.clipboard.writeText(display.value)
            .then(() => {
            // Optional: Show a success message
            console.log("Copied to clipboard: " + display.value);
        })
            .catch(err => {
            console.error("Failed to copy: ", err);
        });
    });

    const memoryStoreButton = document.getElementById("memory-store") as HTMLButtonElement;
    memoryStoreButton.addEventListener("click", () => {
        memoryValue = parseFloat(display.value);
    });

    const memoryRecallButton = document.getElementById("memory-recall") as HTMLButtonElement;
    memoryRecallButton.addEventListener("click", () => {
        currentInput = memoryValue.toString();
        updateDisplay();
    });

    const memoryClearButton = document.getElementById("memory-clear") as HTMLButtonElement;
    memoryClearButton.addEventListener("click", () => {
        memoryValue = 0;
    });

    const piButton = document.getElementById("pi") as HTMLButtonElement;
    piButton.addEventListener("click", () => {
        currentInput += Math.PI.toString();
        updateDisplay();
    });

    const factorialButton = document.getElementById("factorial") as HTMLButtonElement;
    factorialButton.addEventListener("click", () => {
        const num = parseFloat(currentInput);
        if (isNaN(num)) {
            currentInput = "Error";
        } else {
            currentInput = factorial(num).toString();
        }
        updateDisplay();
    });
});

function factorial(n: number): number {
    if (n < 0) return -1; // Error: Factorial not defined for negative numbers
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

function updateDisplay() {
    display.value = currentInput;
}