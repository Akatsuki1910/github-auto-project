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
let fontSize = "1.5em";

window.addEventListener("DOMContentLoaded", () => {
    // ... existing code

    // ... other existing event listeners
    // ... other existing event listeners
    // ... other functions (square, cube, factorial, inverse, sign)

    // ... (rest of existing event listeners)

    // ... (rest of existing code)
    //Existing Code for other buttons

    document.getElementById("calculate-cylinder-volume")?.addEventListener("click", () => {
        if (currentInput !== "") {
            const radius = parseFloat(currentInput);
            // Assuming height is fixed for now.  Could be improved by taking height as another input
            const height = 5;
            const volume = Math.PI * Math.pow(radius, 2) * height;
            currentInput = volume.toString();
            display.value = currentInput;
        }
    });

    document.getElementById("calculate-cone-volume")?.addEventListener("click", () => {
        if (currentInput !== "") {
            const radius = parseFloat(currentInput);
            const height = 5; // Fixed height for now
            const volume = (1/3) * Math.PI * Math.pow(radius, 2) * height;
            currentInput = volume.toString();
            display.value = currentInput;
        }
    });
});