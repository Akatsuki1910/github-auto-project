window.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display") as HTMLInputElement;
  const buttons = document.querySelectorAll("#calculator button");
  let currentInput = "";
  let bracketOpen = false;
  const historyElement = document.getElementById("history") as HTMLParagraphElement;
  let calculationHistory = [];
  let memory = 0;

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
      } else if (buttonText === "x!") {
        try {
          const num = parseInt(currentInput);
          if (isNaN(num)) {
            currentInput = "Error";
          } else {
            currentInput = factorial(num).toString();
          }
        } catch (error) {
          currentInput = "Error";
        }
      } else if (buttonText === "x²") {
        try {
          const num = parseFloat(currentInput);
          currentInput = (num * num).toString();
        } catch (error) {
          currentInput = "Error";
        }
      } else if (buttonText === "log") {
        try {
          currentInput = Math.log10(parseFloat(currentInput)).toString();
        } catch (error) {
          currentInput = "Error";
        }
      } else if (buttonText === "exp") {
        try {
          currentInput = Math.exp(parseFloat(currentInput)).toString();
        } catch (error) {
          currentInput = "Error";
        }
      } else if (buttonText === "( )") {
        currentInput += bracketOpen ? ")" : "(";
        bracketOpen = !bracketOpen;
      } else if (buttonText === "M+") {
        memory += parseFloat(currentInput) || 0;
        currentInput = "";
      } else if (buttonText === "MRC") {
        currentInput += memory.toString();
      } else if (buttonText === "sin") {
        currentInput += "Math.sin(";
        bracketOpen = true;  //sin入力後は括弧を開いた状態にする
      } else if (buttonText === "cos") {
        currentInput += "Math.cos(";
        bracketOpen = true;
      } else if (buttonText === "round") {
        try {
          currentInput = Math.round(parseFloat(currentInput)).toString();
        } catch (error) {
          currentInput = "Error";
        }
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
