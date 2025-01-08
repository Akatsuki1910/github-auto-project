// ... (Existing Code)
let lastAnswer = 0;
let memory = 0;

window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code and variables)
    const memoryStoreButton = document.getElementById("memory-store") as HTMLButtonElement;
    const memoryRecallButton = document.getElementById("memory-recall") as HTMLButtonElement;

    // ... other existing variables
    memoryStoreButton.addEventListener("click", () => {
        if (display.value) {
            memory += parseFloat(display.value);
            display.value = ""; // Clear display after storing value (optional)
            currentExpressionDisplay.textContent = display.value;
        }
    });

    memoryRecallButton.addEventListener("click", () => {
        display.value = memory.toString();
        currentExpressionDisplay.textContent = display.value;
    });

    // ... existing event listeners
});