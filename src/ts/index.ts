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
     const historyDiv = document.getElementById("history") as HTMLDivElement;

    // ... other existing variables
 //Clear History Button
    const clearHistoryButton = document.getElementById("clear-history") as HTMLButtonElement;

    clearHistoryButton.addEventListener("click", () => {
        historyDiv.innerHTML = ""; // Clear the history display
        localStorage.removeItem("calculatorHistory"); // Clear history from local storage
    });

    memoryStoreButton.addEventListener("click", () => {
        // ... existing code
    });

    memoryRecallButton.addEventListener("click", () => {
        // ... existing code
    });

    memoryClearButton.addEventListener("click", () => {
        // ... existing code
    });

    lastAnswerButton.addEventListener("click", () => {
        // ... existing code
    });

     duplicateButton.addEventListener("click", () => {
        // ... existing code
      });

    // ... existing event listeners

      //Example Calculation (This part is added to ensure lastAnswer is populated for demonstration)
      const calculate = (expression: string) => {
        // ... existing code
      };

});
