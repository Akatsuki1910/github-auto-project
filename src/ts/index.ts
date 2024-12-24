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
        case "Random":
          const randomNumber = Math.random();
          display.value = randomNumber.toString();
          currentInput = randomNumber.toString();
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
