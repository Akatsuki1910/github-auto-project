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
    const display = document.getElementById("display") as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById("currentExpressionDisplay") as HTMLDivElement;
    const clearEntryBtn = document.getElementById("clearEntry") as HTMLButtonElement;
    let memory = 0;
    const memoryStoreBtn = document.getElementById("memoryStore") as HTMLButtonElement;
    const memoryRecallBtn = document.getElementById("memoryRecall") as HTMLButtonElement;
    const memoryClearBtn = document.getElementById("memoryClear") as HTMLButtonElement;
    const modBtn = document.getElementById("mod") as HTMLButtonElement;
    const sumBtn = document.getElementById("sum") as HTMLButtonElement;
    const leftParenthesisBtn = document.getElementById("left-parenthesis") as HTMLButtonElement;
    const rightParenthesisBtn = document.getElementById("right-parenthesis") as HTMLButtonElement;
    const powerOfTwoBtn = document.getElementById("powerOfTwo") as HTMLButtonElement;
    const toggleThemeBtn = document.getElementById("toggleTheme") as HTMLButtonElement;
    const clearAllBtn = document.getElementById("clearAll") as HTMLButtonElement;
    const duplicateBtn = document.getElementById("duplicate") as HTMLButtonElement;
    let isDarkTheme = false;

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const buttonText = button.textContent;

            // ... (Existing button handling logic)
            // ... other button logic   
            // ... (Existing button logic)
            if (buttonText === "Toggle Theme") {
              isDarkTheme = !isDarkTheme;
                document.body.classList.toggle("dark-theme", isDarkTheme);
            } else if (buttonText === "AC") {
                // Clear all logic
                display.value = "";
                currentExpression = "";
                currentExpressionDisplay.textContent = "";
            } else if (buttonText === "Dup"){
                if (display.value) {
                   display.value += display.value;
                }
            }
            // ... (Rest of the existing button logic)
        });
    });
    // ...existing logic
});
