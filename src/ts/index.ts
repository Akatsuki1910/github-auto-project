// ... (Existing Code)
let lastAnswer = 0;
let memory = 0;

window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code and variables)
    // ... other existing variables
    // ... (Existing buttons)
    const backspaceButton = document.getElementById("backspace") as HTMLButtonElement;
    const equalsButton = document.getElementById("equals") as HTMLButtonElement;
    const display = document.getElementById("display") as HTMLInputElement;
    const historyDiv = document.getElementById("history") as HTMLDivElement;
    const clearHistoryButton = document.getElementById("clear-history") as HTMLButtonElement;
    const plusMinusButton = document.getElementById("plus-minus") as HTMLButtonElement;
    const squareRootButton = document.getElementById("square-root") as HTMLButtonElement;
    const logButton = document.getElementById("log") as HTMLButtonElement;
    const expButton = document.getElementById("exp") as HTMLButtonElement;
    const cubeButton = document.getElementById("cube") as HTMLButtonElement;
    const reciprocalButton = document.getElementById("reciprocal") as HTMLButtonElement;
    const powerButton = document.getElementById("power") as HTMLButtonElement;
    const sinButton = document.getElementById("sin") as HTMLButtonElement;
    const cosButton = document.getElementById("cos") as HTMLButtonElement;
    const tanButton = document.getElementById("tan") as HTMLButtonElement;
    const roundButton = document.getElementById("round") as HTMLButtonElement;
    const absButton = document.getElementById("abs") as HTMLButtonElement;

    // ... other event listeners

    // ... Existing code for other buttons

    // ... (Existing event listeners)

    //Absolute Value
    absButton.addEventListener("click", () => {
        if (display.value) {
            display.value = Math.abs(eval(display.value)).toString();
        }
    });

    powerButton.addEventListener("click", () => {
        if (display.value) {
            display.value += "**";
        }
    });

    sinButton.addEventListener("click", () => {
        if (display.value) {
            display.value = Math.sin(eval(display.value)).toString();
        }
    });

    cosButton.addEventListener("click", () => {
        if (display.value) {
            display.value = Math.cos(eval(display.value)).toString();
        }
    });

    tanButton.addEventListener("click", () => {
        if (display.value) {
            display.value = Math.tan(eval(display.value)).toString();
        }
    });

    roundButton.addEventListener("click", () => {
        if (display.value) {
            display.value = Math.round(eval(display.value)).toString();
        }
    });

    // ... (Existing Event Listeners)
});
