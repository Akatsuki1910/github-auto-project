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
    const display = document.getElementById("display") as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById("currentExpressionDisplay") as HTMLDivElement;
    const toggleThemeBtn = document.getElementById("toggleTheme") as HTMLButtonElement;
    const parenthesesBtn = document.getElementById("parentheses") as HTMLButtonElement; // Parentheses button
    let openParentheses = 0;

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const buttonText = button.textContent;
            // ... existing logic
            if (buttonText === "( )") {
                if (openParentheses === 0) {
                    currentExpression += "(";
                    openParentheses++;
                } else {
                    currentExpression += ")";
                    openParentheses--;
                }
                currentExpressionDisplay.textContent = currentExpression;
            } else if (buttonText === "Toggle Theme") {
                isDarkTheme = !isDarkTheme;
                document.body.classList.toggle("dark-theme", isDarkTheme);
            } else {
              // existing logic
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
