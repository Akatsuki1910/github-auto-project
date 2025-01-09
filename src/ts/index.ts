// ... (Existing Code)
let lastAnswer = 0;
let memory = 0;

window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code and variables)
    // ... other existing variables
    const modButton = document.getElementById("mod") as HTMLButtonElement;
    const clearEntryButton = document.getElementById("clear-entry") as HTMLButtonElement;
    const deleteButton = document.getElementById("delete") as HTMLButtonElement;
    const plusMinusButton = document.getElementById("plus-minus") as HTMLButtonElement;
    const sqrtButton = document.getElementById("sqrt") as HTMLButtonElement;
    const reciprocalButton = document.getElementById("reciprocal") as HTMLButtonElement;
    const display = document.getElementById("display") as HTMLInputElement;
    const plusButton = document.getElementById("plus") as HTMLButtonElement;
    const minusButton = document.getElementById("minus") as HTMLButtonElement;
    const multiplyButton = document.getElementById("multiply") as HTMLButtonElement;
    const divideButton = document.getElementById("divide") as HTMLButtonElement;
    const equalsButton = document.getElementById("equals") as HTMLButtonElement;

    const memoryRecallButton = document.getElementById("memory-recall") as HTMLButtonElement;
    const memoryClearButton = document.getElementById("memory-clear") as HTMLButtonElement;
    const memoryPlusButton = document.getElementById("memory-plus") as HTMLButtonElement;
    const memoryMinusButton = document.getElementById("memory-minus") as HTMLButtonElement;
    const lastAnswerButton = document.getElementById("last-answer") as HTMLButtonElement;

    const factorialButton = document.getElementById("factorial") as HTMLButtonElement;
    const squareButton = document.getElementById("square") as HTMLButtonElement;
    const clearButton = document.getElementById("clear") as HTMLButtonElement; // Get the clear button
    const piButton = document.getElementById("pi") as HTMLButtonElement;

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
            const expression = display.value.replace(/%/g, "/100*"); // Correct modulo operator
            const result = eval(expression);
            display.value = result.toString();
            lastAnswer = result;
        } catch (error) {
            display.value = "Error";
        }
    });

    // ... (rest of the existing code)

     factorialButton.addEventListener("click", () => {
        try {
            const currentValue = parseFloat(display.value);
            if (currentValue < 0 || !Number.isInteger(currentValue)) {
                display.value = "Error: Factorial is not defined for negative numbers or non-integers.";
            } else {
                let result = 1;
                for (let i = 1; i <= currentValue; i++) {
                    result *= i;
                }
                display.value = result.toString();
            }
        } catch (error) {
            display.value = "Error";
        }
    });

    squareButton.addEventListener("click", () => {
        try {
            const currentValue = parseFloat(display.value);
            const result = currentValue * currentValue;
            display.value = result.toString();
        } catch (error) {
            display.value = "Error";
        }
    });

    clearButton.addEventListener("click", () => {
        display.value = ""; // Clear the display when clear button is clicked.
    })

    piButton.addEventListener("click", () => {
        display.value += Math.PI;
    });
});
