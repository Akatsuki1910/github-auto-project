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
    const display = document.getElementById("display") as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById("currentExpressionDisplay") as HTMLDivElement;
    const toggleThemeBtn = document.getElementById("toggleTheme") as HTMLButtonElement;
    const memoryPlusBtn = document.getElementById("memoryPlus") as HTMLButtonElement;
    const memorySubtractBtn = document.getElementById("memorySubtract") as HTMLButtonElement; // Added M- button
    const memoryRecallBtn = document.getElementById("memoryRecall") as HTMLButtonElement;
    const memoryClearBtn = document.getElementById("memoryClear") as HTMLButtonElement;
    const history = document.getElementById("history") as HTMLDivElement;
    const historyBtn = document.getElementById("historyBtn") as HTMLButtonElement;
    const clearHistoryBtn = document.getElementById("clearHistory") as HTMLButtonElement; // Added Clear History Button
    let historyData: string[] = [];
    const backspaceBtn = document.getElementById("backspace") as HTMLButtonElement;
    const copyBtn = document.getElementById("copy") as HTMLButtonElement;
    const parenthesesBtn = document.getElementById("parentheses") as HTMLButtonElement;
    const squareRootBtn = document.getElementById("squareRoot") as HTMLButtonElement; // Add square root button
      const squaredBtn = document.getElementById("squared") as HTMLButtonElement;
    // ... other buttons
    const signFlipBtn = document.getElementById("signFlip") as HTMLButtonElement;
    const percentButton = document.getElementById("percent") as HTMLButtonElement;
    const cubeRootBtn = document.getElementById("cubeRoot") as HTMLButtonElement; //Added Cube Root Button

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const buttonText = button.textContent;
            // ... existing logic
          if (buttonText === "√"){
                const currentValue = parseFloat(display.value);
                if (currentValue >=0){
                    display.value = Math.sqrt(currentValue).toString();
                    currentExpression = `√(${currentValue})`; // Store current expression for history
                } else {
                    display.value = "Error: Negative Input";
                }
            }
            if (buttonText === "+/-") {
                const currentValue = parseFloat(display.value);
                display.value = (-currentValue).toString();
                currentExpression = (-currentValue).toString();  // Update currentExpression
                currentExpressionDisplay.textContent = currentExpression;
            }
           // ... other logic
           if (buttonText === "←") {
                display.value = display.value.slice(0, -1);
                currentExpression = currentExpression.slice(0, -1);
                currentExpressionDisplay.textContent = currentExpression; // Update display
            }
           //Added History Feature
            if (buttonText === "="){
              historyData.push(currentExpression + " = " + display.value);
            }
           if (buttonText === "Copy") {
                navigator.clipboard.writeText(display.value).then(() => {
                  // Optional: Provide feedback to the user that the copy was successful
                  console.log('Copied to clipboard:', display.value);
              },
                (err) => {
                  console.error('Failed to copy to clipboard:', err);
                });
           }

            if (buttonText === "( )"){
                // Add logic for parentheses
                if (!currentExpression.includes("(")){
                    currentExpression += "(";
                }else if (currentExpression.includes("(") && !currentExpression.includes(")")){
                    currentExpression += ")";
                }
                currentExpressionDisplay.textContent = currentExpression;
            }
            if (buttonText === "x²") {
                const currentValue = parseFloat(display.value);
                const squaredValue = currentValue * currentValue;
                display.value = squaredValue.toString();
                currentExpression = `${currentValue}²`;
                currentExpressionDisplay.textContent = currentExpression;
            }
            if (buttonText === "!") {
                const currentValue = parseFloat(display.value);
                if (Number.isInteger(currentValue) && currentValue >= 0) {
                  const factorial = calculateFactorial(currentValue);
                  display.value = factorial.toString();
                  currentExpression = `${currentValue}!`; // Update currentExpression for history
                  currentExpressionDisplay.textContent = currentExpression;
                } else {
                  display.value = "Error: Invalid Input for Factorial";
                }
              }

            // Percentage button logic
            if (buttonText === "%") {
              const currentValue = parseFloat(display.value);
              const percentageValue = currentValue / 100;
              display.value = percentageValue.toString();
              currentExpression += "%"; // Or adjust how you want to display it in history
              currentExpressionDisplay.textContent = currentExpression;
            }
             if (buttonText === "∛x") {
                try {
                    const currentValue = parseFloat(display.value);
                    const cubeRootValue = Math.cbrt(currentValue);
                    display.value = cubeRootValue.toString();
                    currentExpression = `∛(${currentValue})`;
                    currentExpressionDisplay.textContent = currentExpression;    
                } catch (error) {
                    display.value = "Invalid Input";
                }
            }
        });
    });
    function calculateFactorial(n: number): number {
      if (n === 0) {
        return 1;
      }
      return n * calculateFactorial(n - 1);
    }

    // ... Existing memory button event listeners

    historyBtn.addEventListener("click", () => {
      if (history.style.display === "none" || history.style.display === ""){
          history.style.display = "block";
          history.innerHTML = historyData.map(item => `<p>${item}</p>`).join(''); // Display history data
      } else {
          history.style.display = "none";
      }
  });

  clearHistoryBtn.addEventListener("click", () => {
      historyData = []; //Added function to clear history
      history.innerHTML = ""; // Clear the displayed history
  });

    // ... existing functions
});
