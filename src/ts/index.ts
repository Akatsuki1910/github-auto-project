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
  let parenthesisOpen = false;

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
      } else if (buttonText === "π") {
        currentInput += Math.PI;
        display.value = currentInput; 
      } else if (buttonText === "+/-") {
        currentInput = String(parseFloat(currentInput || "0") * -1) // 符号反転
        display.value = currentInput;
      } else if (buttonText === "()") {
        currentInput += parenthesisOpen ? ")" : "(";
        parenthesisOpen = !parenthesisOpen;  // トグル
        display.value = currentInput;      
      } else if (buttonText === "exp") {
        currentInput += "Math.exp(";
        parenthesisOpen = true;
        display.value = currentInput;
      } else {
        currentInput += buttonText;
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
