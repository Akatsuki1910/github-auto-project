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

    let currentExpression = "";
    let isDarkTheme = false;
    let memoryValue = 0; // Added memoryValue variable
    const display = document.getElementById("display") as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById("currentExpressionDisplay") as HTMLDivElement;
    const toggleThemeBtn = document.getElementById("toggleTheme") as HTMLButtonElement;
    const memoryPlusBtn = document.getElementById("memoryPlus") as HTMLButtonElement;

    // ... other buttons
    const signFlipBtn = document.getElementById("signFlip") as HTMLButtonElement;

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const buttonText = button.textContent;
            // ... existing logic
            if (buttonText === "+/-") {
                const currentValue = parseFloat(display.value);
                display.value = (-currentValue).toString();
                currentExpression = (-currentValue).toString();  // Update currentExpression
                currentExpressionDisplay.textContent = currentExpression;
            }
           // ... other logic
        });
    });
     memoryPlusBtn.addEventListener("click", () => {
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            memoryValue += currentValue;
        }
    });

    // ... existing functions
});
