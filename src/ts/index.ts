// ... (Existing Code)
let lastAnswer = 0;

window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code and variables)
    const ansButton = document.getElementById("ans") as HTMLButtonElement;
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
});