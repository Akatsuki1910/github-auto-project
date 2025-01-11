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
    let isParenthesisOpen = false;

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const buttonText = button.textContent;

            // ... (Existing button handling logic)
            else if (buttonText === "()") {
                if (!isParenthesisOpen) {
                    currentExpression += "(";
                    isParenthesisOpen = true;
                } else {
                    currentExpression += ")";
                    isParenthesisOpen = false;
                }
                display.value = currentExpression;
            }
else if (buttonText === "!") {
                try {
                    const currentNumber = parseFloat(currentExpression);
                    if (currentNumber < 0 || !Number.isInteger(currentNumber)) {
                        display.value = "Error";
                        currentExpression = "";
                    } else {
                      let result = 1;
                      for (let i = 2; i <= currentNumber; i++) {
                          result *= i;
                      }
                      display.value = result.toString();
                      currentExpression = result.toString();
                    }
                } catch (error) {
                    display.value = "Error";
                    currentExpression = "";
                }
            } else if (buttonText === "^") {
                currentExpression += "**";
                display.value = currentExpression;
            }
        });
    });
});