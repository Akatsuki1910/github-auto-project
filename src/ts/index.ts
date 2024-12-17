window.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display") as HTMLInputElement;
  const buttons = document.querySelectorAll("#calculator button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const buttonText = button.textContent;
      if (buttonText === "=") {
        try {
          display.value = eval(display.value);
        } catch (error) {
          display.value = "Error";
        }
      } else if (buttonText === "C") {
        display.value = "";
      } else {
        display.value += buttonText;
      }
    });
  });

  // 既存機能への追加：コンソールに計算結果を出力
  display.addEventListener("change", () => {
    console.log("Calculation Result:", display.value);
  });
});
