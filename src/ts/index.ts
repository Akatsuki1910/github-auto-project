// ... (Existing Code)
window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code)

    // ... (Existing Code)
    // ... existing code
    // ... (rest of the code)
    let memoryValue: number | null = null;
    const history: string[] = [];
    const historyDiv = document.getElementById("history") as HTMLDivElement;
    const display = document.getElementById("display") as HTMLInputElement;

    // ドキュメントを開くボタン
    // ... (Existing Code) ...

    // 履歴クリアボタンの追加
    // ... existing clearHistoryButton code ...


    const updateHistory = (value: string) => {
        history.push(value);
        historyDiv.innerHTML = history.map(item => `<p>${item}</p>`).join('');
    };

    // ... (Existing Code)

    const clearEntryButton = document.getElementById("clear-entry") as HTMLButtonElement;
    clearEntryButton.addEventListener("click", () => {
        display.value = "0";
    });

    // ... (Existing Duplicate Button Code)

      // ... existing fibonacciButton code

    // ... (Existing Code)
     // ... existing copyHistoryButton code ...

     // ... existing maxButton code ...

     // ... existing minButton code ...

    // ... existing sumHistoryButton code ...

     // ... existing allClearButton Code

        // ... existing historyReverseButton code ...

    // ... existing percentageButton code ...

    // ... existing plusMinusButton code ...

    // ... existing sqrtButton code ...

    const lnButton = document.getElementById("ln") as HTMLButtonElement;
    lnButton.addEventListener("click", () => {
      const currentValue = parseFloat(display.value);
      if (!isNaN(currentValue) && currentValue > 0) {
        const result = Math.log(currentValue);
        display.value = result.toString();
        updateHistory(`ln(${currentValue}) = ${result}`);
      } else {
        display.value = "Error";
      }
    });
});