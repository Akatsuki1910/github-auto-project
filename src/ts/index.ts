window.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display") as HTMLInputElement;
  const buttons = document.querySelectorAll("button");
  let currentInput = "";

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const buttonText = button.textContent;

      switch (buttonText) {
        // ... (Existing code remains unchanged)
        case "Base Conversion":
          // Placeholder for base conversion logic. This would require a more complex UI
          // to specify the base to convert from and to.
          alert("Base conversion feature is coming soon!");
          break;
        case "x<sup>y</sup>":
          currentInput += "**";
          display.value = currentInput;
          break;
        case "√":
          //...
          break;
        case "∛":
          //...
          break;        
        case "Fibonacci":
          // ...
          break;
        case "Rand":
          // ...
          break;          
        case '+/-':
          // Toggle sign
          if (currentInput !== "") {
            if (currentInput.startsWith('-')) {
              currentInput = currentInput.substring(1);
            } else {
              currentInput = '-' + currentInput;
            }
            display.value = currentInput;
          }
          break;
        // ... (Existing code remains unchanged)
      }
    });
  });
});