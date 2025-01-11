// ... (Existing Code)

// ... existing variables and buttons
// ... existing event listeners
// ... existing functions (cube, inverse, round, etc)

// ... (Existing Code)

// ... existing functions

window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code and variables)
    // ... (Existing buttons)
    // ... existing variables and buttons
    // ... existing event listeners
    // ... existing functions

 // 2進数から10進数への変換ボタン
 // ... existing code

// 立方根ボタン
// ... existing code for cube root button

// n乗根ボタンの追加
// ... existing code for nth-root button

// log10ボタンの追加
// ... existing code for log10 button

// 指数関数ボタンの追加
// ... existing code for exponent button

// 絶対値ボタンの追加
// ... existing code for abs button

// メモリーストア機能を追加
// ... existing memory store code

// M+％機能の追加
// ... existing M+% code

// M-％機能の追加
// ... existing M-% code

// パーセント変化計算機能の追加
// ... existing percentage change code
    const historyDisplay = document.getElementById("history-display") as HTMLDivElement;
    let history: string[] = [];
    let memoryValue = 0; //メモリ値を保持する変数

    function updateHistoryDisplay() {
        historyDisplay.innerHTML = history.join('<br>');
    }

    // 履歴全削除ボタンの追加
    const clearAllHistoryButton = document.getElementById("clear-all-history") as HTMLButtonElement;
    clearAllHistoryButton.addEventListener("click", () => {
        history = [];
        updateHistoryDisplay();
    });

 // MRCボタンの追加（メモリ呼び出しとクリア）
    const mrcButton = document.getElementById("mrc") as HTMLButtonElement;
    mrcButton.addEventListener("click", () => {
      const display = document.getElementById("display") as HTMLInputElement;
        display.value = memoryValue.toString();
        memoryValue = 0; // 呼び出し後にメモリクリア
    });

     // 現在日付ボタンの追加
    const currentDateButton = document.getElementById("current-date") as HTMLButtonElement;
    currentDateButton.addEventListener("click", () => {
        const display = document.getElementById("display") as HTMLInputElement;
        const now = new Date();
        display.value = now.toLocaleDateString();
    });

    // クリアボタンの追加
    const clearDisplayButton = document.getElementById("clear-display") as HTMLButtonElement;
    clearDisplayButton.addEventListener("click", () => {
        const display = document.getElementById("display") as HTMLInputElement;
        display.value = '';
    });
});
