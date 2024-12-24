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
        // 以下略
        case "log<sub>10</sub>":
          try {
            const result = Math.log10(parseFloat(display.value));
            display.value = result.toString();
            currentInput = result.toString();
          } catch (error) {
            display.value = "Error";
          }
          break;        
        case "New Window":
            window.open('https://www.google.com', '_blank');
            break;  
        case "Dup":
            currentInput = display.value + display.value;
            display.value = currentInput;
            break;        
          // 以下略
        default:
          currentInput += buttonText;
          display.value = currentInput;
      }
    });
  });

  // History button functionality
  // 以下略
});
