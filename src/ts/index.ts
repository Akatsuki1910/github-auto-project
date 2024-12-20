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

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const buttonText = button.textContent;

      if (buttonText === "=") {
        try {
          const result = eval(currentInput);
          display.value = result.toString();
          calculationHistory.push(`${currentInput}=${result}`);
          historyElement.textContent = calculationHistory.join('\n');
        } catch (error) {
          display.value = "Error";
        }
        currentInput = "";
        return;
      }

      if (buttonText === "C") {
        currentInput = "";
        display.value = currentInput;
        return;
      }

      if (buttonText === "←") {
        currentInput = currentInput.slice(0, -1);
        display.value = currentInput;
        return;
      }
      if (buttonText === "x²") {
        try {
          const result = Math.pow(eval(currentInput), 2);
          display.value = result.toString();
          currentInput = result.toString();
        } catch (error) {
          display.value = "Error";
          currentInput = "";
        }
        return;
      }

      if (buttonText === "√") {
        try {
          const result = Math.sqrt(eval(currentInput));
          display.value = result.toString();
          currentInput = result.toString();
        } catch (error) {
          display.value = "Error";
          currentInput = "";
        }
        return;
      }
      if (buttonText === "π") {
        currentInput += Math.PI;
        display.value = currentInput;
        return;
      }
      if (buttonText === "!") {
        try {
          const num = eval(currentInput);
          if (num < 0 || !Number.isInteger(num)) {
            throw new Error("Factorial is not defined for negative or non-integer numbers.");
          }
          const result = factorial(num);
          display.value = result.toString();
          currentInput = result.toString();
        } catch (error) {
          display.value = "Error";
          currentInput = "";
        }
        return;
      }
      if (buttonText === "round") {
        try {
          const result = Math.round(eval(currentInput));
          display.value = result.toString();
          currentInput = result.toString();
        } catch (error) {
          display.value = "Error";
          currentInput = "";
        }
        return;
      }

      if (/[0-9]/.test(buttonText) || buttonText === "." || buttonText === "+" || buttonText === "-" || buttonText === "*" || buttonText === "/" || buttonText === "%" || buttonText === "(" || buttonText === ")") {
        currentInput += buttonText;
        display.value = currentInput;
      }
      if (buttonText === "+/-") {
          currentInput = display.value.startsWith('-') ? display.value.substring(1) : "-" + display.value;
          display.value = currentInput;       
      }
    });
  });

  historyBtn.addEventListener("click", () => {
    if (historyContainer.style.display === "none") {
      historyContainer.style.display = "block";
    } else {
      historyContainer.style.display = "none";
    }
  });

  clearHistoryBtn.addEventListener("click", () => {
    calculationHistory = [];
    historyElement.textContent = "";
  });

  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(display.value).then(() => {
      alert("Copied to clipboard!");
    }).catch(err => {
      console.error("Copy failed: ", err);
    });
  });

  function factorial(n: number): number {
    if (n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
  }
});
