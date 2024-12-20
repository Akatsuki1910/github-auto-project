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

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const buttonText = button.textContent;

      if (buttonText === "=") {
        try {
          const result = eval(currentInput);
          display.value = result.toString();
          calculationHistory.push(`${currentInput}=${result}`); // 計算履歴に追加
          currentInput = result.toString();
        } catch (error) {
          display.value = "Error";
        }
      } else if (buttonText === "C") {
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
        memory = 0; // メモリクリア
      }
       else if (buttonText === "trunc") {
        currentInput = Math.trunc(eval(currentInput)).toString();
        display.value = currentInput;      
      } else if (buttonText === "round"){
        currentInput = Math.round(eval(currentInput)).toString();
        display.value = currentInput;      
      } else if (buttonText === "ceil") {
        currentInput = Math.ceil(eval(currentInput)).toString();
        display.value = currentInput;
      } else if (buttonText === "floor") {
        currentInput = Math.floor(eval(currentInput)).toString();
        display.value = currentInput;
      } else if (buttonText === "1/x") {
        try {
          const result = 1 / eval(currentInput);
          display.value = result.toString();
          calculationHistory.push(`1/(${currentInput})=${result}`);
          currentInput = result.toString();
        } catch (error) {
          display.value = "Error";
        }
      } else if (buttonText === "sign"){
          currentInput = Math.sign(eval(currentInput)).toString();
          display.value = currentInput;
      } else if (buttonText === "abs") {
        currentInput = Math.abs(eval(currentInput)).toString();
        display.value = currentInput;
      } else if (buttonText === "rand") {
        currentInput += Math.random().toString();
        display.value = currentInput;      
      } else if (buttonText === "e") {
        currentInput += Math.E;
        display.value = currentInput;
      } else if (buttonText === "ln") {
        currentInput = Math.log(eval(currentInput)).toString();
        display.value = currentInput;      
      } else if (buttonText === "tan"){
        currentInput = Math.tan(eval(currentInput)).toString();
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