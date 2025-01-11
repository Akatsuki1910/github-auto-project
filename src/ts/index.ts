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
     const baseConversionButton = document.getElementById("base-conversion") as HTMLButtonElement;
    baseConversionButton.addEventListener("click", () => {
        const decimalValue = parseInt(display.value);
        if (!isNaN(decimalValue)) {
            const binaryValue = decimalValue.toString(2);
            const octalValue = decimalValue.toString(8);
            const hexValue = decimalValue.toString(16);
            display.value = `2進数: ${binaryValue}, 8進数: ${octalValue}, 16進数: ${hexValue}`;
        }
    });

     const resetCalculatorButton = document.getElementById("reset-calculator") as HTMLButtonElement;
    resetCalculatorButton.addEventListener("click", () => {
        display.value = "0";
        currentExpressionDisplay.textContent = "";
        lastAnswer = 0;
        memory = 0;
        history = [];
        updateHistoryDisplay();
    });
     const currentTimeButton = document.getElementById("current-time") as HTMLButtonElement;
    currentTimeButton.addEventListener("click", () => {
        const now = new Date();
        display.value = now.toLocaleTimeString();
        currentExpressionDisplay.textContent = "現在時刻";
    });
    // ... existing functions
});
