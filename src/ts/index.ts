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

// 二乗ボタンの追加
const squareButton = document.getElementById("square") as HTMLButtonElement;
squareButton.addEventListener("click", () => {
    const display = document.getElementById("display") as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    display.value = (currentValue * currentValue).toString();
});

// 三乗ボタンの追加
const cubeButton = document.getElementById("cube") as HTMLButtonElement;
cubeButton.addEventListener("click", () => {
  const display = document.getElementById("display") as HTMLInputElement;
  const currentValue = parseFloat(display.value);
  display.value = (currentValue * currentValue * currentValue).toString();
});

// 逆数ボタンの追加
const inverseButton = document.getElementById("inverse") as HTMLButtonElement;
inverseButton.addEventListener("click", () => {
    const display = document.getElementById("display") as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    if (currentValue !== 0) {
        display.value = (1 / currentValue).toString();
    } else {
        display.value = "Error"; // ゼロ除算エラー処理
    }
});
// 四捨五入ボタンの追加
const roundButton = document.getElementById("round") as HTMLButtonElement;
roundButton.addEventListener("click", () => {
    const display = document.getElementById("display") as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    display.value = Math.round(currentValue).toString();
});

// 乱数ボタンの追加
const randomButton = document.getElementById("random") as HTMLButtonElement;
randomButton.addEventListener("click", () => {
    const display = document.getElementById("display") as HTMLInputElement;
    display.value = Math.random().toString();
});

// 符号ボタンの追加
const signButton = document.getElementById("sign") as HTMLButtonElement;
signButton.addEventListener("click", () => {
    const display = document.getElementById("display") as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    display.value = (-currentValue).toString();
});

// 絶対値ボタンの追加
const absButton = document.getElementById("abs") as HTMLButtonElement;
absButton.addEventListener("click", () => {
    const display = document.getElementById("display") as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    display.value = Math.abs(currentValue).toString();
});

// ネイピア数ボタンの追加
const eulerButton = document.getElementById("euler") as HTMLButtonElement;
eulerButton.addEventListener("click", () => {
    const display = document.getElementById("display") as HTMLInputElement;
    display.value = Math.E.toString();
});
});
