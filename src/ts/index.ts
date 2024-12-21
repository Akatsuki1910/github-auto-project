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
      // 2進数、8進数、16進数変換機能追加
      if (buttonText === "Base") {
        const num = parseInt(currentInput);
        if (!isNaN(num)) {
          const binary = num.toString(2);
          const octal = num.toString(8);
          const hex = num.toString(16);
          alert(`Binary: ${binary}\nOctal: ${octal}\nHexadecimal: ${hex}`);
        } else {
          alert("Invalid number for base conversion.");
        }
        return;
      }
      if (buttonText === "Eval") {
        try {
          const result = eval(currentInput);
          currentInput = result.toString();
          display.value = currentInput;
          calculationHistory.push(`${currentInput} = ${result}`);
          historyElement.textContent = calculationHistory.join('\n');
        } catch (error) {
          display.value = "Error";
        }
        return;
      }
      if (buttonText === "Random") {
        const randomNumber = Math.random();
        currentInput += randomNumber.toString();
        display.value = currentInput;
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

  function factorial(n) {
    if (n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
  }
});
