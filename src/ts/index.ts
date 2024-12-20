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
      if (buttonText === "mod") {
        try {
          const operands = currentInput.split("mod");
          if (operands.length === 2) {
            const operand1 = eval(operands[0]);
            const operand2 = eval(operands[1]);
            const result = operand1 % operand2;
            display.value = result.toString();
            calculationHistory.push(`${operand1} mod ${operand2} = ${result}`);
            currentInput = result.toString();
          } else {
            display.value = "Error";
          }
        } catch (error) {
          display.value = "Error";
        }
      }
      // ... (既存のコード)
    });
  });

  // ... (既存のコード)

});
