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
      } else if (buttonText === "+/-") {
        currentInput = (parseFloat(currentInput) * -1).toString();
      } else if (buttonText === "e") {
        currentInput += Math.E;
      } else if (buttonText === "√") {
        try {
          const result = Math.sqrt(parseFloat(currentInput));
          currentInput = result.toString();
        } catch (error) {
          currentInput = "Error";
        }
      } else if (buttonText === "%") {
        try {
          const result = parseFloat(currentInput) / 100;
          currentInput = result.toString();
        } catch (error) {
          currentInput = "Error";
        }
      } else if (buttonText === "π") {
        currentInput += Math.PI;
      } else if (buttonText === "ceil") {
        currentInput = Math.ceil(parseFloat(currentInput)).toString();
      } else if (buttonText === "rand") {
        currentInput += Math.random();
      } else if (buttonText === "M+") {
        memory += parseFloat(currentInput);
        currentInput = "";
      } else if (buttonText === "MRC") {
        currentInput += memory;
        memory = 0; // MRC後メモリクリア
      } else if (buttonText === "round"){
        currentInput = Math.round(parseFloat(currentInput)).toString();
      } else if (buttonText === "sign"){
        currentInput = Math.sign(parseFloat(currentInput)).toString();
      } else if (buttonText === "floor") {
        currentInput = Math.floor(parseFloat(currentInput)).toString();
      } else if (buttonText === "x²") {
        currentInput = Math.pow(parseFloat(currentInput), 2).toString();
      } else if (buttonText === "x³") {
        currentInput = Math.pow(parseFloat(currentInput), 3).toString();
      } else if (buttonText === "tan") {
        currentInput = Math.tan(parseFloat(currentInput)).toString();
      } else if (buttonText === "ln") {
        currentInput = Math.log(parseFloat(currentInput)).toString();
      } else if (buttonText === "Inv") {
        isInverse = !isInverse;
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

  function factorial(n: number): number {
    if (n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
  }
});
