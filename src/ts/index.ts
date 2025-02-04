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

    // ... other button listeners
    // ... existing code

    const signButton = document.getElementById("sign") as HTMLButtonElement;
    signButton.addEventListener("click", () => {
        try {
            const num = parseFloat(currentInput);
            currentInput = Math.sign(num).toString();
            display.value = currentInput;
        } catch (error) {
            console.error("Error calculating sign:", error);
            display.value = "Error";
        }
    });

    const clearHistoryButton = document.getElementById("clear-history") as HTMLButtonElement;
    clearHistoryButton.addEventListener("click", () => {
        historyArr = [];
        historyDiv.innerHTML = "";
    });
    const cuberootButton = document.getElementById("cuberoot") as HTMLButtonElement;
    cuberootButton.addEventListener("click", () => {
        try {
            const num = parseFloat(currentInput);
            currentInput = Math.cbrt(num).toString();
            display.value = currentInput;
        } catch (error) {
            console.error("Error calculating cuberoot:", error);
            display.value = "Error";
        }
    });

});

// ... (rest of the code)