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
    const toggleThemeBtn = document.getElementById("toggleTheme") as HTMLButtonElement;
    const clearAllBtn = document.getElementById("clearAll") as HTMLButtonElement;
    const duplicateBtn = document.getElementById("duplicate") as HTMLButtonElement;
    const squareRootBtn = document.getElementById("squareRoot") as HTMLButtonElement;
    const percentageBtn = document.getElementById("percentage") as HTMLButtonElement;
    const piBtn = document.getElementById("pi") as HTMLButtonElement;
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
            } else if (buttonText === "√") {
                try {
                    const currentValue = parseFloat(display.value);
                    if (currentValue < 0) {
                        display.value = "Invalid Input";
                    } else {
                        const result = Math.sqrt(currentValue);
                        display.value = result.toString();
                    }
                } catch (error) {
                    display.value = "Error";
                }
            } else if (buttonText === "%") {
                  try {
                    const currentValue = parseFloat(display.value);
                    const percentage = currentValue / 100; // Percentage logic
                    display.value = percentage.toString();
                  } catch (error) {
                    display.value = "Error";
                  }
              } else if (buttonText === "π") {
                display.value += Math.PI.toString();
            }
            // ... (Rest of the existing button logic)
        });
    });
    // ...existing logic
});
