// ... (Existing code)
const display = document.getElementById("display") as HTMLInputElement;
let currentInput = "";
let currentExpression = "";
const currentExpressionDisplay = document.getElementById("currentExpressionDisplay") as HTMLDivElement;
const historyDiv = document.getElementById("history") as HTMLDivElement;
const historyArr: string[] = [];
let lastAnswer = 0;
let memoryValue = 0;

window.addEventListener("DOMContentLoaded", () => {
    // existing code
    // ... (Other button event listeners)

    // ... other button listeners
    // ... existing code
    const duplicateButton = document.getElementById("duplicate") as HTMLButtonElement;
    duplicateButton.addEventListener("click", () => {
        if (currentInput) {
            currentInput += currentInput;
            display.value = currentInput;
        }
    });

    // ... (Other button event listeners)
    //Reset Button
    const resetButton = document.getElementById("reset") as HTMLButtonElement;
    resetButton.addEventListener("click", () => {
        currentInput = "";
        currentExpression = "";
        display.value = "";
        currentExpressionDisplay.textContent = "";
    });
    const plusMinusButton = document.getElementById("plus-minus") as HTMLButtonElement;
    plusMinusButton.addEventListener("click", () => {
        if (currentInput) {
            currentInput = (parseFloat(currentInput) * -1).toString();
            display.value = currentInput;
        }
    });
    const allClearButton = document.getElementById("all-clear") as HTMLButtonElement;
    allClearButton.addEventListener("click", () => {
        currentInput = "";
        currentExpression = "";
        display.value = "0"; // Set display to 0
        historyArr.length = 0; // Clear history array
        historyDiv.innerHTML = ""; // Clear history display
        currentExpressionDisplay.textContent = "";

    });
    const copyButton = document.getElementById("copy") as HTMLButtonElement;
    copyButton.addEventListener("click", () => {
        if (display.value) {
            navigator.clipboard.writeText(display.value)
                .then(() => {
                    const messageContainer = document.getElementById("message-container") as HTMLDivElement;
                    messageContainer.textContent = "Copied to clipboard!";
                    setTimeout(() => {
                        messageContainer.textContent = "";
                    }, 2000);
                })
                .catch(err => {
                    console.error("Failed to copy: ", err);
                });
        }
    });
    //Parentheses buttons
    const percentageButton = document.getElementById("percentage") as HTMLButtonElement;
    percentageButton.addEventListener("click", () => {
        if (currentInput) {
            currentInput = (parseFloat(currentInput) / 100).toString();
            display.value = currentInput;
        }
    });
    // ... existing code
    const calculateButton = document.getElementById("calculate") as HTMLButtonElement;
    calculateButton.addEventListener("click", () => {
        try {
            currentInput = eval(currentInput);
            display.value = currentInput;
        } catch (error) {
            display.value = "Error";
        }
    });
    const openNewTabButton = document.getElementById("open-new-tab") as HTMLButtonElement;
    openNewTabButton.addEventListener("click", () => {
        window.open('https://www.google.com', '_blank');
    });
    const leftArrowButton = document.getElementById("left-arrow") as HTMLButtonElement;
    leftArrowButton.addEventListener("click", () => {
      currentInput = currentInput.slice(0,-1);
      display.value = currentInput; 
    });
    const logButton = document.getElementById("log-button") as HTMLButtonElement;
  logButton.addEventListener("click", () => {
    try {
        currentInput = Math.log1p(parseFloat(currentInput)).toString();
      display.value = currentInput;
    } catch (error) {
      display.value = "Error";
    }
  });
    const eulerButton = document.getElementById("euler") as HTMLButtonElement;
    eulerButton.addEventListener("click",()=>{
        currentInput += Math.E.toString();
        display.value = currentInput;
    })
  const degButton = document.getElementById("deg") as HTMLButtonElement;
  degButton.addEventListener("click", () => {
    if (currentInput) {
      currentInput = (parseFloat(currentInput) * (180 / Math.PI)).toString();
      display.value = currentInput;
    }
  });
    // ... rest of the code
});

// ... (rest of the code)