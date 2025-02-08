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

    // ... (Other buttons)
    // ... existing buttons
    //Added clear history button
    const clearHistoryButton = document.getElementById("clear-history") as HTMLButtonElement;
    clearHistoryButton.addEventListener("click", () => {
        historyArr.length = 0; // Clear the history array
        historyDiv.innerHTML = ""; // Clear the history display
    });
    //Added min button
    // ... other buttons
    const signButton = document.getElementById("sign") as HTMLButtonElement;
    signButton.addEventListener("click", () => {
        currentInput += "Math.sign(";
        currentExpression += "Math.sign(";
        updateDisplay();
        updateCurrentExpressionDisplay();
    });
    const exitButton = document.getElementById("exit") as HTMLButtonElement;
    exitButton.addEventListener("click", () => {
        window.close();
    });
    const negateButton = document.getElementById("negate") as HTMLButtonElement;
    negateButton.addEventListener("click", () => {
        if (currentInput) {
            currentInput = `-${currentInput}`;
            currentExpression = `-${currentExpression}`;
            updateDisplay();
            updateCurrentExpressionDisplay();
        }
    });
    document.querySelectorAll('#calculator button').forEach(button => {
        button.addEventListener('click', () => {
            // ... existing button click logic
        });
    });
    // ... other event listeners
});

// ... other functions

function updateDisplay() {
    display.value = currentInput;
}
function updateCurrentExpressionDisplay() {
    currentExpressionDisplay.textContent = currentExpression;
}
