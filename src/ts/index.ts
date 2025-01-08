// ... (Existing Code)
let lastAnswer = 0;

window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code and variables)
    const parenthesisOpenButton = document.getElementById("parenthesis-open") as HTMLButtonElement;
    const parenthesisCloseButton = document.getElementById("parenthesis-close") as HTMLButtonElement;
    const ansButton = document.getElementById("ans") as HTMLButtonElement;
    const copyToClipboardButton = document.getElementById("copy-to-clipboard") as HTMLButtonElement;

    parenthesisOpenButton.addEventListener("click", () => {
        display.value += "(";
        currentExpressionDisplay.textContent = display.value;
    });

    parenthesisCloseButton.addEventListener("click", () => {
        display.value += ")";
        currentExpressionDisplay.textContent = display.value;
    });

    ansButton.addEventListener("click", () => {
        display.value += lastAnswer;
        currentExpressionDisplay.textContent = display.value;  
    });

    copyToClipboardButton.addEventListener("click", () => {
        navigator.clipboard.writeText(display.value).then(() => {
            alert("Copied to clipboard!");
        });
    });


    // ... (Rest of existing code)

    equalsButton.addEventListener("click", () => {
        try {
            // ... existing calculation logic

            lastAnswer = result;
        } catch (error) {
            // ... existing error handling
        }
    });
});
