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
    const cubeButton = document.getElementById("cube") as HTMLButtonElement; // 立方計算ボタン

    // ... other existing variables and buttons
    // ... existing event listeners

    // ... (Existing event listeners)

    cubeButton.addEventListener("click", () => { // 立方計算ボタンのイベントリスナー
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            const result = Math.pow(currentValue, 3);
            display.value = result.toString();
            currentExpressionDisplay.textContent = `${currentValue}³`;
            history.push(`${currentValue}³ = ${result}`);
        }
    });

    // ... (Rest of the existing code)
});
