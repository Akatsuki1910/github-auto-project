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
      } else if (buttonText === "←" || buttonText === "&larr;") {
        currentInput = currentInput.slice(0, -1);
      } else {
        currentInput += buttonText;
      }
      display.value = currentInput;
    });
  });

  // 既存コードからの機能追加: ページタイトルを更新
  document.title = "Simple Calculator";
});
