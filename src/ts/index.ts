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
      switch (buttonText) {
        case "=":
          try {
            const result = eval(currentInput);
            display.value = result.toString();
            calculationHistory.push(currentInput + " = " + result);
            historyElement.textContent = calculationHistory.join('\n');
            currentInput = result.toString();
          } catch (error) {
            display.value = "Error";
          }
          break;
        case "C":
          currentInput = "";
          display.value = "";
          break;
        case "←":
          currentInput = currentInput.slice(0, -1);
          display.value = currentInput;
          break;
        case "Copy":
          navigator.clipboard.writeText(display.value).then(() => {
            alert("Copied to clipboard!");
          });
          break;
        case "History":
          historyContainer.style.display = historyContainer.style.display === "none" ? "block" : "none";
          break;
        case "Clear History":
          calculationHistory = [];
          historyElement.textContent = "";
          break;
        case "±":
           currentInput = String(parseFloat(currentInput || "0") * -1);
           display.value = currentInput;
           break;        
        case "AC":
          currentInput = '';
          display.value = '';
          calculationHistory = [];
          historyElement.textContent = '';
          break;
          case "MS": // Memory Store
          memory = parseFloat(display.value);
          break;
        case "MR": // Memory Recall
          currentInput += memory;
          display.value = currentInput;
          break;
        case "MC": // Memory Clear
          memory = 0;
          break;
        // 1/xボタンの処理を追加
        case "1/x":
          try {
            const result = 1 / eval(currentInput);
            display.value = result.toString();
            currentInput = result.toString();
          } catch (error) {
            display.value = "Error";
          }
          break;
          case "floor":
          try {
            const result = Math.floor(eval(currentInput));
            display.value = result.toString();
            currentInput = result.toString();
          } catch (error) {
            display.value = "Error";
          }
          break;
        case "rand":
          const randomNumber = Math.random();
          currentInput += randomNumber;
          display.value = currentInput;
          break;
        case "x³":
          try {
            const result = Math.pow(eval(currentInput), 3);
            display.value = result.toString();
            currentInput = result.toString();
          } catch (error) {
            display.value = "Error";
          }
          break;
        default:
          currentInput += buttonText;
          display.value = currentInput;
      }
    });
  });
});