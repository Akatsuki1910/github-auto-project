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

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const buttonText = button.textContent;

            // ... (Existing button handling logic)
            //Ans button functionality
            if (buttonText === "Ans") {
                currentExpression += previousAnswer;
                display.value = currentExpression;
            //Memory Store
            } else if (buttonText === "MS") {
                memoryValue = parseFloat(display.value);
            //Memory Recall
            } else if (buttonText === "MR") {
                currentExpression += memoryValue;
                display.value = currentExpression;      
            //Memory Clear
            } else if (buttonText === "MC") {
                memoryValue = 0;   
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
            } else if (buttonText === "Round"){
                currentExpression = Math.round(parseFloat(currentExpression)).toString();
                display.value = currentExpression;
            } else if (buttonText === "sin") {
                // ... existing sin logic
            } else if (buttonText === "cos") {
                // ... existing cos logic
            } else if (buttonText === "tan") {
                // ... existing tan logic
            } else if (buttonText === "|x|") {
                // ... existing abs logic
            } else if (buttonText === "Floor") {
                currentExpression = Math.floor(parseFloat(currentExpression)).toString();
                display.value = currentExpression;
            } else if (buttonText === "Random") {
                currentExpression += Math.random();
                display.value = currentExpression;
            } else if (buttonText === "=") {
              // ... existing equals logic
            }
            // ... rest of button logic

            // ... existing functions
        });
    });

    // ... existing historyBtn and clearHistoryBtn logic
});