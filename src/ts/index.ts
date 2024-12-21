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
      // ... (既存のコード)
      if (buttonText === "e") {
        currentInput += Math.E;
        display.value = currentInput;
      }
        if (buttonText === "10ˣ") {
          try {
            const num = parseFloat(currentInput);
            currentInput = Math.pow(10, num).toString();
            display.value = currentInput;
          } catch (error) {
            display.value = "Error";
          }
        }      
        if (buttonText === "x2") {
          try {
            const num = parseFloat(currentInput);
            currentInput = (num * 2).toString();
            display.value = currentInput;
          } catch (error) {
            display.value = "Error";
          }
        }
       if (buttonText === "∛") {
        try {
          const num = parseFloat(currentInput);
          currentInput = Math.cbrt(num).toString();
          display.value = currentInput;
        } catch (error) {
          display.value = "Error";
        }
      }
      if (buttonText === "mod") {
        try {
          const num = parseFloat(currentInput);
          currentInput = (num % 1).toString();
          display.value = currentInput;
        } catch (error) {
          display.value = "Error";
        }
      }
      // ... (その他の既存コード)
    });
  });

  // ...(既存のコード)
});