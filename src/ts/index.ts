window.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display") as HTMLInputElement;
  const buttons = document.querySelectorAll("#calculator button");
  let currentInput = "";
  let bracketOpen = false;
  const historyElement = document.getElementById("history") as HTMLParagraphElement;
  let calculationHistory = [];
  let memory = 0;
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
          calculationHistory.push(`${currentInput}=${result}`); // 計算履歴に追加
          currentInput = result.toString();
        } catch (error) {
          display.value = "Error";
        }
      } else if (buttonText === "C") {
        currentInput = "";
        display.value = "";
      } else if (buttonText === "History"){
          historyContainer.style.display = historyContainer.style.display === "none" ? "block" : "none";
          historyElement.textContent = calculationHistory.join("\n");
      } else if (buttonText === "Copy") {
          navigator.clipboard.writeText(display.value).then(() => {
            alert("Copied to clipboard: " + display.value);
          });
      } else if (buttonText === "←") {
        currentInput = currentInput.slice(0, -1);
        display.value = currentInput;
      } else if (buttonText === "M+") {
        memory += parseFloat(display.value);
      } else if (buttonText === "MC") {
        memory = 0;
      } else if (buttonText === "MR") {
        display.value = memory.toString();
        currentInput = memory.toString();
      } else if (buttonText === "MS") {
        memory = parseFloat(display.value);
      } else if (buttonText === "+/-") {
        currentInput = (parseFloat(currentInput) * -1).toString();
        display.value = currentInput;      
      } else {
        currentInput += buttonText;
        display.value = currentInput;
      }
    });
  });

  clearHistoryBtn.addEventListener("click", () => {
      calculationHistory = [];
      historyElement.textContent = "";
  });

  historyBtn.addEventListener("click", () => {
      historyContainer.style.display = historyContainer.style.display === "none" ? "block" : "none";
      historyElement.textContent = calculationHistory.join("\n");
  });
});
