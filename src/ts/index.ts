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
        case "ln":
          try {
            const result = Math.log(parseFloat(display.value));
            display.value = result.toString();
            currentInput = result.toString();
          } catch (error) {
            display.value = "Error";
          }
          break;        
        case "10<sup>x</sup>":
          try {
            const result = Math.pow(10, parseFloat(display.value));
            display.value = result.toString();
            currentInput = result.toString();
          } catch (error) {
            display.value = "Error";
          }
          break;
        case ">>":
          try {
            const result = parseInt(display.value) >> 1; // 右ビットシフト
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

  // History button functionality
  // 以下略
});
