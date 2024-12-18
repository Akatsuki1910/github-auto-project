window.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display") as HTMLInputElement;
  const buttons = document.querySelectorAll("#calculator button");
  let currentInput = "";

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const buttonText = button.textContent;
      if (buttonText === "C") {
        currentInput = "";
      } else if (buttonText === "=") {
        try {
          currentInput = eval(currentInput).toString();
        } catch (error) {
          currentInput = "Error";
        }
      } else {
        currentInput += buttonText;
      }
      display.value = currentInput;
    });
  });

  // 既存コードからの機能追加: ページタイトルを更新
  document.title = "Simple Calculator";

  // backspace機能追加
  const clearButton = document.getElementById("clear") as HTMLButtonElement;
  clearButton.addEventListener("dblclick", () => {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
  });
});
