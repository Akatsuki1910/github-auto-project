// ... (Existing Code)
let lastAnswer = 0;
let memory = 0;
let isRadian = true; // ラジアンモードフラグ
let isKeyboardInputEnabled = false; // キーボード入力有効フラグ
let history: string[] = [];
let isHistoryVisible = false; // 履歴表示状態フラグ

window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code and variables)
    // ... (Existing buttons)
    // ... existing variables and buttons
    // ... existing event listeners
    const signChangeButton = document.getElementById("sign-change") as HTMLButtonElement;
    signChangeButton.addEventListener("click", () => {
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            const changedValue = -currentValue;
            display.value = changedValue.toString();
            currentExpressionDisplay.textContent = `-${currentValue}`;
            history.push(`-${currentValue} = ${changedValue}`);
        }
    });
    // ... existing functions (cube, inverse, round, etc)
    const calculateEButton = document.getElementById("calculate-e") as HTMLButtonElement;
    calculateEButton.addEventListener("click", () => {
        display.value = Math.E.toString();
        currentExpressionDisplay.textContent = "e";
    });

    const duplicateButton = document.getElementById("duplicate") as HTMLButtonElement;
    duplicateButton.addEventListener("click", () => {
        const currentValue = display.value;
        if (currentValue) {
            display.value = currentValue + currentValue;  // Duplicate the current display value   
        }
    });

    const swapButton = document.getElementById("swap") as HTMLButtonElement;
    swapButton.addEventListener("click", () => {
        const currentValue = display.value;
        if (currentValue && currentValue.length >= 2) {
            const swappedValue = currentValue.slice(-1) + currentValue.slice(0, -1);
            display.value = swappedValue;
        }
    });

    const clearEntryButton = document.getElementById("clear-entry") as HTMLButtonElement;
    clearEntryButton.addEventListener("click", () => {
        display.value = ""; // 入力値をクリア
        currentExpressionDisplay.textContent = ""; // 現在式の表示もクリア
    });
  const modButton = document.getElementById("mod") as HTMLButtonElement;
    modButton.addEventListener("click", () => {
       currentExpressionDisplay.textContent += "%";
    });
       const divButton = document.getElementById("div") as HTMLButtonElement;
    divButton.addEventListener("click", () => {
         currentExpressionDisplay.textContent += "/";
    });
});
