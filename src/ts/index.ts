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
    let previousAnswer = "";
    const history: string[] = [];
    const historyDiv = document.getElementById("history") as HTMLDivElement;
    const historyBtn = document.getElementById("historyBtn") as HTMLButtonElement;

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const buttonText = button.textContent;

            // ... (Existing button handling logic)
            //Ans button functionality
            if (buttonText === "Ans") {
                currentExpression += previousAnswer;
                display.value = currentExpression;
            } else if (buttonText === "()") {
              // ... existing parenthesis logic
            } else if (buttonText === "!") {
              // ... existing factorial logic
            } else if (buttonText === "^") {
                currentExpression += "**";
                display.value = currentExpression;
            } else if (buttonText === "sgn") {
                // ... existing sign logic
            } else if (buttonText === "log") {
              // ... existing log logic
            } else if (buttonText === "exp") {
              // ... existing exp logic
            } else if (buttonText === "Copy") {
                navigator.clipboard.writeText(display.value)
                    .then(() => {
                        // Optional: Provide feedback to the user
                        console.log("Copied to clipboard");
                    })
                    .catch((err) => {
                        console.error("Failed to copy: ", err);
                    });
            } else if (buttonText === "=") {
                try {
                    previousAnswer = eval(currentExpression).toString();
                    display.value = previousAnswer;
                    currentExpression = previousAnswer; // Update for next calculation
                    history.push(currentExpression); // Add to history
                } catch (error) {
                    display.value = "Error";
                    currentExpression = ""; // Clear on error
                }
            }
            // ... rest of button logic

            // ... existing functions
        });
    });

    historyBtn.addEventListener("click", () => {
        historyDiv.innerHTML = ""; // Clear previous history
        history.forEach(item => {
          const p = document.createElement("p");
          p.textContent = item;
          historyDiv.appendChild(p);
        });
        historyDiv.style.display = "block";
    });
});
