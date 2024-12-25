window.addEventListener("DOMContentLoaded", () => {
  // ... (existing code)

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      // ... (existing code)

      switch (buttonText) {
        // ... other cases ...
        case "log":
          try {
            const currentValue = parseFloat(display.value);
            if (currentValue <= 0) {
              display.value = "Error: Invalid input for log";
            } else {
              const logValue = Math.log10(currentValue);
              currentInput = logValue.toString();
              display.value = currentInput;
            }
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