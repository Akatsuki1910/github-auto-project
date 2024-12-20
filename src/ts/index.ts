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

      if (buttonText === "MC") {
          memory = 0; 
          return;
      }
       if (buttonText === "MR") {
          currentInput += memory; 
          display.value = currentInput;
          return;
      }
      if (buttonText === "MS") {
          memory = parseFloat(display.value);
          return;
      }
      if (buttonText === "exp"){
        try {
          const result = Math.exp(parseFloat(currentInput));
          display.value = result.toString();
          currentInput = result.toString();
          calculationHistory.push(`${currentInput} = ${result}`);
          historyElement.textContent = calculationHistory.join('\n');
        } catch (error) {
          display.value = "Error";
        }
          return;
      }

      // ...(他のif文)
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
