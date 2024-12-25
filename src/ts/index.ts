window.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display") as HTMLInputElement;
  const buttons = document.querySelectorAll("button");
  let currentInput = "";

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const buttonText = button.textContent;

      switch (buttonText) {
        // ... (Existing code remains unchanged)

        case "x<sup>y</sup>":
          currentInput += "**";
          display.value = currentInput;
          break;
          
        case "√":
          try {
            const currentValue = parseFloat(display.value);
            if (currentValue >= 0) {
              currentInput = Math.sqrt(currentValue).toString();
              display.value = currentInput;
            } else {
              display.value = "Error: Negative Input";
            }
          } catch (error) {
            display.value = "Error";
          }
          break;

        case "∛":
          try {
            const currentValue = parseFloat(display.value);
            currentInput = Math.cbrt(currentValue).toString();
            display.value = currentInput;
          } catch (error) {
            display.value = "Error";
          }
          break;
          
          case "Fibonacci":
          try {
            const n = parseInt(display.value);
            if (n >= 0) {
              let a = 0, b = 1, temp;
              for (let i = 0; i < n; i++) {
                temp = b;
                b = a + b;
                a = temp;
              }
              currentInput = a.toString();
              display.value = currentInput;
            } else {
              display.value = "Error: Negative Input";
            }
          } catch (error) {
            display.value = "Error";
          }
          break;
         // ... (Existing code remains unchanged)
      }
    });
  });
});