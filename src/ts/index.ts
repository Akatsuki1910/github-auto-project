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

// sinボタンの追加
const sinButton = document.getElementById("sin") as HTMLButtonElement;
sinButton.addEventListener("click", () => {
    const display = document.getElementById("display") as HTMLInputElement;
    display.value = Math.sin(parseFloat(display.value)).toString();
});

// cosボタンの追加
const cosButton = document.getElementById("cos") as HTMLButtonElement;
cosButton.addEventListener("click", () => {
    const display = document.getElementById("display") as HTMLInputElement;
    display.value = Math.cos(parseFloat(display.value)).toString();
});

// tanボタンの追加
const tanButton = document.getElementById("tan") as HTMLButtonElement;
tanButton.addEventListener("click", () => {
    const display = document.getElementById("display") as HTMLInputElement;
    display.value = Math.tan(parseFloat(display.value)).toString();
});

// logボタンの追加
const logButton = document.getElementById("log") as HTMLButtonElement;
logButton.addEventListener("click", () => {
    const display = document.getElementById("display") as HTMLInputElement;
    display.value = Math.log(parseFloat(display.value)).toString();
});

// expボタンの追加
const expButton = document.getElementById("exp") as HTMLButtonElement;
expButton.addEventListener("click", () => {
    const display = document.getElementById("display") as HTMLInputElement;
    display.value = Math.exp(parseFloat(display.value)).toString();
});
});
