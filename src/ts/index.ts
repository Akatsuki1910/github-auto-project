window.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display") as HTMLInputElement;
  const buttons = document.querySelectorAll("#calculator button");
  let currentInput = "";
  let history = [];
  let memory = 0;
  let isDarkMode = false;

  const switchThemeButton = document.getElementById("switchTheme");
  switchThemeButton.addEventListener("click", () => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle("dark-mode", isDarkMode);
  });

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const buttonText = button.textContent;
      switch (buttonText) {
        case "=":
          try {
            const result = eval(currentInput);
            display.value = result.toString();
            history.push(currentInput + " = " + result);
            currentInput = result.toString();
          } catch (error) {
            display.value = "Error";
          }
          break;
          case "Eval":
              try {
                  const result = eval(currentInput);
                  display.value = result.toString();
                  history.push(currentInput + " = " + result);
                  currentInput = result.toString();
              }
             catch(error) {
                  display.value = "Error";
              }
              break;              
        case "log<sub>10</sub>":
            currentInput += "Math.log10(";
            display.value = currentInput;
            break;        
        case "New Window":
            window.open('https://www.google.com', '_blank');
            break;  
        case "Dup":
            currentInput = display.value + display.value; // Duplicate the current display value
            display.value = currentInput;
            break;
        case "Copy to Clipboard":
          navigator.clipboard.writeText(display.value).then(() => {
            //alert("Copied to clipboard!");
          }).catch(err => {
            console.error("Failed to copy: ", err);
          });
          break;    
        case "⌫":
          currentInput = currentInput.slice(0, -1);
          display.value = currentInput;
          break;
        case "+/-": // Sign change
          currentInput = String(Number(currentInput) * -1); 
          display.value = currentInput;
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
  const historyContent = document.getElementById("history");
  const clearHistoryBtn = document.getElementById("clearHistory");

  historyBtn.addEventListener("click", () => {
    historyContainer.style.display = historyContainer.style.display === "none" ? "block" : "none";
    historyContent.textContent = history.join("\n");
  });

  clearHistoryBtn.addEventListener("click", () => {
    history = [];
    historyContent.textContent = "";
  });
});
