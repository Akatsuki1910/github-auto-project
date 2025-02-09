// ... (Existing code)
const display = document.getElementById("display") as HTMLInputElement;
let currentInput = "";
let currentExpression = "";
const currentExpressionDisplay = document.getElementById("currentExpressionDisplay") as HTMLDivElement;
const historyDiv = document.getElementById("history") as HTMLDivElement;
const historyArr: string[] = [];
let lastAnswer = 0;
let memoryValue = 0;
let mode = 'rad';
let keypadVisible = true; 

window.addEventListener("DOMContentLoaded", () => {
    // existing code
    // ... (Other button event listeners)

    // ... (Other buttons)
    // ... existing buttons
    // ... existing functions
    const toggleDarkModeButton = document.getElementById("toggle-dark-mode") as HTMLButtonElement;
    toggleDarkModeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
    const clearAllButton = document.getElementById("clear-all") as HTMLButtonElement;
    clearAllButton.addEventListener('click', () => {
        currentInput = '';
        currentExpression = '';
        historyArr.length = 0;
        updateDisplay();
        updateCurrentExpressionDisplay();
        updateHistory();
    });
    // ... other functions
    const clearMemoryButton = document.getElementById("clear-memory") as HTMLButtonElement;
    clearMemoryButton.addEventListener('click', () => {
        memoryValue = 0;
    });
    const toggleKeypadButton = document.getElementById("toggle-keypad") as HTMLButtonElement;
    toggleKeypadButton.addEventListener('click', () => {
        const calculatorDiv = document.getElementById("calculator") as HTMLDivElement;
        keypadVisible = !keypadVisible;
        if (keypadVisible) {
            calculatorDiv.style.display = "grid";
        } else {
            calculatorDiv.style.display = "none";
        }
    });

    const copyExpressionButton = document.getElementById("copy-expression") as HTMLButtonElement;
    copyExpressionButton.addEventListener('click', () => {
        navigator.clipboard.writeText(currentExpression)
            .then(() => {
                alert("Expression copied to clipboard: " + currentExpression);
            })
            .catch(err => {
                console.error("Failed to copy expression: ", err);
            });
    });

    // ... existing button event listeners
    document.querySelectorAll('#calculator button').forEach(button => {
        button.addEventListener('click', () => {
            // ... existing button click logic
        });
    });
    // ... other functions
});
// ... other existing functions
function updateDisplay() {
    display.value = currentInput;
}
function updateCurrentExpressionDisplay() {
    currentExpressionDisplay.textContent = currentExpression;
}
function updateHistory() {
    historyDiv.innerHTML = historyArr.map(item => `<div>${item}</div>`).join('');
}
// ... other existing functions
