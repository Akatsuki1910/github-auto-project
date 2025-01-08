// ... (Existing Code)
let lastAnswer = 0;
let memory = 0;

window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code and variables)
    // ... other existing variables
    const modButton = document.getElementById("mod") as HTMLButtonElement;
    const clearEntryButton = document.getElementById("clear-entry") as HTMLButtonElement;

    // ... other event listeners
    modButton.addEventListener("click", () => {
        display.value += "%";
    });
    // Basic Arithmetic operations
    plusButton.addEventListener("click", () => {display.value += "+";});
    minusButton.addEventListener("click", () => {display.value += "-";});
    multiplyButton.addEventListener("click", () => {display.value += "*";});
    divideButton.addEventListener("click", () => {display.value += "/";});

    equalsButton.addEventListener("click", () => {
        try {
            const expression = display.value.replace(/%/g, "*");
            const result = eval(expression); // Evaluate the expression
            display.value = result.toString();
            lastAnswer = result; // Store the last answer
        } catch (error) {
            display.value = "Error";
        }
    });

    clearEntryButton.addEventListener("click", () => {
        display.value = ""; // Clear the current entry
    });

});
