window.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display") as HTMLInputElement;
  const buttons = document.querySelectorAll("button");
  let currentInput = "";

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const buttonText = button.textContent;

      switch (buttonText) {
        case "C":
          currentInput = "";
          display.value = currentInput;
          break;
        case "Calculate":
          try {
            currentInput = eval(display.value);
            display.value = currentInput;
          } catch (error) {
            display.value = "Error";
          }
          break;
          case "Exit":
            window.close();
            break;
        case "DEL":
            if(display.value.length > 0){
                display.value = display.value.slice(0,-1);
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
