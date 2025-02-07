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
    const powerButton = document.getElementById("power") as HTMLButtonElement;
    powerButton.addEventListener("click", () => {
        currentExpression += currentInput + "**";
        currentInput = "";
        updateDisplay();
        updateCurrentExpressionDisplay();
    });
    const logButton = document.getElementById("log") as HTMLButtonElement;
    logButton.addEventListener("click", () => {
        const num = Number(currentInput);
        if(isNaN(num)) return;
        currentExpression += "Math.log10(" + currentInput + ")";
        currentInput = "";
        calculate();
    });
    const expButton = document.getElementById("exp") as HTMLButtonElement;
    expButton.addEventListener("click", () => {
        const num = Number(currentInput);
        if (isNaN(num)) return;
        currentExpression += "Math.exp(" + currentInput + ")";
        currentInput = "";
        calculate();
    });
    const roundButton = document.getElementById("round") as HTMLButtonElement;
    roundButton.addEventListener("click", () => {
        const num = Number(currentInput);
        if (isNaN(num)) return;
        currentInput = Math.round(num).toString();
        updateDisplay();
    });

    const lastAnswerButton = document.getElementById("last-answer") as HTMLButtonElement;
    lastAnswerButton.addEventListener("click", () => {
        currentInput = lastAnswer.toString();
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
