// ... (Existing Code)
window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code and variables)
    const parenthesisOpenButton = document.getElementById("parenthesis-open") as HTMLButtonElement;
    const parenthesisCloseButton = document.getElementById("parenthesis-close") as HTMLButtonElement;

    parenthesisOpenButton.addEventListener("click", () => {
        display.value += "(";
        currentExpressionDisplay.textContent = display.value;
    });

    parenthesisCloseButton.addEventListener("click", () => {
        display.value += ")";
        currentExpressionDisplay.textContent = display.value;
    });

    // ... (Rest of existing code)
});
