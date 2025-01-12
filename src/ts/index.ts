// ... (Existing Code)

// ... existing variables and buttons
// ... existing event listeners
// ... existing functions (cube, inverse, round, etc)

// ... (Existing Code)

// ... existing functions

window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code and variables)
    // ... (Existing buttons)
    // ... existing variables and buttons
    // ... existing event listeners
    // ... existing functions

    // ... existing variables
    const clearEntryBtn = document.getElementById("clearEntry") as HTMLButtonElement;

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const buttonText = button.textContent;

            // ... (Existing button handling logic)
            if (buttonText === "CE") {
                currentExpression = "";
                display.value = "0";
                currentExpressionDisplay.textContent = "";
            }
             // ...other button logic   
           
        });
    });
    // ...existing logic
});
