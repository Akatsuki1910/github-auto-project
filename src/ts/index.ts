// ... (Existing Code)
window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code)

    // ... (Existing Code)
    // ... existing code
    // ... (rest of the code)
    let memoryValue: number | null = null;
    const history: string[] = [];
    const historyDiv = document.getElementById("history") as HTMLDivElement;

    // ドキュメントを開くボタン
    // ... (Existing Code) ...

    // 履歴クリアボタンの追加
    const clearHistoryButton = document.getElementById("clear-history") as HTMLButtonElement;
    clearHistoryButton.addEventListener("click", () => {
        history.length = 0; // 履歴をクリア
        historyDiv.innerHTML = ''; // 履歴表示をクリア
    });

    // ... (rest of the existing code)

    const updateHistory = (value: string) => {
        history.push(value);
        historyDiv.innerHTML = history.map(item => `<p>${item}</p>`).join('');
    };

    const ceilButton = document.getElementById("ceil") as HTMLButtonElement;
    ceilButton.addEventListener("click", () => {
        const display = document.getElementById("display") as HTMLInputElement;
        const currentValue = parseFloat(display.value);
        display.value = Math.ceil(currentValue).toString();
        updateHistory(`Ceil(${currentValue}) = ${Math.ceil(currentValue)}`);
    });

    // Duplicateボタンの追加
    const duplicateButton = document.getElementById("duplicate") as HTMLButtonElement;
    duplicateButton.addEventListener("click", () => {
      const display = document.getElementById("display") as HTMLInputElement;
      display.value = display.value + display.value;
    });

      const fibonacciButton = document.getElementById("fibonacci") as HTMLButtonElement;
    fibonacciButton.addEventListener("click", () => {
        const display = document.getElementById("display") as HTMLInputElement;
        const n = parseInt(display.value);
        if (isNaN(n) || n < 0) {
            display.value = "Error";
        } else {
        let a = 0, b = 1, temp;
        for (let i = 0; i < n; i++) {
            temp = b;
            b = a + b;
            a = temp;
        }
        display.value = a.toString();
         updateHistory(`Fibonacci(${n}) = ${a}`);
        }
    });
});
