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
            updateHistoryDisplay(); // 履歴表示を更新
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
     const fibonacciButton = document.getElementById("fibonacci") as HTMLButtonElement;
    fibonacciButton.addEventListener("click", () => {
        const n = parseInt(display.value);
        if (!isNaN(n) && n >= 0) {
            display.value = fibonacci(n).toString();
        } else {
            display.value = "Invalid input";
        }
    });

    function fibonacci(n: number): number {
        if (n <= 1) {
            return n;
        }
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    const gcdButton = document.getElementById("gcd") as HTMLButtonElement;
    gcdButton.addEventListener("click", () => {
        const input = display.value;
        const numbers = input.split(',').map(Number);
        if (numbers.some(isNaN)) {
            display.value = "Invalid input";
            return;
        }
        if (numbers.length < 2) {
            display.value = "少なくとも2つの数を入力してください。";
            return;
        }
        let result = gcd(numbers[0], numbers[1]);
        for (let i = 2; i < numbers.length; i++) {
            result = gcd(result, numbers[i]);
        }
        display.value = result.toString();
    });

    function gcd(a: number, b: number): number {
        while (b) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return Math.abs(a);
    }
     // ... existing functions
    const deleteLastHistoryEntryButton = document.getElementById("delete-last-history-entry") as HTMLButtonElement;
    deleteLastHistoryEntryButton.addEventListener("click", () => {
        history.pop();
        updateHistoryDisplay();
    });

    const eulerButton = document.getElementById("euler") as HTMLButtonElement;
    eulerButton.addEventListener("click", () => {
        const x = parseFloat(display.value);
        if (!isNaN(x)) {
            const result = Math.exp(x);
            display.value = result.toString();
            currentExpressionDisplay.textContent = `e^${x}`;
            history.push(`e^${x} = ${result}`);
            updateHistoryDisplay();
        }
    });

    const historyDisplay = document.getElementById("history-display") as HTMLDivElement;
    function updateHistoryDisplay() {
        historyDisplay.innerHTML = history.join('<br>');
    }

});
