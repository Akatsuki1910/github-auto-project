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
  let parenthesisOpen = false;
  let memory = 0;

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const buttonText = button.textContent;
      // ... (既存のコード)
      } else if (buttonText === "MR") {
        currentInput += memory;
        display.value = currentInput;
      } else {
        currentInput += buttonText;
        display.value = currentInput;
      }
    });
  });

  // ... (既存のコード)
});