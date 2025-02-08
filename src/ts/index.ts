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
    //Double Button
    // ... other buttons
    const percentageButton = document.getElementById("percentage") as HTMLButtonElement;
    percentageButton.addEventListener("click", () => {
        currentInput = (parseFloat(currentInput) / 100).toString();
        updateDisplay();
    });
    const exp2Button = document.getElementById("exp2") as HTMLButtonElement;
    exp2Button.addEventListener("click", () => {
        currentInput = Math.exp(parseFloat(currentInput)).toString();
        updateDisplay();
    });
    const calculateExpressionButton = document.getElementById("calculate-expression") as HTMLButtonElement;
    calculateExpressionButton.addEventListener("click", () => {
        try {
            const result = eval(currentExpression);
            currentInput = result.toString();
            updateDisplay();
        } catch (error) {
            currentInput = "Error";
            updateDisplay();
        }
    });
//Add Binary button
const binaryButton = document.getElementById("binary") as HTMLButtonElement;
binaryButton.addEventListener('click', () => {
currentInput = (parseInt(currentInput, 10) >>> 0).toString(2);
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
