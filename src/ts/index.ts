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
});

function updateDisplay() {
    display.value = currentInput;
}