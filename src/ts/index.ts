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

    // ... (Existing ceilButton Code)

    // Duplicateボタンの追加
    // ... (Existing Duplicate Button Code)

      // ... existing fibonacciButton code

    // ... (Existing Code)

     const copyHistoryButton = document.getElementById("copy-history") as HTMLButtonElement;
     copyHistoryButton.addEventListener("click", () => {
         navigator.clipboard.writeText(history.join('\n')).then(() => {
             alert("History copied to clipboard!");
         }).catch(err => {
             console.error("Failed to copy: ", err);
         });
     });

     const maxButton = document.getElementById("max") as HTMLButtonElement;
     maxButton.addEventListener("click", () => {
        // ... existing maxButton code
     });

     const minButton = document.getElementById("min") as HTMLButtonElement;
     minButton.addEventListener("click", () => {
        // ... existing minButton code
     });
     const sumHistoryButton = document.getElementById("sum-history") as HTMLButtonElement;
    sumHistoryButton.addEventListener("click", () => {
        // ... existing sumHistoryButton code
    });

     const allClearButton = document.getElementById("all-clear") as HTMLButtonElement;
    allClearButton.addEventListener("click", () => {
      display.value = "0";
         // 計算式のクリア処理を追加
    });

        const historyReverseButton = document.getElementById("history-reverse") as HTMLButtonElement;
        historyReverseButton.addEventListener("click", () => {
            history.reverse();
            historyDiv.innerHTML = history.map(item => `<p>${item}</p>`).join('');
        });
    const percentageButton = document.getElementById("percentage") as HTMLButtonElement;
    percentageButton.addEventListener("click", () => {
      // ... existing percentageButton code
    });

    const plusMinusButton = document.getElementById("plus-minus") as HTMLButtonElement;
    plusMinusButton.addEventListener("click", () => {
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            display.value = (-currentValue).toString();
        }
    });
});
