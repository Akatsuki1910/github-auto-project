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

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const buttonText = button.textContent;

            // ... (Existing button handling logic)
            if (buttonText === "CE") {
                currentExpression = "";
                display.value = "0";
                currentExpressionDisplay.textContent = "";
            } else if (buttonText === "MS"){
                memory = parseFloat(display.value);
            } else if (buttonText === "MR"){
                display.value = memory.toString();
                currentExpression += memory;
                currentExpressionDisplay.textContent = currentExpression;
            } else if (buttonText === "MC"){
                memory = 0;
            } else if (buttonText === "ln") {
                try {
                    const currentValue = parseFloat(display.value);
                    const result = Math.log(currentValue);
                    display.value = result.toString();
                    currentExpression += `ln(${currentValue})`;
                    currentExpressionDisplay.textContent = currentExpression;
                } catch (error) {
                    display.value = "Error";
                }
            } else if (buttonText === "e") {
                const eValue = Math.E;
                display.value = eValue.toString();
                currentExpression += eValue;
                currentExpressionDisplay.textContent = currentExpression;
            } else if (buttonText === "10x") {
                try {
                  const currentValue = parseFloat(display.value);
                  const result = Math.pow(10, currentValue);
                  display.value = result.toString();
                  currentExpression += `10^(${currentValue})`;
                  currentExpressionDisplay.textContent = currentExpression;
                } catch (error) {
                    display.value = "Error";
                }
              }
             // ...other button logic   
           
        });
    });
    // ...existing logic
});
