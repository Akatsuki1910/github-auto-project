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
      } else if (buttonText === "+/-") { // 符号反転
        currentInput = String(parseFloat(currentInput || "0") * -1);
        display.value = currentInput;
      } else if (buttonText === "()" ) {
        currentInput += parenthesisOpen ? ")" : "(";
        parenthesisOpen = !parenthesisOpen;  // トグル
        display.value = currentInput;      
      } else if (buttonText === "rand") {
        const randNum = Math.random();
        currentInput += randNum.toString();
        display.value = currentInput;
      } else if (buttonText === "exp") {
          currentInput += "Math.exp(";
          parenthesisOpen = true; // expボタンが押されたら括弧を開く
          display.value = currentInput;
      } else if (buttonText === "ln") {
        currentInput += "Math.log(";
        parenthesisOpen = true;
        display.value = currentInput;      
      } else if (buttonText === "floor") {
        currentInput += "Math.floor(";
        parenthesisOpen = true;      
        display.value = currentInput;
      } else if (buttonText === "x<sup>y</sup>") {
        currentInput += "**";
        display.value = currentInput;
      } else if (buttonText === "mod") {
        currentInput += "%";
        display.value = currentInput;
      } else if (buttonText === "log<sub>10</sub>") {
        currentInput += "Math.log10(";
        parenthesisOpen = true;        
        display.value = currentInput;
      } else if (buttonText === "sin") {
        currentInput += "Math.sin(";
        parenthesisOpen = true;
        display.value = currentInput;      
      } else if (buttonText === "cos") {
        currentInput += "Math.cos(";
        parenthesisOpen = true;
        display.value = currentInput;      
      } else if (buttonText === "tan") {
        currentInput += "Math.tan(";
        parenthesisOpen = true;
        display.value = currentInput;
      } else if (buttonText === "|x|") {
        currentInput += "Math.abs(";
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