window.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display") as HTMLInputElement;
  const buttons = document.querySelectorAll("button");
  let currentInput = "";

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const buttonText = button.textContent;

      switch (buttonText) {
        // ... other cases ...
        case "Calculate":
          try {
            currentInput = eval(display.value);
            display.value = currentInput;
          } catch (error) {
            display.value = "Error";
          }
          break;
          case "tan":
          try {
            currentInput = Math.tan(parseFloat(display.value)).toString();
            display.value = currentInput;
          } catch (error) {
            display.value = "Error";
          }
          break;
          case "mod":
          try{
            const values = display.value.split("mod");
            if(values.length === 2){
              const num1 = parseFloat(values[0]);
              const num2 = parseFloat(values[1]);
              currentInput = (num1 % num2).toString();
              display.value = currentInput;
            } else {
              currentInput += buttonText; // Allow input like '10mod'
              display.value = currentInput;             
            }
          }catch(error){
            display.value = "Error";
          }
          break;
          case "Random":
              currentInput = Math.random().toString();
              display.value = currentInput;
              break;
        case "+/-":
          try {
            const currentValue = parseFloat(display.value);
            currentInput = (-currentValue).toString();
            display.value = currentInput;
          } catch (error) {
            display.value = "Error";
          }
          break;          
        default:
          currentInput += buttonText;
          display.value = currentInput;
      }
    });
  });
});
