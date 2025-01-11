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

    const display = document.getElementById("display") as HTMLInputElement;
    let currentExpression = "";

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const buttonText = button.textContent;

            if (/[0-9]/.test(buttonText)) {
                currentExpression += buttonText;
                display.value = currentExpression;
            } else if (buttonText === "+" || buttonText === "-" || buttonText === "*" || buttonText === "/") {
                currentExpression += buttonText;
                display.value = currentExpression;
            } else if (buttonText === ".") {
                // Prevent multiple decimals in a number
                if (!currentExpression.includes(".")) {
                    currentExpression += buttonText;
                    display.value = currentExpression;
                }
            } else if (buttonText === "=") {
                try {
                    const result = eval(currentExpression);
                    display.value = result.toString();
                    currentExpression = result.toString();
                } catch (error) {
                    display.value = "Error";
                    currentExpression = "";
                }
            } else if (buttonText === "C") {
                currentExpression = "";
                display.value = "";
            } else if (buttonText === "←") {
                currentExpression = currentExpression.slice(0, -1);
                display.value = currentExpression;
            } else if (buttonText === "x²") {
                try {
                    const currentNumber = parseFloat(currentExpression);
                    const result = currentNumber * currentNumber; // Or use Math.pow()
                    display.value = result.toString();
                    currentExpression = result.toString();
                } catch (error) {
                  display.value = "Error";
                  currentExpression = "";
                }
            } else if (buttonText === "√") {
                try {
                    const currentNumber = parseFloat(currentExpression);
                    if (currentNumber >= 0) {
                        const result = Math.sqrt(currentNumber);
                        display.value = result.toString();
                        currentExpression = result.toString();
                    } else {
                        display.value = "Error"; // Square root of negative number
                        currentExpression = "";
                    }
                } catch (error) {
                    display.value = "Error";
                    currentExpression = "";
                }
            } else if (buttonText === "+/-") {
                try {
                  const currentNumber = parseFloat(currentExpression);
                  const result = -currentNumber;
                  display.value = result.toString();
                  currentExpression = result.toString();
                } catch (error) {
                  display.value = "Error";
                  currentExpression = "";
                }
            }
        });
    });
});
