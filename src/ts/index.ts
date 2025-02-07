// ... (Existing code)
const display = document.getElementById("display") as HTMLInputElement;
let currentInput = "";
let currentExpression = "";
const currentExpressionDisplay = document.getElementById("currentExpressionDisplay") as HTMLDivElement;
const historyDiv = document.getElementById("history") as HTMLDivElement;
const historyArr: string[] = [];
let lastAnswer = 0;
let memoryValue = 0;
let isDegreeMode = true;

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
});

function updateDisplay() {
    display.value = currentInput;
}