window.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display") as HTMLInputElement;
    const buttons = document.querySelectorAll("button");
    let currentInput = "";
    let memory = 0;

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const buttonText = button.textContent;

            switch (buttonText) {
                case "AC":
                    currentInput = "";
                    display.value = "";
                    break;
                case "=":
                    try {
                        currentInput = eval(currentInput).toString();
                        display.value = currentInput;
                    } catch (error) {
                        display.value = "Error";
                    }
                    break;
                case "C":
                    currentInput = currentInput.slice(0, -1);
                    display.value = currentInput;
                    break;                
                case "e":
                    currentInput += Math.E;
                    display.value = currentInput;
                    break;
                case "MS": // Memory Store
                    memory = parseFloat(display.value);
                    break;
                case "MR": // Memory Recall
                    currentInput += memory;
                    display.value = currentInput;
                    break;
                case "MC": // Memory Clear
                    memory = 0;
                    break;
                case "Copy":
                    navigator.clipboard.writeText(display.value);
                    break;
                case "π":
                    currentInput += Math.PI;
                    display.value = currentInput;                    
                    break;
                case "√":
                    currentInput = Math.sqrt(parseFloat(currentInput)).toString();
                    display.value = currentInput;
                    break;    
                case "⌫": // Backspace functionality
                    currentInput = currentInput.slice(0, -1);
                    display.value = currentInput;
                    break;     
                case ".":
                    if (!currentInput.includes('.')) {
                        currentInput += ".";
                        display.value = currentInput;
                    }
                    break;
                case "!" : //factorial
                  try {
                    const num = parseFloat(currentInput);                  
                    if (isNaN(num)){
                      display.value="Error: Not a Number";
                      currentInput = "";
                      break;
                    }
                    const result = factorial(num);
                    currentInput = result.toString();
                    display.value = currentInput;
                  } catch (error) {
                    display.value = "Error";
                  }
                    break;     
                 case "10<sup>x</sup>":
                    currentInput += `* 10 ** `; // Allows inputting exponent
                    display.value = currentInput;            
                    break;    
                case "log<sub>10</sub>":
                    currentInput += "Math.log10(";
                    display.value = currentInput;
                    break;
                case "Rand":
                    currentInput += Math.random();
                    display.value = currentInput;
                    break;                                                                                                 
                default:
                    currentInput += buttonText;
                    display.value = currentInput;
            }
        });
    });

    function factorial(n: number): number {
      if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
      }
      if (n === 0) {
        return 1;
      } else {
        return n * factorial(n - 1);
      }
    }
});