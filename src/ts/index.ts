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
    document.getElementById("calculate-perimeter")?.addEventListener("click", () => {
        if (currentInput !== "") {
            const radius = parseFloat(currentInput);
            const perimeter = 2 * Math.PI * radius;
            currentInput = perimeter.toString();
            display.value = currentInput;
        }
    });

    document.getElementById("calculate-volume")?.addEventListener("click", () => {
        if (currentInput !== "") {
            const radius = parseFloat(currentInput);
            const volume = (4/3) * Math.PI * Math.pow(radius, 3);
            currentInput = volume.toString();
            display.value = currentInput;        
        }
    });
     document.getElementById("calculate-circumference")?.addEventListener("click", () => {
        if (currentInput !== "") {
            const radius = parseFloat(currentInput);
            const circumference = 2 * Math.PI * radius;
            currentInput = circumference.toString();
            display.value = currentInput;
        }
    });

    document.getElementById("calculate-sphere-surface-area")?.addEventListener("click", () => {
        if (currentInput !== "") {
            const radius = parseFloat(currentInput);
            const surfaceArea = 4 * Math.PI * Math.pow(radius, 2);
            currentInput = surfaceArea.toString();
            display.value = currentInput;
        }
    });
    document.getElementById("calculate-cube-surface-area")?.addEventListener("click", () => {
        if (currentInput !== "") {
            const side = parseFloat(currentInput);
            const surfaceArea = 6 * Math.pow(side, 2);
            currentInput = surfaceArea.toString();
            display.value = currentInput;
        }
    });
    // Existing code for other buttons
});