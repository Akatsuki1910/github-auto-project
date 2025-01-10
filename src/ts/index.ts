// ... (Existing Code)
let lastAnswer = 0;
let memory = 0;
let isRadian = true; // ラジアンモードフラグ
let isKeyboardInputEnabled = false; // キーボード入力有効フラグ

window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code and variables)
    const keyboardToggleButton = document.getElementById("keyboard-toggle") as HTMLButtonElement;
    const display = document.getElementById("display") as HTMLInputElement;
    const darkModeToggleButton = document.getElementById("dark-mode-toggle") as HTMLButtonElement;
    let isDarkMode = false;

    // ... other existing variables and buttons

    // ... other event listeners
    keyboardToggleButton.addEventListener("click", () => {
        isKeyboardInputEnabled = !isKeyboardInputEnabled;
        keyboardToggleButton.textContent = isKeyboardInputEnabled ? "キーボード入力: ON" : "キーボード入力: OFF";

        if (isKeyboardInputEnabled) {
            display.removeAttribute("readonly");
        } else {
            display.setAttribute("readonly", "true");
        }
    });

    if (isKeyboardInputEnabled) {
      display.addEventListener("keydown", (event: KeyboardEvent) => {
        if (event.key === "Enter") {
          calculateExpressionButton.click(); // calculateExpressionButtonの定義が必要です
        }
      });
    }

    darkModeToggleButton.addEventListener("click", () => {
        isDarkMode = !isDarkMode;
        document.body.classList.toggle("dark-mode", isDarkMode);
        darkModeToggleButton.textContent = isDarkMode ? "ライトモード" : "ダークモード";
    });

    // ... Existing code for other buttons
});