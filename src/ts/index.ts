// ... (Existing Code)
let lastAnswer = 0;
let memory = 0;

window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code and variables)
    const memoryStoreButton = document.getElementById("memory-store") as HTMLButtonElement;
    const memoryRecallButton = document.getElementById("memory-recall") as HTMLButtonElement;
    const memoryClearButton = document.getElementById("memory-clear") as HTMLButtonElement;
    const lastAnswerButton = document.getElementById("last-answer") as HTMLButtonElement;
    const duplicateButton = document.getElementById("duplicate") as HTMLButtonElement;

    // ... other existing variables
    memoryStoreButton.addEventListener("click", () => {
        if (display.value) {
            memory += parseFloat(display.value);
            display.value = ""; // Clear display after storing value (optional)
            currentExpressionDisplay.textContent = display.value;
        }
    });

    memoryRecallButton.addEventListener("click", () => {
        display.value = memory.toString();
        currentExpressionDisplay.textContent = display.value;
    });

    memoryClearButton.addEventListener("click", () => {
        memory = 0;
        display.value = "";
        currentExpressionDisplay.textContent = "Memory Cleared";

        setTimeout(() =>{
          currentExpressionDisplay.textContent = "";
        }, 500);
        
    });

    lastAnswerButton.addEventListener("click", () => {
        display.value = lastAnswer.toString();
        currentExpressionDisplay.textContent = display.value;    
    });

     duplicateButton.addEventListener("click", () => {
        if (display.value) {
          display.value += display.value; //duplicate the display value
          currentExpressionDisplay.textContent = display.value;    
        }
      });

    // ... existing event listeners

      //Example Calculation (This part is added to ensure lastAnswer is populated for demonstration)
      const calculate = (expression: string) => {
        try {
            const result = eval(expression);
            lastAnswer = result;
            return result;     
         } catch (error) {
           return "Error";
         }
      };

});
