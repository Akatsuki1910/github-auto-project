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

// 立方根ボタンの追加
const cubeRootButton = document.getElementById("cube-root") as HTMLButtonElement;
cubeRootButton.addEventListener("click", () => {
  const currentValue = parseFloat(display.value);
  if (!isNaN(currentValue)) {
    const cubeRoot = Math.cbrt(currentValue);
    display.value = cubeRoot.toString();
    currentExpressionDisplay.textContent = `³√(${currentValue}) = ${cubeRoot}`;
    history.push(`³√(${currentValue}) = ${cubeRoot}`);
    updateHistoryDisplay();
  } else {
    display.value = "Invalid input";
    currentExpressionDisplay.textContent = "Invalid input";
  }
});

    const historyDisplay = document.getElementById("history-display") as HTMLDivElement;
    function updateHistoryDisplay() {
        historyDisplay.innerHTML = history.join('<br>');
    }
});

