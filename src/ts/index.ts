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
      if (buttonText === "C") {
        currentInput = "";
        display.value = "";
      } else if (buttonText === "←") {
        currentInput = currentInput.slice(0, -1);
        display.value = currentInput;
      } else if (buttonText === "=") {
        try {
          const result = eval(currentInput);
          display.value = result.toString();
          calculationHistory.push(currentInput + " = " + result);
          historyElement.textContent = calculationHistory.join('\n');
          currentInput = "";
        } catch (error) {
          display.value = "Error";
        }
      } else {
        currentInput += buttonText;
        display.value = currentInput;
      }
    });
  });
});