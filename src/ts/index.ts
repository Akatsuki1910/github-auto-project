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
    const log2Button = document.getElementById("log2") as HTMLButtonElement;
    log2Button.addEventListener('click', () => {
        const num = parseFloat(currentInput);
        if (isNaN(num)) {
            currentInput = "Invalid input";
        }
        else {
            currentInput = (Math.log2(num)).toString();
        }
        updateDisplay();
    });
        const gcdButton = document.getElementById("gcd") as HTMLButtonElement;
    gcdButton.addEventListener('click', () => {
        const num1 = parseFloat(prompt("Enter the first number:"));
        const num2 = parseFloat(prompt("Enter the second number:"));
        if(isNaN(num1) || isNaN(num2)) {
            currentInput = "Invalid input";
        } else {
            currentInput = gcd(num1, num2).toString();
        }
        updateDisplay();
    });

    document.querySelectorAll('#calculator button').forEach(button => {
        button.addEventListener('click', () => {
            // ... existing button click logic
        });
    });

    // ... other functions
});
function isPrime(num) {
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
function gcd(a: number, b: number): number {
    while (b) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return Math.abs(a); // Handle negative inputs
}
