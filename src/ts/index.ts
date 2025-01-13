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
    const eulerBtn = document.getElementById("euler") as HTMLButtonElement; // Euler's number button
    const randomBtn = document.getElementById("random") as HTMLButtonElement; // Random number button
    let openParentheses = 0;
    const sinBtn = document.getElementById("sin") as HTMLButtonElement; //sin button
    const cosBtn = document.getElementById("cos") as HTMLButtonElement; //cos button
    const logBtn = document.getElementById("log") as HTMLButtonElement; //log button

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
            } else if (buttonText === "e"){
                currentExpression += Math.E;
                currentExpressionDisplay.textContent = currentExpression;
            } else if (buttonText === "Rand") {
                const randomNumber = Math.random();
                currentExpression += randomNumber;
                currentExpressionDisplay.textContent = currentExpression;
            } else if (buttonText === "sin") {
                currentExpression += "Math.sin(";
                openParentheses++;
                currentExpressionDisplay.textContent = currentExpression;
            } else if (buttonText === "cos") {
                currentExpression += "Math.cos(";
                openParentheses++;
                currentExpressionDisplay.textContent = currentExpression;
            } else if (buttonText === "log") {
                currentExpression += "Math.log10("; // Use log10 for common logarithm
                openParentheses++;
                currentExpressionDisplay.textContent = currentExpression;
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
