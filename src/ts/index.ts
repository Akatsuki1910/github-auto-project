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
    const toggleGridButton = document.getElementById("toggle-grid") as HTMLButtonElement;
    toggleGridButton.addEventListener('click', () => {
        const calculator = document.getElementById('calculator') as HTMLDivElement;
        calculator.classList.toggle('grid-view');
    });

    // ... (Other existing button event listeners) 
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
function updateHistory(){
    historyDiv.innerHTML = historyArr.map(item => `<div>${item}</div>`).join('');
}
// ... other existing functions
