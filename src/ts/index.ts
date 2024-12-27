window.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display") as HTMLInputElement;
    const buttons = document.querySelectorAll("button");
    let currentInput = "";

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
                // ... other cases
                case "cos":
                    currentInput += "Math.cos(";
                    display.value = currentInput;
                    break;                
                case "tan":
                    currentInput += "Math.tan(";
                    display.value = currentInput;
                    break;
                case "^":
                    currentInput += "**";
                    display.value = currentInput;
                    break;
                case "sign":
                    try{
                        const num = parseFloat(currentInput);
                        currentInput = Math.sign(num).toString();
                        display.value = currentInput;
                    } catch (error) {
                        display.value = "Error";
                    }
                    break;                
                case "round":
                    try {
                        currentInput = Math.round(eval(currentInput)).toString();
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
