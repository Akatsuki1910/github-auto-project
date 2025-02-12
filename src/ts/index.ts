// ... (Existing code)
const display = document.getElementById("display") as HTMLInputElement;
let currentInput = "";
let currentExpression = "";
const currentExpressionDisplay = document.getElementById("currentExpressionDisplay") as HTMLDivElement;
const historyDiv = document.getElementById("history") as HTMLDivElement;
const historyArr: string[] = [];
let lastAnswer = 0;
let memoryValue = 0;
let displayColor = "black";

window.addEventListener("DOMContentLoaded", () => {
    // ... existing code

    const toggleDisplayColorButton = document.getElementById("toggle-display-color") as HTMLButtonElement;
    toggleDisplayColorButton.addEventListener('click', () => {
        displayColor = displayColor === "black" ? "red" : "black";
        display.style.color = displayColor;
    });

    // ... other existing event listeners
       const duplicateButton = document.getElementById("duplicate") as HTMLButtonElement;
    duplicateButton.addEventListener('click', () => {
        currentInput = currentInput.concat(currentInput);
        display.value = currentInput;
    });
    // ... other event listeners
    const lnButton = document.getElementById("ln") as HTMLButtonElement;
    lnButton.addEventListener('click', () => {
        try {
            const num = parseFloat(currentInput);
            currentInput = Math.log(num).toString();
            display.value = currentInput;
        } catch (error) {
            display.value = "Error";
        }
    });

    const exitButton = document.getElementById("exit") as HTMLButtonElement;
    exitButton.addEventListener('click',()=>{
        window.close();
    })

    const exp10Button = document.getElementById("exp10") as HTMLButtonElement;
    exp10Button.addEventListener('click', () => {
        try {
            currentInput = Math.pow(10, parseFloat(currentInput)).toString();
            display.value = currentInput;
        } catch (error) {
            display.value = "Error";
        }
    });
        const exp2Button = document.getElementById("exp2") as HTMLButtonElement;
    exp2Button.addEventListener('click', () => {
        try {
            currentInput = Math.pow(2, parseFloat(currentInput)).toString();
            display.value = currentInput;
        } catch (error) {
            display.value = "Error";
        }
    });
    const resetButton = document.getElementById("reset") as HTMLButtonElement;
    resetButton.addEventListener('click', () => {
        currentInput = "";
        currentExpression = "";
        display.value = "";
        currentExpressionDisplay.textContent = "";
        historyArr.length = 0;
        historyDiv.innerHTML = "";
        lastAnswer = 0;
        memoryValue = 0;
    });

    const copyButton = document.getElementById("copy") as HTMLButtonElement;
    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(display.value).then(() => {
            alert('Copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    });

    const inverseSinButton = document.getElementById("inverse-sin") as HTMLButtonElement;
    inverseSinButton.addEventListener('click', () => {
        try {
            currentInput = Math.asin(parseFloat(currentInput)).toString();
            display.value = currentInput;
        } catch (error) {
            display.value = "Error";
        }
    });
});