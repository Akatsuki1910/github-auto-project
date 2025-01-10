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
    const expButton = document.getElementById("exp") as HTMLButtonElement;
    const naturalLogarithmButton = document.getElementById("natural-logarithm") as HTMLButtonElement; // 自然対数ボタン

    // ... other existing variables and buttons
    // ... existing event listeners

    expButton.addEventListener("click", () => {
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            const result = Math.exp(currentValue);
            display.value = result.toString();
            currentExpressionDisplay.textContent = `exp(${currentValue})`;
            history.push(`exp(${currentValue}) = ${result}`);
        }
    });

    naturalLogarithmButton.addEventListener("click", () => { // 自然対数ボタンのイベントリスナー
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue) && currentValue > 0) { // 0以下はエラー
            const result = Math.log(currentValue);
            display.value = result.toString();
            currentExpressionDisplay.textContent = `ln(${currentValue})`;
            history.push(`ln(${currentValue}) = ${result}`);
        } else {
          display.value = "Error";
          currentExpressionDisplay.textContent = "Error: Input must be greater than 0 for ln";
        }
    });

    // ... (Rest of the existing code)
});
