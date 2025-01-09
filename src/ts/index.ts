// ... (Existing Code)
let lastAnswer = 0;
let memory = 0;

window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code and variables)
    // ... other existing variables
    // ... (Existing buttons)
    // ... existing buttons
    const ceilButton = document.getElementById("ceil") as HTMLButtonElement;

    // ... other event listeners

    // ... Existing code for other buttons

    // ... (Existing event listeners)

    ceilButton.addEventListener("click", () => {
        if (display.value) {
            display.value = Math.ceil(eval(display.value)).toString();
        }
    });

    // ... (Existing Event Listeners)
});
