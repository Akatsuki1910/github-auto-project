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
      if (buttonText === "log10") {
        try {
          const result = Math.log10(eval(currentInput));
          display.value = result.toString();
          calculationHistory.push(`log10(${currentInput}) = ${result}`);
          currentInput = result.toString();
          lastAnswer = result;
        } catch (error) {
          display.value = "Error";
        }
      }
      // ... (既存のコード)
      if (buttonText === "|x|") {
          try {
            const result = Math.abs(eval(currentInput));
            display.value = result.toString();
            calculationHistory.push(`|${currentInput}| = ${result}`);
            currentInput = result.toString();
            lastAnswer = result;
          } catch (error) {
            display.value = "Error";
          }
        }
       if (buttonText === "10<sup>x</sup>") {
          try {
            const result = 10 ** eval(currentInput);
            display.value = result.toString();
            calculationHistory.push(`10^(${currentInput}) = ${result}`);
            currentInput = result.toString();
            lastAnswer = result;
          } catch (error) {
            display.value = "Error";
          }
        }
       if (buttonText === "2<sup>x</sup>") {
          try {
            const result = 2 ** eval(currentInput);
            display.value = result.toString();
            calculationHistory.push(`2^(${currentInput}) = ${result}`);
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
