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
    //Add delete last entry button
    const deleteLastEntryButton = document.getElementById("delete-last-entry") as HTMLButtonElement;
    deleteLastEntryButton.addEventListener("click", () => {
        currentInput = currentInput.slice(0, -1);
        currentExpression = currentExpression.slice(0, -1);
        updateDisplay();
        updateCurrentExpressionDisplay();
    });
    const openNewTabButton = document.getElementById("open-new-tab") as HTMLButtonElement;
    openNewTabButton.addEventListener("click", () => {
        window.open('https://www.example.com', '_blank');
    });
        const clearDisplayButton = document.getElementById("clear-display") as HTMLButtonElement;
        clearDisplayButton.addEventListener("click", () => {
            currentInput = "";
            updateDisplay();
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
