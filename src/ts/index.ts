// ... (Existing Code)

// ... existing variables and buttons
// ... existing event listeners
// ... existing functions (cube, inverse, round, etc)

// ... (Existing Code)

// ... existing functions

window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code and variables)
    // ... (Existing buttons)
    // ... existing variables and buttons
    // ... existing event listeners
    // ... existing functions

 // 2進数から10進数への変換ボタン
    const binaryToDecimalButton = document.getElementById("binary-decimal") as HTMLButtonElement;
    binaryToDecimalButton.addEventListener("click", () => {
        const binaryValue = display.value;
        const decimalValue = parseInt(binaryValue, 2);
        if (!isNaN(decimalValue)) {
            display.value = decimalValue.toString();
            currentExpressionDisplay.textContent = `${binaryValue}(2) = ${decimalValue}(10)`;
            history.push(`${binaryValue}(2) = ${decimalValue}(10)`);
            updateHistoryDisplay();
        } else {
            display.value = "Invalid binary input";
            currentExpressionDisplay.textContent = "Invalid binary input";
        }
    });

    const historyDisplay = document.getElementById("history-display") as HTMLDivElement;
    function updateHistoryDisplay() {
        historyDisplay.innerHTML = history.join('<br>');
    }
});