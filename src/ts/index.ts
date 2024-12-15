window.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display") as HTMLInputElement;
  const buttons = document.querySelectorAll("#calculator button");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const value = button.textContent;
      if (value === "=") {
        try {
          display.value = eval(display.value);
        } catch (e) {
          display.value = "Error";
        }
      } else if (value === "C") {
        display.value = "";
      } else {
        display.value += value;
      }
    });
  });
  console.log("Hello, World!"); // 既存機能を維持
});
