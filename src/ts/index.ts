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
    const powerBtn = document.getElementById("power") as HTMLButtonElement;
    const factorialBtn = document.getElementById("factorial") as HTMLButtonElement;
    const signBtn = document.getElementById("sign") as HTMLButtonElement;
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
                // ... existing square root logic
            } else if (buttonText === "%") {
                  // ... existing percentage logic
              } else if (buttonText === "π") {
                // ... existing pi logic
            } else if (buttonText === "x²") {
                // ... existing power logic
            } else if (buttonText === "x!") {
                try {
                    const currentValue = parseFloat(display.value);
                    if (currentValue < 0) {
                        display.value = "Invalid Input";
                    } else {
                        const result = factorial(currentValue);
                        display.value = result.toString();
                    }
                } catch (error) {
                    display.value = "Error";
                }
            } else if (buttonText === "Sign") {
                const currentValue = parseFloat(display.value);
                if (!isNaN(currentValue)) {
                    display.value = (-currentValue).toString();
                }
            }
            // ... (Rest of the existing button logic)
        });
    });

    function factorial(n: number): number {
        if (n === 0) {
            return 1;
        }
        return n * factorial(n - 1);
    }
    // ...existing logic
});
