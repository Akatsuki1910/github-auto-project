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
 // 10進数から2進数への変換ボタンを追加
    const decimalToBinaryButton = document.getElementById("decimal-binary") as HTMLButtonElement;
    decimalToBinaryButton.addEventListener("click", () => {
      const decimalValue = parseInt(display.value);
      if (!isNaN(decimalValue)) {
          const binaryValue = decimalValue.toString(2);
          display.value = binaryValue;
          currentExpressionDisplay.textContent = `${decimalValue}(10) = ${binaryValue}(2)`;
          history.push(`${decimalValue}(10) = ${binaryValue}(2)`);

          updateHistoryDisplay();
      } else {
          display.value = "Invalid decimal input";
          currentExpressionDisplay.textContent = "Invalid decimal input";
      }
  });
// 10進数から16進数への変換ボタンを追加
const decimalToHexadecimalButton = document.getElementById("decimal-hexadecimal") as HTMLButtonElement;
decimalToHexadecimalButton.addEventListener("click", () => {
    const decimalValue = parseInt(display.value);
    if (!isNaN(decimalValue)) {
        const hexadecimalValue = decimalValue.toString(16);
        display.value = hexadecimalValue;
        currentExpressionDisplay.textContent = `${decimalValue}(10) = ${hexadecimalValue}(16)`;
        history.push(`${decimalValue}(10) = ${hexadecimalValue}(16)`);
        updateHistoryDisplay();
    } else {
        display.value = "Invalid decimal input";
        currentExpressionDisplay.textContent = "Invalid decimal input";
    }
});

    const historyDisplay = document.getElementById("history-display") as HTMLDivElement;
    function updateHistoryDisplay() {
        historyDisplay.innerHTML = history.join('<br>');
    }
});
