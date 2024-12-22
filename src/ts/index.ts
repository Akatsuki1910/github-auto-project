window.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display") as HTMLInputElement;
  const buttons = document.querySelectorAll("#calculator button");
  let currentInput = "";
  const historyElement = document.getElementById("history") as HTMLParagraphElement;
  let calculationHistory = [];
  const historyContainer = document.getElementById("historyContainer");
  const historyBtn = document.getElementById("historyBtn");
  const clearHistoryBtn = document.getElementById("clearHistory") as HTMLButtonElement;
  const copyBtn = document.getElementById("copy") as HTMLButtonElement;
  let memory = 0;

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const buttonText = button.textContent;
      // ここに追加機能を実装
      if (buttonText === "AC") {
        currentInput = "";
        display.value = "";
        calculationHistory = []; //履歴もクリア
        historyElement.textContent = "";
      } else if (buttonText === "C") {
        currentInput = "";
        display.value = "";
      // 以下は既存のコード
      } else if (buttonText === "←") {
          // ... (既存コード)
      }
      // ... (既存コード)
    });
  });

  // ... (既存コード)
});