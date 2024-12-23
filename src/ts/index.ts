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
      switch (buttonText) {
        // ... (rest of the switch cases)
        case "∛":
          try {
            const currentValue = parseFloat(display.value);
            const cubeRootValue = Math.cbrt(currentValue);
            display.value = cubeRootValue.toString();
            currentInput = cubeRootValue.toString();
          } catch (error) {
            display.value = "Error";
          }
          break;
        default:
          currentInput += buttonText;
          display.value = currentInput;
      }
    });
  });
});