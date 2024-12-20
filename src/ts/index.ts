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

      if (buttonText === "=") {
        try {
          const result = eval(currentInput);
          display.value = result.toString();
          calculationHistory.push(`${currentInput}=${result}`); 
          currentInput = result.toString();
          lastAnswer = result; 
        } catch (error) {
          display.value = "Error";
        }
      } else if (buttonText === "C") {
        currentInput = "";
        display.value = "";
      } else if (buttonText === "CE") {
        currentInput = "";
        display.value = "";
      } else if (buttonText === "History"){
          historyContainer.style.display = historyContainer.style.display === "none" ? "block" : "none";
          historyElement.textContent = calculationHistory.join("\n");
      } else if (buttonText === "Copy") {
          navigator.clipboard.writeText(display.value).then(() => {
            alert("Copied to clipboard: " + display.value);
          });
          currentInput = "";
        display.value = "";

      } else if (buttonText === "←") {
        currentInput = currentInput.slice(0, -1);
        display.value = currentInput;
      } else if (buttonText === "+/-") {
        currentInput = (parseFloat(currentInput) * -1).toString();
        display.value = currentInput;      
      } else if (buttonText === "^") {
        currentInput += "**";
        display.value = currentInput;
      } else if (buttonText === "M+") {
        memory += parseFloat(display.value);
        display.value = "";
        currentInput = "";
      } else if (buttonText === "MR") {
        currentInput += memory.toString();
        display.value = currentInput;
      } else if (buttonText === "MC") {
        memory = 0; 
      } else if (buttonText === "trunc") {
        currentInput = Math.trunc(eval(currentInput)).toString();
        display.value = currentInput;      
      } else if (buttonText === "Ans") {
        currentInput += lastAnswer.toString();
        display.value = currentInput;
      } else if (buttonText === "Base2") {
        currentInput = parseInt(currentInput).toString(2);
        display.value = currentInput;
      } else if (buttonText === "Base10") { // 10進数に変換
        currentInput = parseInt(currentInput, 2).toString();
        display.value = currentInput;
      } else {
        currentInput += buttonText;
        display.value = currentInput;
      }
    });
  });

  clearHistoryBtn.addEventListener("click", () => {
      calculationHistory = [];
      historyElement.textContent = "";
  });

  historyBtn.addEventListener("click", () => {
      historyContainer.style.display = historyContainer.style.display === "none" ? "block" : "none";
      historyElement.textContent = calculationHistory.join("\n");
  });
});
