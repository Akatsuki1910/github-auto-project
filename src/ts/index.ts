window.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display") as HTMLInputElement;
  const buttons = document.querySelectorAll("#calculator button");
  let currentInput = "";
  let history = [];
  let memory = 0;
  let lastAnswer = 0; 

  // Theme toggling
  let isDarkMode = false;
  const toggleThemeButton = document.getElementById("toggle-theme");
  const body = document.body;

  toggleThemeButton.addEventListener("click", () => {
    isDarkMode = !isDarkMode;
    body.classList.toggle("dark-mode", isDarkMode);
  });

  const copyDisplayButton = document.getElementById("copy-display");
  copyDisplayButton.addEventListener("click", () => {
    navigator.clipboard.writeText(display.value).then(() => {
      alert("Copied to clipboard!");
    }, () => {
      alert("Failed to copy to clipboard.");
    });
  });

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const buttonText = button.textContent;

      switch (buttonText) {
        case "=":
          // ... (existing code)
          break;
        case "C":
          // ... (existing code)
          break;
        // ... other cases ...
          case "M+":
          memory += parseFloat(display.value);
          break;
        case "MR":
          currentInput += memory;
          display.value = currentInput;
          break;
        case "MC":
          memory = 0;
          break;
          case "Round":
                try {
                  // ... existing code ...
                } catch (error) {
                    display.value = "Error: " + error.message;
                }
                break;
        case "1/x":
          try {
            const currentValue = parseFloat(display.value);
            if (currentValue === 0) {
              display.value = "Error: Division by zero";
            } else {
              const inverse = 1 / currentValue;
              currentInput = inverse.toString();
              display.value = currentInput;
            }
          } catch (error) {
            display.value = "Error: " + error.message; // Display specific error message
          }
          break;          
        default:
          currentInput += buttonText;
          display.value = currentInput;
      }
    });
  });
});
