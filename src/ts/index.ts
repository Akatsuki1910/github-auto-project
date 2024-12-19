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
          currentInput = "";
        display.value = "";

      } else if (buttonText === "←") {
        currentInput = currentInput.slice(0, -1);
        display.value = currentInput;
      } else if (buttonText === "+/-") {
        currentInput = (parseFloat(currentInput) * -1).toString();
        display.value = currentInput;      
      } else if (buttonText === "x!") {
        try {
          const num = parseInt(currentInput);
          if (isNaN(num)) {
            throw new Error("Invalid input for factorial");
          }
          if (num < 0) {
            throw new Error("Factorial is not defined for negative numbers");
          }
          let result = 1;
          for (let i = 1; i <= num; i++) {
            result *= i;
          }
          display.value = result.toString();
          calculationHistory.push(`${currentInput}!=${result}`);
          currentInput = result.toString();
        } catch (error) {
          display.value = "Error";
          console.error(error); // エラー内容をコンソールに表示
        }
      } else if (buttonText === "x²") {
        try {
          const num = parseFloat(currentInput);
          const result = num * num;
          display.value = result.toString();
          calculationHistory.push(`${currentInput}²=${result}`);
          currentInput = result.toString();
        } catch (error) {
          display.value = "Error";
        }
      } else if (buttonText === "round") {
        try {
          const num = parseFloat(currentInput);
          const result = Math.round(num);
          display.value = result.toString();
          calculationHistory.push(`round(${currentInput})=${result}`);
          currentInput = result.toString();
        } catch (error) {
          display.value = "Error";
        }
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
