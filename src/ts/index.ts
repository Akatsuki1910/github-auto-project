// ... (Existing Code)

// ... existing variables and buttons
// ... existing event listeners
// ... existing functions (cube, inverse, round, etc)

// ... (Existing Code)

// ... existing functions

window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code and variables)
    // ... (Existing buttons)
    // ... existing variables
    const copyBtn = document.getElementById("copy") as HTMLButtonElement;
    const fibonacciBtn = document.getElementById("fibonacci") as HTMLButtonElement;
    const exp2Btn = document.getElementById("exp2") as HTMLButtonElement;
    const display = document.getElementById("display") as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById("currentExpressionDisplay") as HTMLDivElement;
    const negateBtn = document.getElementById("negate") as HTMLButtonElement;
    const currentTimeBtn = document.getElementById("currentTime") as HTMLButtonElement;
    const currentDayBtn = document.getElementById("currentDay") as HTMLButtonElement;
    const expm1Btn = document.getElementById("expm1") as HTMLButtonElement;
    const baseConversionBtn = document.getElementById("baseConversion") as HTMLButtonElement;
    let currentExpression = "";

    function fibonacci(n: number): number {
        if (n <= 1) {
            return n;
        }
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
    copyBtn.addEventListener("click", () => {
    const displayValue = display.value;
    navigator.clipboard.writeText(displayValue)
      .then(() => {
        alert("Copied to clipboard: " + displayValue); // Optional: Show a success message
      })
      .catch((error) => {
        console.error("Failed to copy: ", error);
      });
  });

    // ... existing code

     negateBtn.addEventListener("click", () => {
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            display.value = (-currentValue).toString();
            currentExpression = display.value; // Update currentExpression
            currentExpressionDisplay.textContent = currentExpression;
        }
    });
currentTimeBtn.addEventListener("click", () => {
    const now = new Date();
    const currentTime = now.toLocaleTimeString();
    display.value = currentTime; 
    currentExpression = currentTime;
    currentExpressionDisplay.textContent = currentExpression; 
});

currentDayBtn.addEventListener("click", () => {
    const now = new Date();
    const currentDay = now.toLocaleDateString();
    display.value = currentDay;
    currentExpression = currentDay; // Update currentExpression
    currentExpressionDisplay.textContent = currentExpression; 
});

expm1Btn.addEventListener("click", () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = Math.expm1(currentValue);
        display.value = result.toString();
        currentExpression = `expm1(${currentValue})`;
        currentExpressionDisplay.textContent = currentExpression;
    }
});

baseConversionBtn.addEventListener("click", () => {
    const currentValue = display.value;
    const base = prompt("Enter the base to convert to (2-36):", "2");
    if (base !== null) {
      const parsedBase = parseInt(base, 10);
      if (parsedBase >= 2 && parsedBase <= 36) {
        try {
          const convertedValue = parseInt(currentValue, 10).toString(parsedBase);
          display.value = convertedValue;
          currentExpression = `base${parsedBase}(${currentValue})`;
          currentExpressionDisplay.textContent = currentExpression;
        } catch (error) {
          alert("Invalid input for base conversion.");
        }
      } else {
        alert("Invalid base. Please enter a number between 2 and 36.");
      }
    }
  });

    // ... (Existing Event Listeners)
});
