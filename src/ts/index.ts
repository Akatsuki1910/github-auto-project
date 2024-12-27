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
                case "e":
                    currentInput += Math.E;
                    display.value = currentInput;
                    break;                
                case "MS":
                    memory = parseFloat(display.value);
                    break;
                case "MR":
                    currentInput += memory;
                    display.value = currentInput;
                    break;
                case "MC":
                    memory = 0; // clear memory
                    break;
                default:
                    currentInput += buttonText;
                    display.value = currentInput;
            }
        });
    });
});