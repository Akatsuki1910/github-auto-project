window.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display") as HTMLInputElement;
  const buttons = document.querySelectorAll("#calculator button");
  let currentInput = "";

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const buttonText = button.textContent;
      switch (buttonText) {
        case "Eval":
          try {
            const result = eval(display.value);
            display.value = result.toString();
            currentInput = result.toString();
          } catch (error) {
            display.value = "Error";
          }
          break;
          case "±":
          if(display.value !== ""){
          display.value = (-parseFloat(display.value)).toString();
          currentInput = display.value;
          }          
          break;
        default:
          currentInput += buttonText;
          display.value = currentInput;
      }
    });
  });
});