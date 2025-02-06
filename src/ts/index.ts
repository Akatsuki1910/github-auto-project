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
    //Memory Plus (adds current input to memory)
    const memoryPlusButton = document.getElementById("memory-plus") as HTMLButtonElement;
    memoryPlusButton.addEventListener("click", () => {
        const currentValue = parseFloat(currentInput);
        if (!isNaN(currentValue)) {
            memoryValue += currentValue;
        }
    });
    //Memory Subtract
    const memorySubtractButton = document.getElementById("memory-subtract") as HTMLButtonElement;
    memorySubtractButton.addEventListener("click", () => {
        const currentValue = parseFloat(currentInput);
        if (!isNaN(currentValue)) {
            memoryValue -= currentValue;
        }
    });
    // Memory Multiply
    const memoryMultiplyButton = document.getElementById("memory-multiply") as HTMLButtonElement;
    memoryMultiplyButton.addEventListener("click", () => {
        const currentValue = parseFloat(currentInput);
        if (!isNaN(currentValue)) {
            memoryValue *= currentValue;
        }
    });
 // Memory Divide
    const memoryDivideButton = document.getElementById("memory-divide") as HTMLButtonElement;
    memoryDivideButton.addEventListener("click", () => {
        const currentValue = parseFloat(currentInput);
        if (!isNaN(currentValue) && currentValue !== 0) {
            memoryValue /= currentValue;
        }
    });

    // ... (rest of the existing code)
});
