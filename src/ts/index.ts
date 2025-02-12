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
let isNegative = false;

window.addEventListener("DOMContentLoaded", () => {
    // ... existing code

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

    // ... other event listeners
    const signToggleButton = document.getElementById("sign-toggle") as HTMLButtonElement;
    signToggleButton.addEventListener('click',()=>{
        isNegative = !isNegative;
        currentInput = isNegative ? `-${currentInput}`:Math.abs(parseFloat(currentInput)).toString();
        display.value = currentInput;
    })
    const calculatorDiv = document.getElementById("calculator") as HTMLDivElement;
    const toggleCalculatorVisibilityButton = document.getElementById("toggle-calculator-visibility") as HTMLButtonElement;
    toggleCalculatorVisibilityButton.addEventListener('click', () => {
        if (calculatorDiv.style.display === "none") {
            calculatorDiv.style.display = "block";
        } else {
            calculatorDiv.style.display = "none";
        }
    });
const changeFontSizeButton = document.getElementById("change-font-size") as HTMLButtonElement;
let fontSize = 16;
changeFontSizeButton.addEventListener('click', () => {
  fontSize += 2;
  display.style.fontSize = fontSize + "px";
});
const clearDisplayButton = document.getElementById("clear-display") as HTMLButtonElement;
clearDisplayButton.addEventListener('click', () => {
    currentInput = '';
    display.value = '';
});
const toggleBorderRadiusButton = document.getElementById("toggle-border-radius") as HTMLButtonElement;
toggleBorderRadiusButton.addEventListener('click', () => {
    const displayElement = document.getElementById("display") as HTMLInputElement;
    displayElement.style.borderRadius = displayElement.style.borderRadius === "10px" ? "0px" : "10px";
});
const toggleCalculatorThemeButton = document.getElementById("toggle-calculator-theme") as HTMLButtonElement;
let isDarkTheme = false;
toggleCalculatorThemeButton.addEventListener('click', () => {
    isDarkTheme = !isDarkTheme;
    document.body.classList.toggle("dark-theme", isDarkTheme);
});

    // ... existing event listeners
});