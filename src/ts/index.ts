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
                case "%":
                    try {
                        currentInput = (eval(currentInput) / 100).toString();
                        display.value = currentInput;
                    } catch (error) {
                        display.value = "Error";
                    }
                    break;     
                case "+/-":
                    try {
                        currentInput = (eval(currentInput) * -1).toString();
                        display.value = currentInput;
                    } catch (error) {
                        display.value = "Error";
                    }                    
                    break;  
                case "π":
                    currentInput += Math.PI;
                    display.value = currentInput;
                    break;    
                case "x²":
                    try {
                        currentInput = (eval(currentInput) * eval(currentInput)).toString();
                        display.value = currentInput;
                    } catch (error) {
                        display.value = "Error";
                    }                    
                    break;     
                case "!":
                    try {
                        const num = eval(currentInput);
                        if (num < 0 || !Number.isInteger(num)) {
                            display.value = "Error: Invalid input for factorial";
                        } else {
                            let result = 1;
                            for (let i = 2; i <= num; i++) {
                                result *= i;
                            }
                            currentInput = result.toString();
                            display.value = currentInput;
                        }
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
