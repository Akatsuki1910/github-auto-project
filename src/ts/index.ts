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
    const toggleThemeButton = document.getElementById("toggleTheme") as HTMLButtonElement;
    let darkMode = false;
    toggleThemeButton.addEventListener('click', () => {
        darkMode = !darkMode;
        document.body.classList.toggle('dark-mode', darkMode);
    });

    // ... existing buttons
    document.querySelectorAll('#calculator button').forEach(button => {
        button.addEventListener('click', () => {
            // ... existing button click logic
        });
    });

    // ... other functions
});

function updateDisplay() {
    display.value = currentInput;
}
function updateCurrentExpressionDisplay() {
    currentExpressionDisplay.textContent = currentExpression;
}
