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
      if (buttonText === "AC") {
        currentInput = "";
        display.value = "";
        calculationHistory = [];
        historyElement.textContent = "";
      } else if (buttonText === "C") {
        currentInput = "";
        display.value = "";
      } else if (buttonText === "←") {
        currentInput = currentInput.slice(0, -1);
        display.value = currentInput;
      } else if (buttonText === "=") {
        try {
          const result = eval(currentInput);
          display.value = result;
          calculationHistory.push(currentInput + " = " + result);
          historyElement.textContent = calculationHistory.join("\n");
          currentInput = result.toString();
        } catch (error) {
          display.value = "Error";
        }
        } else if (buttonText === "Copy"){
           navigator.clipboard.writeText(display.value).then(() => {
             alert('Copied to clipboard!');
           });
      } else if (buttonText === "+/-") {
        currentInput = display.value = String(Number(display.value) * -1); // 符号反転
      } else if (buttonText === "." && currentInput.includes('.')) {
        // Do nothing to prevent adding multiple decimal points
      } else if (buttonText === "%") {
        currentInput = display.value = String(Number(display.value) / 100); 
      } else if (buttonText === "1/x") {
        try {
          const result = 1 / eval(currentInput);
          display.value = result;
          currentInput = result.toString();
        } catch (error) {
          display.value = "Error";
        }
      } else if (buttonText === "ceil") {
          currentInput = display.value = String(Math.ceil(Number(display.value)));
      } else if (buttonText === "√") {
        currentInput = display.value = String(Math.sqrt(Number(display.value)));
      } else if (buttonText === "±") {
        currentInput = display.value = String(Number(display.value) * -1);       
      } else if (buttonText === "10<sup>x</sup>") {
        currentInput = display.value = String(Math.pow(10, Number(display.value)));
      } else if (buttonText === "!") {
        try {
          const num = Number(eval(currentInput));
          if (!Number.isInteger(num) || num < 0) {
            throw new Error("Factorial is only defined for non-negative integers.");
          }
          const result = factorial(num);
          display.value = result.toString();
          currentInput = result.toString();
        } catch (error) {
          display.value = "Error: " + error.message;
        }
      } else if (buttonText === "log10") {
        currentInput = display.value = String(Math.log10(Number(display.value)));
      } else if (buttonText === "sign") {    //signボタンの処理を追加
            currentInput = display.value = String(Math.sign(Number(display.value)));
      } else if (buttonText === "floor") {
        currentInput = display.value = String(Math.floor(Number(display.value))); // floorを追加
     } else if (buttonText === "x³") {
        currentInput = display.value = String(Math.pow(Number(display.value), 3));
      } else if (buttonText === "2<sup>x</sup>") {
        currentInput = display.value = String(Math.pow(2, Number(display.value)));
      } else if (buttonText === "x⁴") {
        currentInput = display.value = String(Math.pow(Number(display.value), 4));
      } else {
        currentInput += buttonText;
        display.value = currentInput;
      }
    });
  });

  function factorial(n: number): number {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }

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
});