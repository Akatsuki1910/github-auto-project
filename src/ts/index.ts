window.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display") as HTMLInputElement;
  const buttons = document.querySelectorAll("#calculator button");
  let currentInput = "";

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const value = button.textContent;

      if (value === "=") {
        try {
          currentInput = eval(currentInput).toString();
        } catch (error) {
          currentInput = "Error";
        }
      } else if (value === "C") {
        currentInput = "";
      } else {
        currentInput += value;
      }
      display.value = currentInput;
    });
  });

  // 追加機能：ページタイトルを更新
  document.title = "Simple Calculator";
});
