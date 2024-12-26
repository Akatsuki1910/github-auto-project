window.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display") as HTMLInputElement;
  const buttons = document.querySelectorAll("button");
  let currentInput = "";

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const buttonText = button.textContent;

      switch (buttonText) {
        // ... (Existing code remains unchanged)
        case "floor":
          try {
            const result = Math.floor(eval(currentInput));
            currentInput = result.toString();
            display.value = currentInput;
          } catch (error) {
            display.value = "Error";
          }
          break;
        case "ceil":
          try {
            const result = Math.ceil(eval(currentInput));
            currentInput = result.toString();
            display.value = currentInput;
          } catch (error) {
            display.value = "Error";
          }
          break;
        case "10<sup>x</sup>":
          try {
            const result = Math.pow(10, eval(currentInput));
            currentInput = result.toString();
            display.value = currentInput;
          } catch (error) {
            display.value = "Error";
          }
          break;
        // ... (Other cases remain unchanged)
      }
    });
  });
});
