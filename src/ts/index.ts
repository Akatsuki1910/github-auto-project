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
  let memory = 0;

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const buttonText = button.textContent;
      if (buttonText === "=") {
        try {
          const result = eval(currentInput);
          display.value = result.toString();
          calculationHistory.push(currentInput + " = " + result);
          historyElement.textContent = calculationHistory.join('\n');
          currentInput = result.toString();
        } catch (error) {
          display.value = "Error";
        }
      } else if (buttonText === "C") {
        currentInput = "";
        display.value = "";
      } else if (buttonText === "←") {
        currentInput = currentInput.slice(0, -1);
        display.value = currentInput;
      } else if (buttonText === "Copy") {
          navigator.clipboard.writeText(display.value).then(() => {
              alert("Copied to clipboard!");
          });
      } else if (buttonText === "History") {
          historyContainer.style.display = historyContainer.style.display === "none" ? "block" : "none";
      } else if (buttonText === "Clear History"){
        calculationHistory = [];
        historyElement.textContent = "";
      } else if (buttonText === "M+") {
        memory += parseFloat(display.value);
      } else if (buttonText === "MR") {
        currentInput += memory;
        display.value = currentInput;
      } else if (buttonText === "MC") {
        memory = 0;
      } else if (buttonText === "("){
          currentInput += '(';
          parenthesisOpen = true;
          display.value = currentInput;
      } else if (buttonText === ")"){
          currentInput += ')';
          parenthesisOpen = false;
          display.value = currentInput;      
      } else if (buttonText === "±") {
        currentInput = String(parseFloat(currentInput || "0") * -1);
        display.value = currentInput;      
      } else if (buttonText === "AC") { // all clear
        currentInput = '';
        display.value = '';
        calculationHistory = []; // 追加：履歴もクリア
        historyElement.textContent = ''; // 追加：履歴表示もクリア

      } else {
        currentInput += buttonText;
        display.value = currentInput;
      }
    });
  });
});
