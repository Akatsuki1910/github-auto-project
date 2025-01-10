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
    const absoluteButton = document.getElementById("absolute") as HTMLButtonElement; // 絶対値ボタン
    const powerButton = document.getElementById("power") as HTMLButtonElement; // 累乗ボタン
    const tenToThePowerOfXButton = document.getElementById("ten-to-the-power-of-x") as HTMLButtonElement; // 10のx乗ボタン
    const display = document.getElementById("display") as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById("currentExpressionDisplay") as HTMLDivElement;
    const randomButton = document.getElementById("random") as HTMLButtonElement; // 乱数ボタン

    // ... other existing variables and buttons
    // ... existing event listeners
    randomButton.addEventListener("click", () => {
        const randomNumber = Math.random();
        display.value = randomNumber.toString();
        currentExpressionDisplay.textContent = "Rand";
        history.push(`Rand = ${randomNumber}`);
    });

       tenToThePowerOfXButton.addEventListener("click", () => {
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            const result = Math.pow(10, currentValue);
            display.value = result.toString();
            currentExpressionDisplay.textContent = `10^${currentValue}`;
            history.push(`10^${currentValue} = ${result}`);
        }
    });

    powerButton.addEventListener("click", () => {
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
          currentExpressionDisplay.textContent = `${currentValue} ^ `;
            display.value = "";
        let base = currentValue;
        const calculatePower = () => {
        const exponent = parseFloat(display.value);
          if (!isNaN(exponent)){
            const result = Math.pow(base, exponent);
            display.value = result.toString();
            currentExpressionDisplay.textContent = `${base}^${exponent}`;
            history.push(`${base}^${exponent} = ${result}`);
          }
        }
        const equalsButton = document.getElementById("equals") as HTMLButtonElement;
        equalsButton.addEventListener("click", calculatePower, {once: true});
        }
    });

        // ... existing functions (cube, inverse, round, etc)
});
