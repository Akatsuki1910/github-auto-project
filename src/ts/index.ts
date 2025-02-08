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
     const parenthesisButton = document.getElementById("parenthesis") as HTMLButtonElement;
    parenthesisButton.addEventListener("click", () => {
      currentInput += "()";
        currentExpression += "()";
        updateDisplay();
        updateCurrentExpressionDisplay();  
    });
        const exponentiationButton = document.getElementById("exponentiation") as HTMLButtonElement;
        exponentiationButton.addEventListener("click", () => {
            currentInput += "**";
            currentExpression += "**";
            updateDisplay();
            updateCurrentExpressionDisplay();
        });
//Added ln button
const lnButton = document.getElementById("ln") as HTMLButtonElement;
lnButton.addEventListener("click", () => {
currentInput += "Math.log(";
currentExpression += "Math.log(";
updateDisplay();
updateCurrentExpressionDisplay();
});
document.querySelectorAll('#calculator button').forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent;
            if (!isNaN(Number(buttonText)) || buttonText === '.') {
                currentInput += buttonText;
                currentExpression += buttonText;
                updateDisplay();
                updateCurrentExpressionDisplay();
            }
            if (buttonText === "="){
                calculate();
                displayHistory();
            }
            if (buttonText === "C"){
                currentInput = "";
                currentExpression = "";
                updateDisplay();
                updateCurrentExpressionDisplay();
            }
            if (buttonText === "⌫") {
                currentInput = currentInput.slice(0, -1);
                currentExpression = currentExpression.slice(0, -1);
                updateDisplay();
                updateCurrentExpressionDisplay();
            }
        });
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
function displayHistory(){
    historyDiv.innerHTML = "";
    historyArr.forEach(item => {
        const p = document.createElement("p");
        p.textContent = item;
        historyDiv.appendChild(p);
    });
}