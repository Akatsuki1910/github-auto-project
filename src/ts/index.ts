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
    const nthRootButton = document.getElementById("nth-root") as HTMLButtonElement;
    nthRootButton.addEventListener('click', () => {
        const n = parseFloat(prompt("Enter the root (n):") || "2"); // Default to square root if no input
        const num = parseFloat(currentInput);
        if (isNaN(num) || isNaN(n)) {
            currentInput = "Invalid input";
        }
        else {
            currentInput = Math.pow(num, 1 / n).toString();
        }
        updateDisplay();
    });
    // ... (Other existing button event listeners) 
    const averageButton = document.getElementById("average") as HTMLButtonElement;
    averageButton.addEventListener('click', () => {
        const numbersStr = prompt("Enter numbers separated by commas:");
        if (!numbersStr) {
            currentInput = "Invalid input";
            updateDisplay();
            return;
        }
        const numbers = numbersStr.split(',').map(Number).filter(n => !isNaN(n));
        if (numbers.length === 0) {
            currentInput = "Invalid input";
        }
        else {
            const sum = numbers.reduce((total, num) => total + num, 0);
            currentInput = (sum / numbers.length).toString();
        }
        updateDisplay();
    });

    document.querySelectorAll('#calculator button').forEach(button => {
        button.addEventListener('click', () => {
            // ... existing button click logic
        });
    });
    const log1pButton = document.getElementById("log1p") as HTMLButtonElement;
    log1pButton.addEventListener('click', () => {
        const num = parseFloat(currentInput);
        if (isNaN(num)) {
            currentInput = "Invalid Input";
        }
        else {
            currentInput = Math.log1p(num).toString();
        }
        updateDisplay();
    });
    const roundToNDecimalsButton = document.getElementById("round-to-n-decimals") as HTMLButtonElement;
    roundToNDecimalsButton.addEventListener('click', () => {
        const n = parseInt(prompt("Enter the number of decimal places to round to:") || "2");
        const num = parseFloat(currentInput);
        if (isNaN(num) || isNaN(n)) {
            currentInput = "Invalid input";
        }
        else {
            currentInput = num.toFixed(n);
        }
        updateDisplay();
    });
    const cubeRootButton = document.getElementById("cube-root") as HTMLButtonElement;
    cubeRootButton.addEventListener('click', () => {
        const num = parseFloat(currentInput);
        if (isNaN(num)) {
            currentInput = "Invalid input";
        }
        else {
            currentInput = Math.cbrt(num).toString();
        }
        updateDisplay();
    });
    const absoluteButton = document.getElementById("absolute") as HTMLButtonElement;
    absoluteButton.addEventListener('click', () => {
        currentInput = Math.abs(parseFloat(currentInput)).toString();
        updateDisplay();
    });
    const randomIntButton = document.getElementById("random-int") as HTMLButtonElement;
    randomIntButton.addEventListener('click', () => {
        currentInput = Math.floor(Math.random() * 100).toString();
        updateDisplay();
    });
    const calculateFactorialButton = document.getElementById("calculate-factorial") as HTMLButtonElement;
    calculateFactorialButton.addEventListener('click', () => {
        const num = parseInt(currentInput);
        if (isNaN(num)) {
            currentInput = "Invalid input";
        }
        else {
            currentInput = factorial(num).toString();
        }
        updateDisplay();
    });
    function factorial(n) {
        if (n === 0) {
            return 1;
        }
        else if (n < 0) {
            return "Invalid input";
        }
        else {
            return n * factorial(n - 1);
        }
    }
    // ... other functions
});
// ... other existing functions
function updateDisplay() {
    display.value = currentInput;
}
function updateCurrentExpressionDisplay() {
    currentExpressionDisplay.textContent = currentExpression;
}
// ... other existing functions
