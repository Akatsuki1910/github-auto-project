// ... (Existing Code)
let lastAnswer = 0;
let memory = 0;

window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code and variables)
    const memoryStoreButton = document.getElementById("memory-store") as HTMLButtonElement;
    const memoryRecallButton = document.getElementById("memory-recall") as HTMLButtonElement;
    const memoryClearButton = document.getElementById("memory-clear") as HTMLButtonElement;
    const lastAnswerButton = document.getElementById("last-answer") as HTMLButtonElement;
    const duplicateButton = document.getElementById("duplicate") as HTMLButtonElement;
    const historyDiv = document.getElementById("history") as HTMLDivElement;
    const clearHistoryButton = document.getElementById("clear-history") as HTMLButtonElement;
    const display = document.getElementById("display") as HTMLInputElement;
     const plusButton = document.getElementById("plus") as HTMLButtonElement;
    const minusButton = document.getElementById("minus") as HTMLButtonElement;
    const multiplyButton = document.getElementById("multiply") as HTMLButtonElement;
    const divideButton = document.getElementById("divide") as HTMLButtonElement;
    const equalsButton = document.getElementById("equals") as HTMLButtonElement;

    // ... other existing variables
    clearHistoryButton.addEventListener("click", () => {
        historyDiv.innerHTML = ""; // Clear the history display
        localStorage.removeItem("calculatorHistory"); // Clear history from local storage
    });

    // ... other event listeners
    // Basic Arithmetic operations
    plusButton.addEventListener("click", () => {display.value += "+";});
    minusButton.addEventListener("click", () => {display.value += "-";});
    multiplyButton.addEventListener("click", () => {display.value += "*";});
    divideButton.addEventListener("click", () => {display.value += "/";});

    equalsButton.addEventListener("click", () => {
        try {
            const result = eval(display.value); // Evaluate the expression
            display.value = result.toString(); 
        } catch (error) {
            display.value = "Error";
        }
    });

});