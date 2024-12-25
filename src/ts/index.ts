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
        case "(":
          currentInput += "(";
          display.value = currentInput;
          break;
        case ")":
          currentInput += ")";
          display.value = currentInput;
          break;
        // ... (Other cases remain unchanged)
      }
    });
  });
});
