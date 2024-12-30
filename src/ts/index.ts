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

    const clearButton = document.getElementById("clear-display") as HTMLButtonElement;
    clearButton.addEventListener("click", () => {
        const display = document.getElementById("display") as HTMLInputElement;
        display.value = '';
    });

    const toggleThemeButton = document.getElementById("toggle-theme") as HTMLButtonElement;
    toggleThemeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
    });

    const calculateButton = document.getElementById("calculate") as HTMLButtonElement;
    calculateButton.addEventListener("click", () => {
        const display = document.getElementById("display") as HTMLInputElement;
        try {
            display.value = eval(display.value).toString();
        } catch (error) {
            display.value = "Error";
        }
    });

    const backspaceButton = document.getElementById("backspace") as HTMLButtonElement;
    backspaceButton.addEventListener("click", () => {
        const display = document.getElementById("display") as HTMLInputElement;
        display.value = display.value.slice(0, -1);
    });

    const decimalButton = document.getElementById("decimal") as HTMLButtonElement;
    decimalButton.addEventListener("click", () => {
        const display = document.getElementById("display") as HTMLInputElement;
        if (!display.value.includes('.')) {
            display.value += '.';
        }
    });

    const negateButton = document.getElementById("negate") as HTMLButtonElement;
    negateButton.addEventListener("click", () => {
        const display = document.getElementById("display") as HTMLInputElement;
        display.value = (parseFloat(display.value) * -1).toString();
    });
});
