window.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display") as HTMLInputElement;
  const buttons = document.querySelectorAll("#calculator button");
  let currentInput = "";
  let bracketOpen = false;
  const historyElement = document.getElementById("history") as HTMLParagraphElement;
  let calculationHistory = [];
  let memory = 0;

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const buttonText = button.textContent;
      if (buttonText === "C") {
        currentInput = "";
      } else if (buttonText === "=") {
        try {
          currentInput = eval(currentInput).toString();
          calculationHistory.push(currentInput);
          historyElement.textContent = calculationHistory.join(", ");
        } catch (error) {
          currentInput = "Error";
        }
      } else if (buttonText === "←" || buttonText === "&larr;" ) {
        currentInput = currentInput.slice(0, -1);
      } else if (buttonText === "x<sup>y</sup>") {
        currentInput += "**";
      } else if (buttonText === "+/-") {
        currentInput = (parseFloat(currentInput) * -1).toString();
      }else if (buttonText === "%") {
          try{
            currentInput = (parseFloat(currentInput) /100).toString();
          }catch(error){
            currentInput = "Error";
          }
      } else if (buttonText === "π"){
          currentInput += Math.PI;
      } else if (buttonText === "e"){
          currentInput += Math.E;
      } else if (buttonText === "log") {
        try {
          currentInput = Math.log10(eval(currentInput)).toString();
        } catch (error) {
          currentInput = "Error";
        }
      } else if (buttonText === "exp") {
        try{
          currentInput = Math.exp(eval(currentInput)).toString();
        } catch (error) {
          currentInput = "Error";
        }
      } else if (buttonText === "sin") {
        try {
          currentInput = Math.sin(eval(currentInput)).toString();
        } catch (error) {
          currentInput = "Error";
        }
      } else if (buttonText === "cos") {
        try {
          currentInput = Math.cos(eval(currentInput)).toString();
        } catch (error) {
          currentInput = "Error";
        }
      } else if (buttonText === "round") {
        try {
          currentInput = Math.round(eval(currentInput)).toString();
        } catch (error) {
          currentInput = "Error";
        }
      } else if (buttonText === "( )"){
          currentInput += bracketOpen ? ")" : "(";
          bracketOpen = !bracketOpen;      
      } else if (buttonText === "MC") {
        memory = 0;
      } else if (buttonText === "MR") {
        currentInput += memory;
      } else if (buttonText === "MS") {
        memory = parseFloat(currentInput);
      } else if (buttonText === "ceil") {
        try {
          currentInput = Math.ceil(eval(currentInput)).toString();
        } catch (error) {
          currentInput = "Error";
        }
      } else if (buttonText === "|x|") {
        try {
          currentInput = Math.abs(eval(currentInput)).toString();
        } catch (error) {
          currentInput = "Error";
        }
      } else if (buttonText === "rand") {
        currentInput += Math.random();
      } else if (buttonText === "sign") {
        try {
          currentInput = Math.sign(eval(currentInput)).toString();
        } catch (error) {
          currentInput = "Error";
        }
      } else if (buttonText === "floor") {
        try {
          currentInput = Math.floor(eval(currentInput)).toString();
        } catch (error) {
          currentInput = "Error";
        }
      } else {
        currentInput += buttonText;
      }

      display.value = currentInput;
    });
  });
});
