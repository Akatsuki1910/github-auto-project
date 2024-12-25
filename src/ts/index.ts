window.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display") as HTMLInputElement;
  const buttons = document.querySelectorAll("button");
  let currentInput = "";

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const buttonText = button.textContent;

      switch (buttonText) {
        // ... other cases ...
        case "Calculate":
          try {
            currentInput = eval(display.value);
            display.value = currentInput;
          } catch (error) {
            display.value = "Error";
          }
          break;
          // ... other cases ...
          case "Exit":
            window.close();
            break;
        default:
          currentInput += buttonText;
          display.value = currentInput;
      }
    });
  });
});
