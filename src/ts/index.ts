// ... (Existing Code)
let lastAnswer = 0;

window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code and variables)
    const parenthesisOpenButton = document.getElementById("parenthesis-open") as HTMLButtonElement;
    const parenthesisCloseButton = document.getElementById("parenthesis-close") as HTMLButtonElement;
    const ansButton = document.getElementById("ans") as HTMLButtonElement;
    const copyToClipboardButton = document.getElementById("copy-to-clipboard") as HTMLButtonElement;
    const showHistoryButton = document.getElementById("show-history") as HTMLButtonElement;
    const expressionHistoryDiv = document.getElementById("expression-history") as HTMLDivElement;

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

    showHistoryButton.addEventListener("click", () => {
        if (expressionHistoryDiv.style.display === "none") {
            expressionHistoryDiv.style.display = "block";
        } else {
            expressionHistoryDiv.style.display = "none";
        }
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
