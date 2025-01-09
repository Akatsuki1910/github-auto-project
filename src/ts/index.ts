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

    // ... other event listeners

    // ... Existing code for other buttons

    backspaceButton.addEventListener("click", () => {
        display.value = display.value.slice(0, -1);
    });

    equalsButton.addEventListener("click", () => {
        try {
            lastAnswer = eval(display.value);
            display.value = lastAnswer.toString();
        } catch (error) {
            display.value = "Error";
        }
    });
});
