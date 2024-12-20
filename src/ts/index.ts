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

      // ... (既存のコード)
      if (buttonText === "log2") {
        try {
          const result = Math.log2(eval(currentInput));
          display.value = result.toString();
          calculationHistory.push(`log2(${currentInput}) = ${result}`);
          currentInput = result.toString();
          lastAnswer = result;
        } catch (error) {
          display.value = "Error";
        }
      }
     
      // ... (既存のコード)
    });
  });

  // ... (既存のコード)

});
