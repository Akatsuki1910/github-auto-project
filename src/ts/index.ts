// ... (Existing code)

const display = document.getElementById("display") as HTMLInputElement;
let currentInput = "";
let currentExpression = "";
const currentExpressionDisplay = document.getElementById("currentExpressionDisplay") as HTMLDivElement;
const historyDiv = document.getElementById("history") as HTMLDivElement;
let history: string[] = [];

// ... (Other existing code)

window.addEventListener("DOMContentLoaded", () => {
    // ... existing code

    const toggleHistoryButton = document.getElementById("toggle-history") as HTMLButtonElement;
    toggleHistoryButton.addEventListener("click", () => {
        if (historyDiv.style.display === "none" || historyDiv.style.display === "") {
            historyDiv.style.display = "block";
            toggleHistoryButton.textContent = "Hide History";
        } else {
            historyDiv.style.display = "none";
            toggleHistoryButton.textContent = "History";
        }
    });

    // Percentage button functionality
    const percentageButton = document.getElementById("percentage") as HTMLButtonElement;
    percentageButton.addEventListener("click", () => {
        if (currentInput !== "") {
            const percentageValue = parseFloat(currentInput) / 100;
            currentInput = percentageValue.toString();
            display.value = currentInput;
            currentExpression += currentInput; // Append percentage value to expression
            currentExpressionDisplay.textContent = currentExpression;
        }
    });


    const equalsButton = document.getElementById("equals") as HTMLButtonElement;
    equalsButton.addEventListener("click", () => {
        try {
            const result = eval(currentExpression);
            display.value = result.toString();
            currentInput = result.toString();
            history.push(currentExpression + " = " + result);
            historyDiv.innerHTML = history.map(item => `<p>${item}</p>`).join('');
            currentExpression = result.toString(); // Update currentExpression for continued calculations
        } catch (error) {
            display.value = "Error";
            currentInput = "";
            currentExpression = "";
        }
        currentExpressionDisplay.textContent = currentExpression;
    });

    const clearButton = document.getElementById("clear") as HTMLButtonElement;
    clearButton.addEventListener("click", () => {
        currentInput = "";
        currentExpression = "";
        display.value = "";
        currentExpressionDisplay.textContent = "";
    });


    const backspaceButton = document.getElementById("backspace") as HTMLButtonElement;
    backspaceButton.addEventListener("click", () => {
        currentInput = currentInput.slice(0, -1);
        currentExpression = currentExpression.slice(0, -1); // Update the current expression as well
        display.value = currentInput;
        currentExpressionDisplay.textContent = currentExpression;
    });

    const negateButton = document.getElementById("negate") as HTMLButtonElement;
    negateButton.addEventListener("click", () => {
        if (currentInput !== "") {
            currentInput = (parseFloat(currentInput) * -1).toString();
            display.value = currentInput;

            // Update currentExpression (replace last number with negated value)
            const lastNumberRegex = /([-\d.]+)$/;
            currentExpression = currentExpression.replace(lastNumberRegex, currentInput);
            currentExpressionDisplay.textContent = currentExpression;
        }
    });

    // ... (rest of the existing code)
});
