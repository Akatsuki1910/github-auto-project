// ... (Existing Code)
window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code)

    // ... (Existing Code)
    // ... existing code
    // ... (rest of the code)
    let memoryValue: number | null = null;

    // ドキュメントを開くボタン
    const openDocumentationButton = document.getElementById("open-documentation") as HTMLButtonElement;
    openDocumentationButton.addEventListener("click", () => {
        window.open("https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math", "_blank");
    });

    // タイムスタンプを表示するボタンを追加
    const timestampButton = document.getElementById("current-timestamp") as HTMLButtonElement;
    timestampButton.addEventListener("click", () => {
        const display = document.getElementById("display") as HTMLInputElement;
        display.value = Date.now().toString();
    });

    const clearButton = document.getElementById("clear-display") as HTMLButtonElement;
    clearButton.addEventListener("click", () => {
        const display = document.getElementById("display") as HTMLInputElement;
        display.value = '';
    });

    const toggleThemeButton = document.getElementById("toggle-theme") as HTMLButtonElement;
    toggleThemeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
    });

    // ... (rest of the existing code)

// メモリ機能の追加
const memoryStoreButton = document.getElementById("memory-store") as HTMLButtonElement;
memoryStoreButton.addEventListener("click", () => {
    const display = document.getElementById("display") as HTMLInputElement;
    memoryValue = parseFloat(display.value);
});

const memoryRecallButton = document.getElementById("memory-recall") as HTMLButtonElement;
memoryRecallButton.addEventListener("click", () => {
    const display = document.getElementById("display") as HTMLInputElement;
    if (memoryValue !== null) {
        display.value = memoryValue.toString();
    }
});

const memoryClearButton = document.getElementById("memory-clear") as HTMLButtonElement;
memoryClearButton.addEventListener("click", () => {
    memoryValue = null;
});

// 既存のコード...

// その他のボタンの追加...
// ... (rest of the code)

// 切り上げボタンの追加
const ceilButton = document.getElementById("ceil") as HTMLButtonElement;
ceilButton.addEventListener("click", () => {
    const display = document.getElementById("display") as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    display.value = Math.ceil(currentValue).toString();
});
});
