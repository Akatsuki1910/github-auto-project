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

    // ... other event listeners

    // ... Existing code for other buttons

    // ... (Existing event listeners)

    powerButton.addEventListener("click", () => {
        if (display.value) {
            display.value += "**";
        }
    });


    // ... (Existing Event Listeners)
});