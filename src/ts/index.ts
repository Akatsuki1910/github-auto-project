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
    const clearHistoryBtn = document.getElementById("clearHistory") as HTMLButtonElement;
    let memoryValue = 0;
    const memoryStoreBtn = document.getElementById("memoryStore") as HTMLButtonElement;
    const memoryRecallBtn = document.getElementById("memoryRecall") as HTMLButtonElement;
    const memoryClearBtn = document.getElementById("memoryClear") as HTMLButtonElement;
  const roundBtn = document.getElementById("round") as HTMLButtonElement;
  const floorBtn = document.getElementById("floor") as HTMLButtonElement; // Get the floor button
  const randomBtn = document.getElementById("random") as HTMLButtonElement;
  const cubeBtn = document.getElementById("cube") as HTMLButtonElement;
  const inverseBtn = document.getElementById("inverse") as HTMLButtonElement;

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const buttonText = button.textContent;

            // ... (Existing button handling logic)
            //Ans button functionality
            
            if (buttonText === "Cube") {
                // ... existing cube logic
            } else if (buttonText === "1/x") {
                try {
                    const num = parseFloat(currentExpression);
                    currentExpression = (1/num).toString();
                    display.value = currentExpression;
                } catch (error) {
                    display.value = "Error";
                    currentExpression = "";
                }
            } else if (buttonText === "Ans") {
                // ... existing Ans logic
            } else if (buttonText === "MS") {
                // ... existing MS logic
            } else if (buttonText === "MR") {
                // ... existing MR logic
            } else if (buttonText === "MC") {
                // ... existing MC logic
            // ... other button logic
            }
        });
    });

    // ... existing historyBtn and clearHistoryBtn logic
});
