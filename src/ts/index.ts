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

    //Memory Features
    // ... existing memory functions
    const memoryResetButton = document.getElementById("mr") as HTMLButtonElement;
    memoryResetButton.addEventListener("click", () => {
        memoryValue = 0; // Reset memory value to 0
        display.value = "0";
        currentExpressionDisplay.textContent = ""; // Clear the current expression display
        currentInput = "";
        updateDisplay();
    });
    const toggleDarkModeButton = document.getElementById("toggle-dark-mode") as HTMLButtonElement;
    toggleDarkModeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
    });
    // ... other button listeners

    const toggleCalculatorButton = document.getElementById("toggle-calculator") as HTMLButtonElement;
    const calculatorDiv = document.getElementById("calculator") as HTMLDivElement;
    toggleCalculatorButton.addEventListener("click", () => {
        calculatorDiv.style.display = calculatorDiv.style.display === "none" ? "grid" : "none";
    });

    const copyToClipboardButton = document.getElementById("copy-to-clipboard") as HTMLButtonElement;
    copyToClipboardButton.addEventListener("click", () => {
        navigator.clipboard.writeText(display.value)
            .then(() => {
                const messageContainer = document.getElementById("message-container") as HTMLDivElement;
                messageContainer.textContent = "Copied to clipboard!";
                setTimeout(() => {
                    messageContainer.textContent = "";
                }, 2000);
            })
            .catch(err => {
                console.error("Failed to copy: ", err);
            });
    });
});