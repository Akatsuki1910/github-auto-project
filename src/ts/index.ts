window.addEventListener("DOMContentLoaded", () => {
  // ... (existing code)

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      // ... (existing code)

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
        default:
          currentInput += buttonText;
          display.value = currentInput;
      }
    });
  });
});
