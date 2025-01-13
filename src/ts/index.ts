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
    const memoryPlusBtn = document.getElementById("memoryPlus") as HTMLButtonElement;
    const memorySubtractBtn = document.getElementById("memorySubtract") as HTMLButtonElement; // Added M- button
    const memoryRecallBtn = document.getElementById("memoryRecall") as HTMLButtonElement;
    const memoryClearBtn = document.getElementById("memoryClear") as HTMLButtonElement;
        const memoryPlusTenPercentBtn = document.getElementById("memoryPlusTenPercent") as HTMLButtonElement;
    const history = document.getElementById("history") as HTMLDivElement;
    const historyBtn = document.getElementById("historyBtn") as HTMLButtonElement;
    const clearHistoryBtn = document.getElementById("clearHistory") as HTMLButtonElement; // Added Clear History Button
    let historyData: string[] = [];
    const backspaceBtn = document.getElementById("backspace") as HTMLButtonElement;
    const copyBtn = document.getElementById("copy") as HTMLButtonElement;
    const parenthesesBtn = document.getElementById("parentheses") as HTMLButtonElement;
    const squareRootBtn = document.getElementById("squareRoot") as HTMLButtonElement; // Add square root button
      const squaredBtn = document.getElementById("squared") as HTMLButtonElement;
    const ansBtn = document.getElementById("ans") as HTMLButtonElement;
    // ... other buttons
    const signFlipBtn = document.getElementById("signFlip") as HTMLButtonElement;
    const percentButton = document.getElementById("percent") as HTMLButtonElement;
    const cubeRootBtn = document.getElementById("cubeRoot") as HTMLButtonElement; //Added Cube Root Button
       const exitBtn = document.getElementById("exit") as HTMLButtonElement; // Added exit button

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const buttonText = button.textContent;
            // ... existing logic
          if (buttonText === "√"){
                // ... (existing square root logic)
            }
            if (buttonText === "+/-") {
                // ... (existing +/- logic)
            }
           // ... other logic
           if (buttonText === "←") {
                // ... (existing backspace logic)
            }
           //Added History Feature
            if (buttonText === "="){
              historyData.push(currentExpression + " = " + display.value);
              lastAnswer = parseFloat(display.value); // Store the last answer
            }
           if (buttonText === "Copy") {
              // ... (existing copy logic)
           }

           if (buttonText === "( )"){
               // ... (existing parentheses logic)
            }
            if (buttonText === "x²") {
              // ... (existing x² logic)
            }
            if (buttonText === "!") {
               // ... (existing factorial logic)
              }

            // Percentage button logic
            if (buttonText === "%") {
               // ... (existing percentage logic)
            }
             if (buttonText === "∛x") {
                 // ... (existing cube root logic)
            }
            if (buttonText === "Ans") {
                display.value = lastAnswer.toString();
                currentExpression += lastAnswer.toString();
                currentExpressionDisplay.textContent = currentExpression; 
            }
                        if (buttonText === "M+10%") {
                memoryValue += memoryValue * 0.1;
            }
            if (buttonText === "Exit") {
                window.close(); // Close the current window/tab
            }
        });
    });
    // ... (Existing functions)
});

