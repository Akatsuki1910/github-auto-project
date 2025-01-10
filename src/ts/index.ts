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
    const inverseButton = document.getElementById("inverse") as HTMLButtonElement; // 逆数ボタン
    const roundButton = document.getElementById("round") as HTMLButtonElement; // 丸めボタン

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

    inverseButton.addEventListener("click", () => { // 逆数ボタンのイベントリスナー
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue) && currentValue !== 0) { // 0での除算を回避
            const result = 1 / currentValue;
            display.value = result.toString();
            currentExpressionDisplay.textContent = `1/${currentValue}`;
            history.push(`1/${currentValue} = ${result}`);
        } else if (currentValue === 0) {
            display.value = "Error: Division by zero";
            currentExpressionDisplay.textContent = ""; // 式表示をクリア
        }
    });

    roundButton.addEventListener("click", () => {
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            const result = Math.round(currentValue);
            display.value = result.toString();
            currentExpressionDisplay.textContent = `round(${currentValue})`;
            history.push(`round(${currentValue}) = ${result}`);
        }
    });

    // ... (Rest of the existing code)
});
