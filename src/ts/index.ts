window.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display") as HTMLInputElement;
  const buttons = document.querySelectorAll("#calculator button");
  let currentInput = "";
  const historyElement = document.getElementById("history") as HTMLParagraphElement;
  let calculationHistory = [];
  const historyContainer = document.getElementById("historyContainer");
  const historyBtn = document.getElementById("historyBtn");
  const clearHistoryBtn = document.getElementById("clearHistory") as HTMLButtonElement;
  let memory = 0;
  let lastAnswer = 0; 

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const buttonText = button.textContent;

      // ３乗の計算機能を追加
      if (buttonText === "x³") {
        try {
          const result = Math.pow(eval(currentInput), 3);
          display.value = result.toString();
          calculationHistory.push(`${currentInput}³=${result}`);
          currentInput = result.toString();
          lastAnswer = result;
        } catch (error) {
          display.value = "Error";
        }
      } else if (buttonText === "=") {
          // ... (既存のコード)
      } // ... (既存のコード)
      
    });
  });

  // ... (既存のコード)

});
