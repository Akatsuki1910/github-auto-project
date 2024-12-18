window.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display") as HTMLInputElement;
  const buttons = document.querySelectorAll("#calculator button");
  let currentInput = "";
  let bracketOpen = false;
  const historyElement = document.getElementById("history") as HTMLParagraphElement;
  let calculationHistory = [];
  let memory = 0;
  let isInverse = false;

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const buttonText = button.textContent;
      if (buttonText === "C") {
        currentInput = "";
      } else if (buttonText === "=") {
        try {
          currentInput = eval(currentInput).toString();
          calculationHistory.push(currentInput);
          historyElement.textContent = calculationHistory.join(", ");
        } catch (error) {
          currentInput = "Error";
        }
      } else if (buttonText === "←" || buttonText === "&larr;" ) {
        currentInput = currentInput.slice(0, -1);
      }
        // 以下追加
      } else if (buttonText === "x<sup>y</sup>") {
        currentInput += "**";
      } // 以上追加
      else if (buttonText === "+/-") {
        currentInput = (parseFloat(currentInput) * -1).toString();
      } 
      // ... (rest of the code remains the same)

      display.value = currentInput;
    });
  });

  // ... (rest of the code remains the same)
});
