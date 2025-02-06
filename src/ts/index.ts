// ... (Existing code)
const display = document.getElementById("display") as HTMLInputElement;
let currentInput = "";
let currentExpression = "";
const currentExpressionDisplay = document.getElementById("currentExpressionDisplay") as HTMLDivElement;
const historyDiv = document.getElementById("history") as HTMLDivElement;
const historyArr: string[] = [];
let lastAnswer = 0;
let memoryValue = 0;
let isDegreeMode = true; // Flag to track degree/radian mode

window.addEventListener("DOMContentLoaded", () => {
    // existing code
    // ... (Other button event listeners)

    // ... other button listeners
    // ... existing code
    const duplicateButton = document.getElementById("duplicate") as HTMLButtonElement;
    duplicateButton.addEventListener("click", () => {
        if (currentInput) {
            currentInput += currentInput;
            display.value = currentInput;
        }
    });

    // ... (Other button event listeners)
    //Reset Button
    // ... existing code

    const fibonacciButton = document.getElementById("fibonacci") as HTMLButtonElement;
    fibonacciButton.addEventListener("click", () => {
        if (currentInput) {
            const n = parseInt(currentInput);
            if (n >= 0) {
                currentInput = fibonacci(n).toString();
                display.value = currentInput;
            } else {
                display.value = "Error: Input must be non-negative";
            }
        }
    });

    function fibonacci(n: number): number {
        if (n <= 1) {
            return n;
        }
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
    // ... rest of the code
    const roundTo2DecimalsButton = document.getElementById("round-to-2-decimals") as HTMLButtonElement;
    roundTo2DecimalsButton.addEventListener("click", () => {
        if (currentInput) {
            const num = parseFloat(currentInput);
            if (!isNaN(num)) {
                currentInput = num.toFixed(2);
                display.value = currentInput;
            }
        }
    });

    const clearEntryButton = document.getElementById("clear-entry") as HTMLButtonElement;
    clearEntryButton.addEventListener("click", () => {
        currentInput = "";
        display.value = currentInput;
    });
    const random01Button = document.getElementById("random-0-1") as HTMLButtonElement;
    random01Button.addEventListener("click", () => {
        const randomNumber = Math.random();
        currentInput = randomNumber.toString();
        display.value = currentInput;
    });

    const log1pButton = document.getElementById("log1p") as HTMLButtonElement;
    log1pButton.addEventListener("click", () => {
        if (currentInput) {
            const num = parseFloat(currentInput);
            if (!isNaN(num)) {
                const result = Math.log1p(num);
                currentInput = result.toString();
                display.value = currentInput;
            }
        }
    });

    const randomIntegerButton = document.getElementById("random-integer") as HTMLButtonElement;
    randomIntegerButton.addEventListener("click", () => {
        const randomNumber = Math.floor(Math.random() * 100); // Generates a random integer between 0 and 99
        currentInput = randomNumber.toString();
        display.value = currentInput;
    });

    const toggleDegRadButton = document.getElementById("toggle-deg-rad") as HTMLButtonElement;
    toggleDegRadButton.addEventListener("click", () => {
        isDegreeMode = !isDegreeMode;
        toggleDegRadButton.textContent = isDegreeMode ? "Deg" : "Rad";
    });

    const currentTimeButton = document.getElementById("current-time") as HTMLButtonElement;
    currentTimeButton.addEventListener("click", () => {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        currentInput = timeString;
        display.value = currentInput;
    });
});