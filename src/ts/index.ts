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
    const copyDisplayButton = document.getElementById("copy-display") as HTMLButtonElement;
    copyDisplayButton.addEventListener('click', () => {
        navigator.clipboard.writeText(display.value);
    });
    const clearLastCharButton = document.getElementById("clear-last-char") as HTMLButtonElement;
    clearLastCharButton.addEventListener('click', () => {
        currentInput = currentInput.slice(0, -1);
        updateDisplay();
    });
    const openLinkButton = document.getElementById("open-link") as HTMLButtonElement;
    openLinkButton.addEventListener('click', () => {
        window.open('https://www.google.com', '_blank');
    });
    const currentOperandButton = document.getElementById("current-operand") as HTMLButtonElement;
    currentOperandButton.addEventListener('click', () => {
        currentInput = currentInput + currentExpression;
        updateDisplay();
    });
     const keyboardButton = document.getElementById("keyboard") as HTMLButtonElement;
    keyboardButton.addEventListener('click', () => {
      const keyboard = document.createElement('div');
      keyboard.id = 'keyboard-container';
      // Add keyboard elements (buttons, etc.) here
      document.body.appendChild(keyboard);
    });

    const toggleCalculatorButton = document.getElementById("toggle-calculator") as HTMLButtonElement;
    const calculatorDiv = document.getElementById("calculator") as HTMLDivElement;
    toggleCalculatorButton.addEventListener('click', () => {
        calculatorDiv.style.display = calculatorDiv.style.display === "none" ? "block" : "none";
    });
    const log10Btn = document.getElementById("log10Btn") as HTMLButtonElement;
    log10Btn.addEventListener('click', () => {
        try {
            const num = parseFloat(currentInput);
            currentInput = Math.log10(num).toString();
            updateDisplay();
        } catch (error) {
            currentInput = "Error";
            updateDisplay();
        }
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
