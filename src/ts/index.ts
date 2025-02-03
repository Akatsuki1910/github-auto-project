// ... (Existing code)

const display = document.getElementById("display") as HTMLInputElement;
let currentInput = "";
let currentExpression = "";
const currentExpressionDisplay = document.getElementById("currentExpressionDisplay") as HTMLDivElement;
const historyDiv = document.getElementById("history") as HTMLDivElement;
let history: string[] = [];

// ... (Other existing code)

window.addEventListener("DOMContentLoaded", () => {
    // ... existing code
    const factorialButton = document.getElementById("factorial") as HTMLButtonElement;
    factorialButton.addEventListener("click", () => {
        if (currentInput !== "") {
            const num = parseFloat(currentInput);
            if (isNaN(num)) {
                display.value = "Error: Invalid input for factorial";
            } else if (!Number.isInteger(num) || num < 0) {
                display.value = "Error: Factorial requires non-negative integer";
            } else {
                const result = factorial(num);
                currentInput = result.toString();
                currentExpression = currentInput;
                display.value = currentInput;
                currentExpressionDisplay.textContent = currentExpression;
            }
        }
    });
    function factorial(n: number): number {
        if (n === 0) {
            return 1;
        }
        return n * factorial(n - 1);
    }

    const toggleHistoryButton = document.getElementById("toggle-history") as HTMLButtonElement;
    toggleHistoryButton.addEventListener("click", () => {
        if (historyDiv.style.display === "none" || historyDiv.style.display === "") {
            historyDiv.style.display = "block";
            toggleHistoryButton.textContent = "Hide History";
        } else {
            historyDiv.style.display = "none";
            toggleHistoryButton.textContent = "History";
        }
    });

    // ... (rest of the existing code)
});