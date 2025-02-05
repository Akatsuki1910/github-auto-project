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

    const signButton = document.getElementById("sign") as HTMLButtonElement;
    signButton.addEventListener("click", () => {
        try {
            const num = parseFloat(currentInput);
            currentInput = Math.sign(num).toString();
            display.value = currentInput;
        } catch (error) {
            console.error("Error calculating sign:", error);
            display.value = "Error";
        }
    });
    const openNewWindowButton = document.getElementById("open-new-window") as HTMLButtonElement;
    openNewWindowButton.addEventListener("click", () => {
        window.open("https://www.example.com", "_blank");
    });
    const exitButton = document.getElementById("exit") as HTMLButtonElement;
    exitButton.addEventListener("click",()=>{
        window.close();
    })
    const exp2Button = document.getElementById("exp2") as HTMLButtonElement;
    exp2Button.addEventListener("click", () => {
      try {
        const num = parseFloat(currentInput);
        currentInput = Math.pow(2, num).toString();
        display.value = currentInput;
      } catch (error) {
        console.error("Error calculating 2^x:", error);
        display.value = "Error";
      }
    });
    const randomIntButton = document.getElementById("random-int") as HTMLButtonElement;
    randomIntButton.addEventListener("click", () => {
        currentInput = Math.floor(Math.random() * 100).toString(); // Generates random integer between 0 and 99
        display.value = currentInput;
    });
    // ... (Rest of the existing code)
});

// ... (rest of the code)