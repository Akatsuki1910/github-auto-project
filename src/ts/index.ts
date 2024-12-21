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
      if (buttonText === "sin") {
        try {
          const num = parseFloat(currentInput);
          currentInput = Math.sin(num).toString();
          display.value = currentInput;
        } catch (error) {
          display.value = "Error";
        }
        return;
      }
      if (buttonText === "cos") {
        try {
          const num = parseFloat(currentInput);
          currentInput = Math.cos(num).toString();
          display.value = currentInput;
        } catch (error) {
          display.value = "Error";
        }
        return;
      }
      // 括弧の追加
      if (buttonText === "( )") {
        currentInput += parenthesesOpen ? ")" : "(";
        parenthesesOpen = !parenthesesOpen;
        display.value = currentInput;
        return;
      }

      if (buttonText === "1/x") {
        try {
          const num = parseFloat(currentInput);
          currentInput = (1 / num).toString();
          display.value = currentInput;
        } catch (error) {
          display.value = "Error";
        }
      }
      if (buttonText === "x<sup>y</sup>") {
        currentInput += "**";
        display.value = currentInput;
        return;
      }
      // ... (その他の既存コード)
    });
  });

  // ...(既存のコード)
});
