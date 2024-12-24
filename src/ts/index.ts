window.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display") as HTMLInputElement;
  const buttons = document.querySelectorAll("#calculator button");
  let currentInput = "";
  let history = [];
  let memory = 0;

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const buttonText = button.textContent;
      switch (buttonText) {
        case "=":
          try {
            const result = eval(display.value);
            display.value = result.toString();
            currentInput = result.toString();
            history.push(currentInput); //履歴に追加
          } catch (error) {
            display.value = "Error";
          }
          break;
        case "±":
          if (display.value !== "") {
            display.value = (-parseFloat(display.value)).toString();
            currentInput = display.value;
          }
          break;
        case "C":
          currentInput = "";
          display.value = "";
          break;
        case "←":
          if (display.value.length > 0) {
            display.value = display.value.slice(0, -1);
          }
          currentInput = display.value;
          break;
        case "Copy":
          navigator.clipboard.writeText(display.value)
            .then(() => {
              alert("Copied to clipboard: " + display.value);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
          break;      
        case "MC": // Memory Clear
          memory = 0;
          break;    
        case "MR": // Memory Recall
          display.value += memory;
          currentInput += memory;      
          break;
        case "exp":
          display.value = Math.exp(parseFloat(display.value)).toString();
          currentInput = display.value;
          break;
        case "sin":
          display.value = Math.sin(parseFloat(display.value)).toString();
          currentInput = display.value;
          break;
        case "log":
          display.value = Math.log10(parseFloat(display.value)).toString();
          currentInput = display.value;
          break;
        default:
          currentInput += buttonText;
          display.value = currentInput;
      }
    });
  });

  // History button functionality
  const historyBtn = document.getElementById("historyBtn");
  const historyContainer = document.getElementById("historyContainer");
  const historyDisplay = document.getElementById("history");
  const clearHistoryBtn = document.getElementById("clearHistory") as HTMLButtonElement;
  historyBtn.addEventListener("click", () => {
    if (historyContainer.style.display === "none") {
      historyContainer.style.display = "block";
      historyDisplay.textContent = history.join('\n');
    } else {
      historyContainer.style.display = "none";
    }
  });

  clearHistoryBtn.addEventListener("click", () => {
    history = [];
    historyDisplay.textContent = "";
  });
});
