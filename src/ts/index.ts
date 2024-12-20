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

      if (buttonText === "()") {
        if (currentInput.includes("(")) {
          currentInput += ")";
        } else {
          currentInput += "(";
        }
        display.value = currentInput;
        return;
      }

      if (buttonText === "x<sup>y</sup>") {
        currentInput += "**";
        display.value = currentInput;
      }

      if (buttonText === "=") {
        try {
          const result = eval(currentInput);
          display.value = result.toString();
          calculationHistory.push(`${currentInput}=${result}`);
          historyElement.textContent = calculationHistory.join('\n');
          lastAnswer = result;
        } catch (error) {
          display.value = "Error";
        }
        currentInput = "";

        return;
      }
      if (buttonText === "Ans"){
        currentInput += lastAnswer;
        display.value = currentInput;
         return;
      }
      
      if (/[0-9]/.test(buttonText) || buttonText === "." || buttonText === "+" || buttonText === "-" || buttonText === "*" || buttonText === "/" || buttonText === "%" || buttonText === "(" || buttonText === ")") {
        currentInput += buttonText;
        display.value = currentInput; 
      }
     if(buttonText === "C"){
            currentInput = "";
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
});