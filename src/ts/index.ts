// ... (Existing code)
const display = document.getElementById("display") as HTMLInputElement;
let currentInput = "";
let currentExpression = "";
const currentExpressionDisplay = document.getElementById("currentExpressionDisplay") as HTMLDivElement;
const historyDiv = document.getElementById("history") as HTMLDivElement;
const historyArr: string[] = [];
let lastAnswer = 0;
let memoryValue = 0;
let isDegreeMode = true; 

window.addEventListener("DOMContentLoaded", () => {
    // existing code
    // ... (Other button event listeners)

    //Memory Add
    const memoryAddButton = document.getElementById("memory-add") as HTMLButtonElement;
    memoryAddButton.addEventListener("click", () => {
        const currentValue = parseFloat(currentInput);
        if (!isNaN(currentValue)) {
            memoryValue += currentValue;
        }
    });

    // ... (rest of the existing code)
});