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

    const modeButton = document.getElementById("mode") as HTMLButtonElement;
    modeButton.addEventListener('click', () => {
        mode = mode === 'rad' ? 'deg' : 'rad';
        modeButton.textContent = `Mode: ${mode.toUpperCase()}`;
    });
    const dateButton = document.getElementById("date") as HTMLButtonElement;
    dateButton.addEventListener('click',()=>{
        const now = new Date();
        currentInput = now.toLocaleDateString();
        updateDisplay();
    });
    const timeButton = document.getElementById("time") as HTMLButtonElement;
    timeButton.addEventListener('click', () => {
        const now = new Date();
        currentInput = now.toLocaleTimeString();
        updateDisplay();
    });
     const isPrimeButton = document.getElementById("isPrime") as HTMLButtonElement;
    isPrimeButton.addEventListener('click', () => {
        const num = parseInt(currentInput);
        if (isNaN(num)) {
            currentInput = "Invalid input";
        } else {
            currentInput = isPrime(num) ? "Prime" : "Not Prime";
        }
        updateDisplay();
    });
        const clearAllHistoryButton = document.getElementById("clear-all-history") as HTMLButtonElement;
    clearAllHistoryButton.addEventListener('click', () => {
        historyArr.length = 0; // Clear the history array
        historyDiv.innerHTML = ''; // Clear the history display
    });
     const currentDateTimeButton = document.getElementById("current-date-time") as HTMLButtonElement;
    currentDateTimeButton.addEventListener('click', () => {
        const now = new Date();
        currentInput = now.toLocaleString();
        updateDisplay();
    });
    // ... existing buttons
    document.querySelectorAll('#calculator button').forEach(button => {
        button.addEventListener('click', () => {
            // ... existing button click logic
        });
    });

    // ... other functions
});
function isPrime(num: number): boolean {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function updateDisplay() {
    display.value = currentInput;
}
function updateCurrentExpressionDisplay() {
    currentExpressionDisplay.textContent = currentExpression;
}
