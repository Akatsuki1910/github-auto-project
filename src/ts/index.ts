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
 // ... existing code

// 立方根ボタン
// ... existing code for cube root button

// n乗根ボタンの追加
// ... existing code for nth-root button

// log10ボタンの追加
// ... existing code for log10 button

// 指数関数ボタンの追加
// ... existing code for exponent button

// 絶対値ボタンの追加
const absButton = document.getElementById("abs") as HTMLButtonElement;
absButton.addEventListener("click", () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = Math.abs(currentValue);
        display.value = result.toString();
        currentExpressionDisplay.textContent = `|${currentValue}| = ${result}`;
        history.push(`|${currentValue}| = ${result}`);
        updateHistoryDisplay();
    } else {
        display.value = "Invalid input";
        currentExpressionDisplay.textContent = "Invalid input";
    }
});

// メモリーストア機能を追加
let memory = 0;
const memoryStoreButton = document.getElementById("memory-store") as HTMLButtonElement;
memoryStoreButton.addEventListener("click", () => {
  const currentValue = parseFloat(display.value);
  if (!isNaN(currentValue)) {
    memory = currentValue;
    currentExpressionDisplay.textContent = `M = ${memory}`;
        history.push(`M = ${memory}`);
        updateHistoryDisplay();
  }
});

// M+％機能の追加
const memoryPlusPercentButton = document.getElementById("memory-plus-percent") as HTMLButtonElement;
memoryPlusPercentButton.addEventListener("click", () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const percentageIncrease = currentValue / 100;
        memory += memory * percentageIncrease;
        display.value = memory.toString();
        currentExpressionDisplay.textContent = `M + ${currentValue}% = ${memory}`;
        history.push(`M + ${currentValue}% = ${memory}`);
        updateHistoryDisplay();
    }
});

// M-％機能の追加
const memoryMinusPercentButton = document.getElementById("memory-minus-percent") as HTMLButtonElement;
memoryMinusPercentButton.addEventListener("click", () => {
  const currentValue = parseFloat(display.value);
  if (!isNaN(currentValue)) {
    const percentageDecrease = currentValue / 100;
    memory -= memory * percentageDecrease;
    display.value = memory.toString();
    currentExpressionDisplay.textContent = `M - ${currentValue}% = ${memory}`;
    history.push(`M - ${currentValue}% = ${memory}`);
    updateHistoryDisplay();
  }
});

    const historyDisplay = document.getElementById("history-display") as HTMLDivElement;
    function updateHistoryDisplay() {
        historyDisplay.innerHTML = history.join('<br>');
    }
});
