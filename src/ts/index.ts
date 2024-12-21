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

      if (buttonText === "1/x") {
        try {
          const result = 1 / parseFloat(currentInput);
          currentInput = result.toString();
          display.value = currentInput;
        } catch (error) {
          display.value = "Error";
        }
        return;
      }
      if (buttonText === "ceil") {
          try {
            currentInput = Math.ceil(parseFloat(currentInput)).toString();
            display.value = currentInput;
          } catch (error) {
            display.value = "Error";
          }
          return;
      }
      // ... (既存のコード)
       if (buttonText === "( )") {
        if (!parenthesesOpen) {
          currentInput += "(";
          parenthesesOpen = true;
        } else {
          currentInput += ")";
          parenthesesOpen = false;
        }
        display.value = currentInput;
      }
     // ... (その他の既存コード)
    });
  });

    // ...(既存のコード)

  function factorial(n: number): number {
    if (n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
  }
});
