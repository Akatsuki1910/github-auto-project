window.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display") as HTMLInputElement;
  const buttons = document.querySelectorAll("button");
  let currentInput = "";

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const buttonText = button.textContent;

      switch (buttonText) {
        // ... (Existing code remains unchanged)
        case "∛":
          try {
            const result = Math.cbrt(parseFloat(currentInput));
            currentInput = result.toString();
            display.value = currentInput;
          } catch (error) {
            display.value = "Error";
          }
          break;        
          case "Base Conversion":
          // Placeholder for base conversion logic. This would require a more complex UI
          // to specify the base to convert from and to.
          alert("Base conversion feature is coming soon!");
          break;
        // ... (Other cases remain unchanged)
      }
    });
  });
});