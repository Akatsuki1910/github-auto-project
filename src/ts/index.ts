window.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display") as HTMLInputElement;
    const buttons = document.querySelectorAll("button");
    let currentInput = "";
    let memory = 0;

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const buttonText = button.textContent;

            switch (buttonText) {
                // ... (Existing code remains unchanged)
                case "x^2":
                    try {
                        const currentValue = parseFloat(display.value);
                        display.value = (currentValue * currentValue).toString();
                        currentInput = display.value; // Update currentInput
                    } catch (error) {
                        display.value = "Error";
                    }
                    break;                
                case ".":
                    if (!display.value.includes('.')) {
                        display.value += buttonText;  
                        currentInput += buttonText;
                    }
                    break;
                case "Eval":
                    try {
                        display.value = eval(display.value);
                    } catch (error) {
                        display.value = "Error";
                    }
                    break;                
                case "CE":
                    currentInput = "";
                    display.value = "";
                    break;                    
                case "+/-":
                      try {
                        const currentValue = parseFloat(display.value);
                        display.value = (-currentValue).toString();
                    } catch (error) {
                        display.value = "Error";
                    }
                    break;
                case "log₁₀":
                      try {
                        const currentValue = parseFloat(display.value);
                        display.value = Math.log10(currentValue).toString();
                      } catch (error) {
                          display.value = "Error";
                        }
                        break;
                case "exp(-1)":
                          display.value = Math.exp(-1).toString();
                          currentInput = Math.exp(-1).toString();
                          break;
                case "sign": //sign change
                    if (display.value !== "" && display.value !== "0" && !isNaN(Number(display.value))) { // Check for valid numeric input
                      display.value = (parseFloat(display.value) * -1).toString();
                    }                    
                    break;                    
            }
        });
    });
});