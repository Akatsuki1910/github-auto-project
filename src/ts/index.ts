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
  let parenthesesOpen = false;

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const buttonText = button.textContent;
      if (buttonText === "floor") {
        try {
          const num = parseFloat(currentInput);
          currentInput = Math.floor(num).toString();
          display.value = currentInput;
        } catch (error) {
          display.value = "Error";
        }
        return;
      }
      if (buttonText === "ceil") {
        try {
          const num = parseFloat(currentInput);
          currentInput = Math.ceil(num).toString();
          display.value = currentInput;
        } catch (error) {
          display.value = "Error";
        }
        return;
      }
      // ここに他のボタンの処理を追加
    });
  });
});
