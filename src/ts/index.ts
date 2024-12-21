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
      if (buttonText === "abs") {
        try {
          const number = parseFloat(currentInput);
          const result = Math.abs(number);
          display.value = result.toString();
          currentInput = result.toString();
          calculationHistory.push(`abs(${number}) = ${result}`);
          historyElement.textContent = calculationHistory.join('\n');
        } catch (error) {
          display.value = "Error";
        }
      }
      if (buttonText === "floor") {
        try {
          const number = parseFloat(currentInput);
          const result = Math.floor(number);
          display.value = result.toString();
          currentInput = result.toString();
          calculationHistory.push(`floor(${number}) = ${result}`);
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
