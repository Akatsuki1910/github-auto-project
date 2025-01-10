// ... (Existing Code)
let lastAnswer = 0;
let memory = 0;
let isRadian = true; // ラジアンモードフラグ
let isKeyboardInputEnabled = false; // キーボード入力有効フラグ
let history: string[] = [];
let isHistoryVisible = false; // 履歴表示状態フラグ

window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code and variables)
    const keyboardToggleButton = document.getElementById("keyboard-toggle") as HTMLButtonElement;
    const display = document.getElementById("display") as HTMLInputElement;
    const darkModeToggleButton = document.getElementById("dark-mode-toggle") as HTMLButtonElement;
    const copyToClipboardButton = document.getElementById("copy-to-clipboard") as HTMLButtonElement;
    const historyDisplay = document.getElementById("history-display") as HTMLDivElement;
    const toggleHistoryButton = document.getElementById("toggle-history") as HTMLButtonElement;
    const themeSelect = document.getElementById("theme-select") as HTMLSelectElement;
    const clearHistoryButton = document.getElementById("clear-history") as HTMLButtonElement;
    const currentExpressionDisplay = document.getElementById("currentExpressionDisplay") as HTMLDivElement;
    const radiansToggleButton = document.getElementById("radians-toggle") as HTMLButtonElement;
    const allClearButton = document.getElementById("all-clear") as HTMLButtonElement;
    const clearButton = document.getElementById("clear") as HTMLButtonElement;
    const lastAnswerButton = document.getElementById("last-answer") as HTMLButtonElement;
    const plusMinusButton = document.getElementById("plus-minus") as HTMLButtonElement;
    const sinButton = document.getElementById("sin") as HTMLButtonElement;
    const cosButton = document.getElementById("cos") as HTMLButtonElement; // cosボタンの取得
    const tanButton = document.getElementById("tan") as HTMLButtonElement;
    const logButton = document.getElementById("log") as HTMLButtonElement; // logボタンの取得


    // ... other existing variables and buttons
    keyboardToggleButton.addEventListener("click", () => {
        isKeyboardInputEnabled = !isKeyboardInputEnabled;
        keyboardToggleButton.textContent = isKeyboardInputEnabled ? "キーボード入力: ON" : "キーボード入力: OFF";

        if (isKeyboardInputEnabled) {
            display.removeAttribute("readonly");
        } else {
            display.setAttribute("readonly", "true");
        }    });
    radiansToggleButton.addEventListener("click", () => {
        isRadian = !isRadian;
        radiansToggleButton.textContent = isRadian ? "Rad" : "Deg";
    });

    sinButton.addEventListener("click", () => {
      // ... existing code
    });

    cosButton.addEventListener("click", () => {
      // ... existing code
    });

    tanButton.addEventListener("click", () => {
      // ... existing code
    });

  logButton.addEventListener("click", () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue) && currentValue > 0) { // 0以下はエラーとする
      const result = Math.log10(currentValue);
      display.value = result.toString();
      currentExpressionDisplay.textContent = `log(${currentValue})`;
    }
  });

// ... (Rest of the existing code)
}
