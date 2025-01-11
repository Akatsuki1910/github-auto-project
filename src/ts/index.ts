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

    // ... (Existing Code)
    const minButton = document.getElementById("min") as HTMLButtonElement;
    minButton.addEventListener("click", () => {
        const numbers = display.value.split(',').map(Number);
        const min = Math.min(...numbers.filter(num => !isNaN(num)));
        display.value = min.toString();
        currentExpressionDisplay.textContent = numbers.join(',') + ' の最小値 = ' + min;  
    });

    const maxButton = document.getElementById("max") as HTMLButtonElement;
    maxButton.addEventListener("click", () => {
        const numbers = display.value.split(',').map(Number);
        const max = Math.max(...numbers.filter(num => !isNaN(num)));
        display.value = max.toString();
        currentExpressionDisplay.textContent = numbers.join(',') + ' の最大値 = ' + max;
    });

    const averageButton = document.getElementById("average") as HTMLButtonElement;
    averageButton.addEventListener("click", () => {
        const numbers = display.value.split(',').map(Number);
        const validNumbers = numbers.filter(num => !isNaN(num));
        if (validNumbers.length > 0) {
          const sum = validNumbers.reduce((acc, curr) => acc + curr, 0);
          const average = sum / validNumbers.length;
          display.value = average.toString();
          currentExpressionDisplay.textContent = numbers.join(',') + ' の平均 = ' + average;
        } else {
          display.value = "NaN"; // 空の入力または無効な数値の場合
          currentExpressionDisplay.textContent = "数値を入力してください。";
        }
    });

    const sumOfSquaresButton = document.getElementById("sum-of-squares") as HTMLButtonElement;
    sumOfSquaresButton.addEventListener("click", () => {
        const numbers = display.value.split(',').map(Number);
        const validNumbers = numbers.filter(num => !isNaN(num));
        if (validNumbers.length > 0) {
            const sumOfSquares = validNumbers.reduce((acc, curr) => acc + curr * curr, 0);
            display.value = sumOfSquares.toString();
            currentExpressionDisplay.textContent = numbers.join(',') + ' の二乗和 = ' + sumOfSquares;
        } else {
            display.value = "NaN";
            currentExpressionDisplay.textContent = "数値を入力してください。";
        }
    });
});