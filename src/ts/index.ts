// ... (Existing Code)
let lastAnswer = 0;
let memory = 0;

window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code and variables)
    // ... other existing variables
    // ... (Existing buttons)
    // ... existing buttons
    const ceilButton = document.getElementById("ceil") as HTMLButtonElement;
    const randButton = document.getElementById("rand") as HTMLButtonElement;
    const eButton = document.getElementById("e") as HTMLButtonElement;
    const base10LogButton = document.getElementById("base-10-log") as HTMLButtonElement;

    // ... other event listeners

    // ... Existing code for other buttons

    // ... (Existing event listeners)

    ceilButton.addEventListener("click", () => {
        if (display.value) {
            display.value = Math.ceil(eval(display.value)).toString();
        }
    });

    randButton.addEventListener("click", () => {
        display.value = Math.random().toString();
    });

    eButton.addEventListener("click", () => {
        display.value = Math.E.toString();
    });

    base10LogButton.addEventListener("click", () => {
        if (display.value) {
            display.value = Math.log10(eval(display.value)).toString();
        }
    });

    // ... (Existing Event Listeners)
});
