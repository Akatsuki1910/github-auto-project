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
      }
       else if (buttonText === "x²") {
        currentInput += "**2"; 
      } else if (buttonText === "x<sup>y</sup>") {
        currentInput += "**";
      } else if (buttonText === "+/-") {
        currentInput = (parseFloat(currentInput) * -1).toString();
      } else if (buttonText === "%") {
          try{
            currentInput = (parseFloat(currentInput) /100).toString();
          }catch(error){
            currentInput = "Error";
          }
      } else if (buttonText === "π"){
          currentInput += Math.PI;
      } else if (buttonText === "e"){
          currentInput += Math.E;
      } else if (buttonText === "ln") {
        try {
          currentInput = Math.log(eval(currentInput)).toString();
        } catch (error) {
          currentInput = "Error";
        }
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
      } else if (buttonText === "tan") {
        try {
          currentInput = Math.tan(eval(currentInput)).toString();
        } catch (error) {
          currentInput = "Error";
        }
      } else if (buttonText === "round") {
        try {
          currentInput = Math.round(eval(currentInput)).toString();
        } catch (error) {
          currentInput = "Error";
        }
      } else if(buttonText === "( )"){
          currentInput += bracketOpen ? ")" : "(";
          bracketOpen = !bracketOpen;      
      } else if (buttonText === "MC") {
        memory = 0;
      } else if (buttonText === "MR") {
        currentInput += memory;
      } else if (buttonText === "MS") {
        memory = parseFloat(currentInput);
      } else if (buttonText === "M+") {
        memory += parseFloat(currentInput);      
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
      } else if (buttonText === "x³") {
        try {
          currentInput = Math.pow(eval(currentInput), 3).toString();
        } catch (error) {
          currentInput = "Error";
        }
      } else if (buttonText === "1/x") {
        try {
          currentInput = (1/eval(currentInput)).toString();
        } catch (error) {
          currentInput = "Error";
        }
      } else if (buttonText === "√x") {
          try {
            currentInput = Math.sqrt(eval(currentInput)).toString();
          } catch (error) {
            currentInput = "Error";
          }
      }else if (buttonText === "x!") {
        try {
          const num = eval(currentInput);
          if (num < 0 || !Number.isInteger(num)) {
              throw new Error("Factorial is not defined for negative or non-integer numbers.");
          }
            currentInput = factorial(num).toString();
        } catch (error) {
            currentInput = "Error";
        }
      } else if (buttonText === "Copy") {
          navigator.clipboard.writeText(display.value).then(() => {
            alert("Copied to clipboard: " + display.value);
          }, () => {
            alert("Failed to copy to clipboard.");
          });
      } else if (buttonText === "10<sup>x</sup>") {
        try {
          currentInput = Math.pow(10, eval(currentInput)).toString();
        } catch (error) {
          currentInput = "Error";
        }

      } else if (buttonText === "max") {
        try {
          const numbers = currentInput.split(',').map(Number);
          currentInput = Math.max(...numbers).toString();
        } catch (error) {
          currentInput = "Error";
        }
      }else {
        currentInput += buttonText;
      }

      display.value = currentInput;
    });
  });

  function factorial(n) {
        if (n === 0) {
          return 1;
        }
        return n * factorial(n - 1);
      }
});
