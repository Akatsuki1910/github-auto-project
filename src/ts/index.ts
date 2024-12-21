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
      if (buttonText === "eval") {
        try {
          const result = eval(currentInput);
          display.value = result.toString();
          calculationHistory.push(`${currentInput}=${result}`);
          historyElement.textContent = calculationHistory.join('\n');
          currentInput = result.toString();
        } catch (error) {
          display.value = "Error";
        }
        return;
      }
      if (buttonText === "rand") {
        currentInput = Math.random().toString();
        display.value = currentInput;
        return;
      }
      if (buttonText === "e"){
            currentInput += Math.E;
            display.value = currentInput;
      }
       if (buttonText === "ln") {
        try {
          const result = Math.log(parseFloat(currentInput));
          display.value = result.toString();
          currentInput = result.toString();
        } catch (error) {
          display.value = "Error";
        }
      }
      // ここに他のボタンの処理を追加
    });
  });
});
