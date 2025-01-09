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

    clearEntryButton.addEventListener("click", () => {
        display.value = "";
    });

    deleteButton.addEventListener("click", () => {
        display.value = display.value.slice(0, -1);
    });

    plusMinusButton.addEventListener("click", () => {
        if (display.value !== "") {
            if (display.value.charAt(0) === '-') {
                display.value = display.value.slice(1);
            } else {
                display.value = "-" + display.value;
            }
        }
    });

    sqrtButton.addEventListener("click", () => {
        try {
            const currentValue = parseFloat(display.value);
            if (currentValue < 0) {
                display.value = "Error: Cannot calculate square root of negative number";
            } else {
                const result = Math.sqrt(currentValue);
                display.value = result.toString();
            }
        } catch (error) {
            display.value = "Error";
        }
    });

    reciprocalButton.addEventListener("click", () => {
        try {
            const currentValue = parseFloat(display.value);
            if (currentValue === 0) {
                display.value = "Error: Cannot divide by zero";
            } else {
                display.value = (1 / currentValue).toString();
            }
        } catch (error) {
            display.value = "Error";
        }
    });

    // Added feature: Percentage calculation
    const percentageButton = document.getElementById("percentage") as HTMLButtonElement;
    percentageButton.addEventListener("click", () => {
        try {
            const currentValue = parseFloat(display.value);
            display.value = (currentValue / 100).toString();
        } catch (error) {
            display.value = "Error";
        }
    });

    // Memory functions
    memoryRecallButton.addEventListener("click", () => {
        display.value = memory.toString();
    });

    memoryClearButton.addEventListener("click", () => {
        memory = 0;
    });

    memoryPlusButton.addEventListener("click", () => {
        memory += parseFloat(display.value);
    });

    memoryMinusButton.addEventListener("click", () => {
        memory -= parseFloat(display.value);
    });
});