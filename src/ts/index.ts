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
    let lastAnswer = 0; // Store the last answer
    const display = document.getElementById("display") as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById("currentExpressionDisplay") as HTMLDivElement;
    const toggleThemeBtn = document.getElementById("toggleTheme") as HTMLButtonElement;
    const history = document.getElementById("history") as HTMLDivElement;
    const historyBtn = document.getElementById("historyBtn") as HTMLButtonElement;
    const clearHistoryBtn = document.getElementById("clearHistory") as HTMLButtonElement; // Added Clear History Button
    let historyData: string[] = [];
    const lastAnswerBtn = document.getElementById("lastAnswer") as HTMLButtonElement; // Add Last Answer Button
    const memoryPlusBtn = document.getElementById("memoryPlus") as HTMLButtonElement;
    const memoryRecallBtn = document.getElementById("memoryRecall") as HTMLButtonElement;
    const memoryClearBtn = document.getElementById("memoryClear") as HTMLButtonElement; // Memory functions
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const buttonText = button.textContent;
            // ... existing logic
           if (buttonText === "="){
              historyData.push(currentExpression + " = " + display.value);
              lastAnswer = parseFloat(display.value); // Store the last answer
           }
            if (buttonText === "Last Answer") {
                display.value = lastAnswer.toString();
                currentExpression = lastAnswer.toString();
                currentExpressionDisplay.textContent = currentExpression;
            }
            if (buttonText === "M+") {
                memoryValue += parseFloat(display.value);
            }
            if (buttonText === "MR") {
                display.value = memoryValue.toString();
                currentExpression = memoryValue.toString();
                currentExpressionDisplay.textContent = currentExpression;
            }
            if (buttonText === "MC") {
                memoryValue = 0;
            }
        });
    });

    toggleThemeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
    });
        // ... other buttons
        historyBtn.addEventListener("click", () => {
            history.innerHTML = "";
        historyData.forEach(item => {
            const p = document.createElement("p");
            p.textContent = item;
            history.appendChild(p);
        });
        history.style.display = "block";
        });
        clearHistoryBtn.addEventListener("click", () => {
            historyData = [];
            history.innerHTML = "";
            history.style.display = "none";
        })
        // ... (Existing functions)
});
