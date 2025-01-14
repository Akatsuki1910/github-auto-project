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
    const history = document.getElementById("history") as HTMLDivElement;
    const historyBtn = document.getElementById("historyBtn") as HTMLButtonElement;
    const clearHistoryBtn = document.getElementById("clearHistory") as HTMLButtonElement; // Added Clear History Button
    let historyData: string[] = [];
    const lastAnswerBtn = document.getElementById("lastAnswer") as HTMLButtonElement; // Add Last Answer Button
    // ... other buttons
    const absBtn = document.getElementById("abs") as HTMLButtonElement; // Absolute Value Button
    const floorBtn = document.getElementById("floor") as HTMLButtonElement; // Floor Button
    const inverseBtn = document.getElementById("inverse") as HTMLButtonElement; // Inverse Button
     const randBtn = document.getElementById("rand") as HTMLButtonElement; // Rand Button
     const ceilBtn = document.getElementById("ceil") as HTMLButtonElement; // Ceil Button
     const eBtn = document.getElementById("e") as HTMLButtonElement; // e Button
     const zeroButton = document.getElementById("0") as HTMLButtonElement;
     const ansBtn = document.getElementById("ans") as HTMLButtonElement; // Ans Button
     const modBtn = document.getElementById("mod") as HTMLButtonElement; // Modulo Button

    function factorial(n: number): number {
        if (n === 0) {
            return 1;
        }
        return n * factorial(n - 1);
    }

    const buttons = Array.from(document.querySelectorAll('button'));

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const buttonText = button.textContent;
            // ... existing logic
           if (buttonText === "="){
              historyData.push(currentExpression + " = " + display.value);
              lastAnswer = parseFloat(display.value); // Store the last answer
           }
            // ... (Existing logic for other buttons)
           if (buttonText === "%") {
                currentExpression += "% ";
                currentExpressionDisplay.textContent = currentExpression; 
           }
            // Existing code for other buttons...
        });
    });

    // ... (Existing Event Listeners)
});