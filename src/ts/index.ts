// ... (Existing Code)
let lastAnswer = 0;
let memory = 0;
let isRadian = true; // ラジアンモードフラグ

window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code and variables)
    // ... other existing variables
    // ... (Existing buttons)
    // ... existing buttons
    const degRadButton = document.getElementById("deg-rad") as HTMLButtonElement;
    const display = document.getElementById("display") as HTMLInputElement;
    const lnButton = document.getElementById("ln") as HTMLButtonElement;
    const base2LogButton = document.getElementById("base-2-log") as HTMLButtonElement;
    const tenToThePowerOfXButton = document.getElementById("ten-to-the-power-of-x") as HTMLButtonElement;

    // ... other event listeners

    // ... Existing code for other buttons

    // ... (Existing event listeners)

    degRadButton.addEventListener("click", () => {
        isRadian = !isRadian;
        degRadButton.textContent = isRadian ? "Rad" : "Deg";
    });

    // ... (Existing trigonometric functions)

    lnButton.addEventListener("click", () => {
        if (display.value) {
            display.value = Math.log(parseFloat(display.value)).toString();
        }
    });

    base2LogButton.addEventListener("click", () => {
        if (display.value) {
            display.value = (Math.log2(parseFloat(display.value))).toString();
        }
    });

    tenToThePowerOfXButton.addEventListener("click", () => {
        if (display.value) {
            display.value = (10 ** parseFloat(display.value)).toString();
        }
    });
    // ... Other button event listeners
});