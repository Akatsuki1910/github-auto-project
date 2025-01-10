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
    let isDarkMode = false;

    // ... other existing variables and buttons
    keyboardToggleButton.addEventListener("click", () => {
        isKeyboardInputEnabled = !isKeyboardInputEnabled;
        keyboardToggleButton.textContent = isKeyboardInputEnabled ? "キーボード入力: ON" : "キーボード入力: OFF";

        if (isKeyboardInputEnabled) {
            display.removeAttribute("readonly");
        } else {
            display.setAttribute("readonly", "true");
        }
    });

    darkModeToggleButton.addEventListener("click", () => {
        isDarkMode = !isDarkMode;
        document.body.classList.toggle("dark-mode", isDarkMode);
        darkModeToggleButton.textContent = isDarkMode ? "ライトモード" : "ダークモード";
    });

    copyToClipboardButton.addEventListener("click", () => {
        const displayValue = display.value;
        navigator.clipboard.writeText(displayValue)
            .then(() => {
                alert("Copied to clipboard: " + displayValue);
            })
            .catch(err => {
                console.error("Failed to copy: ", err);
                alert("Failed to copy to clipboard.");
            });
    });

    // 履歴表示機能
    const updateHistoryDisplay = () => {
      historyDisplay.innerHTML = history.map(item => `<div>${item}</div>`).join('');
    };

    toggleHistoryButton.addEventListener("click", () => {
        isHistoryVisible = !isHistoryVisible;
        historyDisplay.style.display = isHistoryVisible ? "block" : "none";
        toggleHistoryButton.textContent = isHistoryVisible ? "履歴を隠す" : "履歴を表示";
    });
    // ... Existing code for other buttons
    // 仮の計算処理（後で適切な計算ロジックに置き換える）
    const calculate = () => {
        const expression = display.value;
        try {
            // const result = eval(expression); // evalは安全ではないので、後で適切な計算ロジックに置き換える
            const result = expression; // 一時的な実装
            display.value = result.toString();
            history.push(expression + " = " + result);
            updateHistoryDisplay();
            lastAnswer = result;
        } catch (error) {
            display.value = "Error";
        }
    };

    const equalsButton = document.getElementById("equals") as HTMLButtonElement;
    equalsButton.addEventListener("click", calculate);


});
