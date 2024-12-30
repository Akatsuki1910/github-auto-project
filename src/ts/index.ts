// ... (Existing Code)
window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code)

    // ... (Existing Code)
    // ... existing code
    // ... (rest of the code)

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
});