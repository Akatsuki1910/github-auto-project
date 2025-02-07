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
    const cosButton = document.getElementById("cos") as HTMLButtonElement;
    cosButton.addEventListener("click", () => {
        currentExpression += "Math.cos(" + currentInput + ")";
        currentInput = "";
        calculate();
    });
     const tanButton = document.getElementById("tan") as HTMLButtonElement;
    tanButton.addEventListener("click", () => {
        currentExpression += "Math.tan(" + currentInput + ")";
        currentInput = "";
        calculate();
    });
    const absButton = document.getElementById("abs") as HTMLButtonElement;
    absButton.addEventListener("click", () => {
        currentExpression += "Math.abs(" + currentInput + ")";
        currentInput = "";
        calculate();
    });
    const eButton = document.getElementById("e") as HTMLButtonElement;
    eButton.addEventListener("click", () => {
        currentInput += Math.E.toString();
        updateDisplay();
    });
    const leftParenthesisButton = document.getElementById("left-parenthesis") as HTMLButtonElement;
    leftParenthesisButton.addEventListener("click", () => {
        currentInput += "(";
        updateDisplay();
    });
    const rightParenthesisButton = document.getElementById("right-parenthesis") as HTMLButtonElement;
    rightParenthesisButton.addEventListener("click", () => {
        currentInput += ")";
        updateDisplay();
    });

    // ... other event listeners
});

function factorial(n: number): number {
    if (n < 0) return -1; // Error: Factorial not defined for negative numbers
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

function updateDisplay() {
    display.value = currentInput;
}

function updateCurrentExpressionDisplay(){
    currentExpressionDisplay.textContent = currentExpression;
}

function calculate(){
    try{
        const result = eval(currentExpression);
        currentInput = result.toString();
        lastAnswer = result;
        historyArr.push(currentExpression + " = " + currentInput);
        updateDisplay();
        currentExpression = "";
        updateCurrentExpressionDisplay();
    }
    catch(e){

    }
}
