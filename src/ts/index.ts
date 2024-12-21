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

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const buttonText = button.textContent;
      // ... (既存のコード)
      if (buttonText === "x<sup>y</sup>") {
          currentInput += "**";
          display.value = currentInput;
      }
      // ... (その他の既存コード)
      if (buttonText === "tan") {
        try {
          const number = parseFloat(currentInput);
          const result = Math.tan(number);
          display.value = result.toString();
          currentInput = result.toString();
          calculationHistory.push(`tan(${number}) = ${result}`);
          historyElement.textContent = calculationHistory.join('\n');
        } catch (error) {
          display.value = "Error";
        }
      }
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
