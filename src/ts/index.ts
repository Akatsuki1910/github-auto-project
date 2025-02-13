// ... (Existing code)
const display = document.getElementById("display") as HTMLInputElement;
let currentInput = "";
let currentExpression = "";
const currentExpressionDisplay = document.getElementById("currentExpressionDisplay") as HTMLDivElement;
const historyDiv = document.getElementById("history") as HTMLDivElement;
const historyArr: string[] = [];
let lastAnswer = 0;
let memoryValue = 0;
let displayColor = "black";
let isNegative = false;

window.addEventListener("DOMContentLoaded", () => {
    // ... existing code

    // ... other existing event listeners
    const negationButton = document.getElementById("negation") as HTMLButtonElement;
    negationButton.addEventListener('click', () => {
        if (currentInput !== "") {
            currentInput = (parseFloat(currentInput) * -1).toString();
            display.value = currentInput;
        }
    });

    // ... other existing event listeners
    // ... other functions (square, cube, factorial, inverse, sign)

    const ansButton = document.getElementById("ans") as HTMLButtonElement;
    ansButton.addEventListener('click', () => {
        currentInput = lastAnswer.toString();
        display.value = currentInput;
    });
    document.getElementById("open-parenthesis")?.addEventListener("click", () => {
        currentInput += "(";
        display.value = currentInput;
    });
    document.getElementById("close-parenthesis")?.addEventListener("click", () => {
        currentInput += ")";
        display.value = currentInput;
    });
    document.getElementById("mod")?.addEventListener("click", () => {
        currentInput += "%";
        display.value = currentInput;
    });
    document.getElementById("clear-history")?.addEventListener("click",()=>{
        historyArr.length = 0;
        historyDiv.innerHTML="";
    });
     document.getElementById("sin")?.addEventListener("click", () => {
        currentInput += "sin(";
        display.value = currentInput;
    });
    document.getElementById("cos")?.addEventListener("click", () => {
        currentInput += "cos(";
        display.value = currentInput;
    });
    document.getElementById("tan")?.addEventListener("click", () => {
        currentInput += "tan(";
        display.value = currentInput;
    });
    //Rest of the code
});
