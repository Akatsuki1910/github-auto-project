window.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display") as HTMLInputElement;
  const buttons = document.querySelectorAll("button");
  let currentInput = "";

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const buttonText = button.textContent;

      switch (buttonText) {
        // ... other cases ...
        case "exp":
          try {
            const currentValue = parseFloat(display.value);
            const expValue = Math.exp(currentValue);
            currentInput = expValue.toString();
            display.value = currentInput;
          } catch (error) {
            display.value = "Error: " + error.message;
          }
          break;
          case "|x|":
          try {
            const currentValue = parseFloat(display.value);
            const absValue = Math.abs(currentValue);
            currentInput = absValue.toString();
            display.value = currentInput;
          } catch (error) {
            display.value = "Error: " + error.message;
          }
          break;        
        default:
          currentInput += buttonText;
          display.value = currentInput;
      }
    });
  });
});
