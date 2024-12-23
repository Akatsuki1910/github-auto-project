window.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display") as HTMLInputElement;
  const buttons = document.querySelectorAll("#calculator button");
  let currentInput = "";
  let history = [];

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const buttonText = button.textContent;
      switch (buttonText) {
        case "=":
          try {
            const result = eval(display.value);
            display.value = result.toString();
            currentInput = result.toString();
            history.push(currentInput); //履歴に追加
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
        case "C":
          currentInput = "";
          display.value = "";
          break;
        case "Back":
          if (display.value.length > 0) {
               display.value = display.value.slice(0, -1);
           }
           currentInput = display.value;
           break;        
        default:
          currentInput += buttonText;
          display.value = currentInput;
      }
    });
  });
});