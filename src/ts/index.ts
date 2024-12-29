window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code)

    const toggleThemeButton = document.getElementById("toggle-theme") as HTMLButtonElement;
    toggleThemeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
    });

    // ... (Existing Code)
    const memoryStoreButton = document.getElementById("memory-store") as HTMLButtonElement;
    const memoryClearButton = document.getElementById("memory-clear") as HTMLButtonElement;
    const memRecallButton = document.getElementById("mem-recall") as HTMLButtonElement;
    let memoryValue: number | null = null;

    memoryStoreButton.addEventListener("click", () => {
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            memoryValue = currentValue;
            display.value = "Stored: " + memoryValue;
        } else {
            display.value = "Invalid input";
        }
    });

    memoryClearButton.addEventListener("click", () => {
        memoryValue = null;
        display.value = "Memory Cleared";
    });

    memRecallButton.addEventListener("click", () => {
        if (memoryValue !== null) {
            display.value = memoryValue.toString();
        } else {
            display.value = "No value stored";
        }
    });
    let lastAnswer: number | null = null;
    const lastAnswerButton = document.getElementById("last-answer") as HTMLButtonElement;
    lastAnswerButton.addEventListener("click", () => {
      if (lastAnswer !== null) {
          display.value = lastAnswer.toString();
      } else {
          display.value = "No previous answer";
      }
    });
    // ... existing code
    const equalButton = document.getElementById("=") as HTMLButtonElement;
    equalButton.addEventListener("click", () => {
            try {
                const result = eval(display.value);
                display.value = result.toString();
                lastAnswer = result;
            }
            catch (error) {
                display.value = "Error";
            }
    });

         const decimalButton = document.getElementById("decimal") as HTMLButtonElement;
    const display = document.getElementById("display") as HTMLInputElement;
        decimalButton.addEventListener('click', () => {
        if (!display.value.includes('.')) {
            display.value += '.';
        }
    });

});
