window.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display") as HTMLInputElement;
  const buttons = document.querySelectorAll("#calculator button");
  let currentInput = "";
  const historyElement = document.getElementById("history") as HTMLParagraphElement;
  let calculationHistory = [];
  const historyContainer = document.getElementById("historyContainer");
  const historyBtn = document.getElementById("historyBtn");
  const clearHistoryBtn = document.getElementById("clearHistory") as HTMLButtonElement;

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const buttonText = button.textContent;

      if (buttonText === "=") {
        try {
          const result = eval(currentInput);
          display.value = result.toString();
          calculationHistory.push(`${currentInput}=${result}`);
          historyElement.textContent = calculationHistory.join('\n');
        } catch (error) {
          display.value = "Error";
        }
        currentInput = "";
        return;
      }

      if (buttonText === "C") {
        currentInput = "";
        display.value = currentInput;
        return;
      }

      if (buttonText === "←") {
        currentInput = currentInput.slice(0, -1);
        display.value = currentInput;
        return;
      }
      // 1/xの機能追加
      if (buttonText === "1/x") {
        try {
          const result = 1 / eval(currentInput);
          display.value = result.toString();
          currentInput = result.toString();
        } catch (error) {
          display.value = "Error";
          currentInput = "";
        }
        return;
      }

      if (/[0-9]/.test(buttonText) || buttonText === "." || buttonText === "+" || buttonText === "-" || buttonText === "*" || buttonText === "/" || buttonText === "%" || buttonText === "(" || buttonText === ")") {
        currentInput += buttonText;
        display.value = currentInput;
      }
    });
  });

  historyBtn.addEventListener("click", () => {
    if (historyContainer.style.display === "none") {
      historyContainer.style.display = "block";
    } else {
      historyContainer.style.display = "none";
    }
  });

  clearHistoryBtn.addEventListener("click", () => {
    calculationHistory = [];
    historyElement.textContent = "";
  });
});
