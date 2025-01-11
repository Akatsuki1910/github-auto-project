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
const nthRootButton = document.getElementById("nth-root") as HTMLButtonElement;
nthRootButton.addEventListener("click", () => {
  const currentValue = parseFloat(display.value);
  const rootValue = parseFloat(prompt("何乗根を求めますか？", "2")); // デフォルトは2乗根
  if (!isNaN(currentValue) && !isNaN(rootValue) && rootValue !== 0) {
    const nthRoot = currentValue ** (1/rootValue);
    display.value = nthRoot.toString();
    currentExpressionDisplay.textContent = `${rootValue}√(${currentValue}) = ${nthRoot}`;
    history.push(`${rootValue}√(${currentValue}) = ${nthRoot}`);
    updateHistoryDisplay();
  } else {
    display.value = "Invalid input";
    currentExpressionDisplay.textContent = "Invalid input";
  }
});

// log10ボタンの追加
const log10Button = document.getElementById("log10") as HTMLButtonElement;
log10Button.addEventListener("click", () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue) && currentValue > 0) {
        const result = Math.log10(currentValue);
        display.value = result.toString();
        currentExpressionDisplay.textContent = `log10(${currentValue}) = ${result}`;
        history.push(`log10(${currentValue}) = ${result}`);
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
