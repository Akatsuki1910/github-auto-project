// ... (Existing Code)
let lastAnswer = 0;

window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code and variables)
    const ansButton = document.getElementById("ans") as HTMLButtonElement;
    const randomButton = document.getElementById("random") as HTMLButtonElement;
    const roundButton = document.getElementById("round") as HTMLButtonElement;
    const signButton = document.getElementById("sign") as HTMLButtonElement;
    const absButton = document.getElementById("abs") as HTMLButtonElement;

    // ... other existing variables

    // ... existing event listeners

    ansButton.addEventListener("click", () => {
        display.value += lastAnswer.toString();
        currentExpressionDisplay.textContent = display.value;  // Update the current expression display
    });

    equalsButton.addEventListener("click", () => {
        try {
            const result = eval(currentExpressionDisplay.textContent);
            display.value = result.toString();
            lastAnswer = result; 
            // ... (Existing Calculation logging logic)
        } catch (error) {
            // ... existing error handling
        }
    });

    randomButton.addEventListener("click", () => {
        const randomNumber = Math.random();
        display.value += randomNumber.toString();
        currentExpressionDisplay.textContent = display.value;
    });

    roundButton.addEventListener("click", () => {
        if (display.value) {
            const roundedValue = Math.round(parseFloat(display.value));
            display.value = roundedValue.toString();
            currentExpressionDisplay.textContent = display.value;
        }
    });

    signButton.addEventListener("click", () => {
        if (display.value) {
            const currentValue = parseFloat(display.value);
            display.value = (-currentValue).toString();
             currentExpressionDisplay.textContent = display.value; // Update the current expression display
        }
    });

    absButton.addEventListener("click", () => {
        if (display.value) {
            const currentValue = parseFloat(display.value);
            display.value = Math.abs(currentValue).toString();
            currentExpressionDisplay.textContent = display.value;
        }
    });
});
