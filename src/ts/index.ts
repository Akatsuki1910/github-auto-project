window.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display") as HTMLInputElement;
  const buttons = document.querySelectorAll("#calculator button");
  let currentInput = "";
  const historyElement = document.getElementById("history") as HTMLParagraphElement;
  let calculationHistory = [];

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
      } else if (buttonText === "←" || buttonText === "&larr;") {
        currentInput = currentInput.slice(0, -1);
      } else {
        currentInput += buttonText;
      }
      display.value = currentInput;
    });
  });

  document.title = "Simple Calculator";

  const clearButton = document.getElementById("clear") as HTMLButtonElement;
  clearButton.addEventListener("dblclick", () => {
    calculationHistory = [];
    historyElement.textContent = "";
  });


});
