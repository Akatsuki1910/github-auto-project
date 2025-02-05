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

    // ... other button listeners
    // ... existing code
    const duplicateButton = document.getElementById("duplicate") as HTMLButtonElement;
    duplicateButton.addEventListener("click", () => {
        if (currentInput) {
            currentInput += currentInput;
            display.value = currentInput;
        }
    });

    // ... (Other button event listeners)

    const log10Button = document.getElementById("log10") as HTMLButtonElement;
    log10Button.addEventListener("click", () => {
        try {
            const num = parseFloat(currentInput);
            currentInput = Math.log10(num).toString();
            display.value = currentInput;
        } catch (error) {
            console.error("Error calculating log10:", error);
            display.value = "Error";
        }
    });
    const calculateExpressionButton = document.getElementById("calculate-expression") as HTMLButtonElement;
    calculateExpressionButton.addEventListener("click", () => {
        try {
            const result = eval(currentExpression);
            display.value = result.toString();
            currentInput = result.toString();
        } catch (error) {
            display.value = "Error";
        }
    });
    const cubeRootButton = document.getElementById("cube-root") as HTMLButtonElement;
    cubeRootButton.addEventListener("click", () => {
        try {
            const num = parseFloat(currentInput);
            currentInput = Math.cbrt(num).toString();
            display.value = currentInput;
        }
        catch (error) {
            display.value = "Error";
        }
    });
    const modulusButton = document.getElementById("modulus") as HTMLButtonElement;
    modulusButton.addEventListener("click", () => {
        if (currentInput) {
            currentExpression += `%`;
            currentInput = "";
            currentExpressionDisplay.textContent = currentExpression;
        }
    });
    const doubleButton = document.getElementById("double") as HTMLButtonElement;
    doubleButton.addEventListener("click", () => {
        const num = parseFloat(currentInput);
        if (!isNaN(num)) {
            currentInput = (num * 2).toString();
            display.value = currentInput;
        }
    });
        const randomBetweenButton = document.getElementById("random-between") as HTMLButtonElement;
    randomBetweenButton.addEventListener("click", () => {
            const [min, max] = currentInput.split(',').map(Number);
            if (!isNaN(min) && !isNaN(max)) {
                    currentInput = (Math.random() * (max - min) + min).toString();
                display.value = currentInput;
            } else {
                display.value = "Invalid Input";
            }
    });
    const asecButton = document.getElementById("asec") as HTMLButtonElement;
    asecButton.addEventListener("click", () => {
        try {
            const num = parseFloat(currentInput);
            currentInput = (1 / Math.cos(num)).toString();
            display.value = currentInput;
        } catch (error) {
            display.value = "Error";
        }
    });
    const sumButton = document.getElementById("sum") as HTMLButtonElement;
    sumButton.addEventListener("click", () => {
        const numbers = currentInput.split(',').map(Number);
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        currentInput = sum.toString();
        display.value = currentInput;
    });
    // ... (Rest of the existing code)
});

// ... (rest of the code)
