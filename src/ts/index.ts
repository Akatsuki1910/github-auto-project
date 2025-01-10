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

    // ... other event listeners

    // ... Existing code for other buttons

    // ... (Existing event listeners)

    degRadButton.addEventListener("click", () => {
        isRadian = !isRadian;
        degRadButton.textContent = isRadian ? "Rad" : "Deg";
    });

    sinButton.addEventListener("click", () => {
      if (display.value) {
        const value = eval(display.value);
        display.value = (isRadian ? Math.sin(value) : Math.sin(value * Math.PI / 180)).toString();
      }
    });

    cosButton.addEventListener("click", () => {
      if (display.value) {
        const value = eval(display.value);
        display.value = (isRadian ? Math.cos(value) : Math.cos(value * Math.PI / 180)).toString();
      }
    });

    tanButton.addEventListener("click", () => {
      if (display.value) {
        const value = eval(display.value);
        display.value = (isRadian ? Math.tan(value) : Math.tan(value * Math.PI / 180)).toString();
      }
    });

    lnButton.addEventListener("click", () => {
        if (display.value) {
            display.value = Math.log(parseFloat(display.value)).toString();
        }
    });
    // ... Other button event listeners
});
