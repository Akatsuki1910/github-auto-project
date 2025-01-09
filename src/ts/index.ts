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

    // ... other event listeners

    // ... Existing code for other buttons

    backspaceButton.addEventListener("click", () => {
        display.value = display.value.slice(0, -1);
    });

    equalsButton.addEventListener("click", () => {
        try {
            lastAnswer = eval(display.value);
            display.value = lastAnswer.toString();
            historyDiv.innerHTML += `${display.value}<br>`;
        } catch (error) {
            display.value = "Error";
            historyDiv.innerHTML += "Error<br>";
        }
    });

    clearHistoryButton.addEventListener("click", () => {
        historyDiv.innerHTML = "";
    });

    plusMinusButton.addEventListener("click", () => {
        if (display.value) {
            display.value = (parseFloat(display.value) * -1).toString();
        }
    });

    squareRootButton.addEventListener("click", () => {
        if (display.value) {
            const num = parseFloat(display.value);
            if (num >= 0) {
                display.value = Math.sqrt(num).toString();
            } else {
                display.value = "Invalid Input";
            }
        }
    });

    logButton.addEventListener("click", () => {
        if (display.value) {
            display.value = Math.log10(parseFloat(display.value)).toString();
        }
    });

    expButton.addEventListener("click", () => {
        if (display.value) {
            display.value = Math.exp(parseFloat(display.value)).toString();
        }
    });
});
