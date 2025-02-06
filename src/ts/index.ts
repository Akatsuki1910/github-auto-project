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

    //Memory Features
    // ... existing memory functions

    const memoryResetButton = document.getElementById("mr") as HTMLButtonElement;
    memoryResetButton.addEventListener("click", () => {
        memoryValue = 0; // Reset memory value to 0
    });

    // ... (rest of the existing code)
});
