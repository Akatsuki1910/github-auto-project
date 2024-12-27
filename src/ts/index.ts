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
                case ".":
                    if (!currentInput.includes('.')) {
                        currentInput += ".";
                        display.value = currentInput;                        
                    }
                    break;    
                case "x2":
                    currentInput = (parseFloat(currentInput) * 2).toString();
                    display.value = currentInput;
                    break;                
                case "Rand":
                    currentInput += Math.random();
                    display.value = currentInput;
                    break;
                case "x³":
                    currentInput = Math.pow(parseFloat(currentInput),3).toString();
                    display.value = currentInput;
                    break;
                case "Int":
                    currentInput = Math.floor(parseFloat(currentInput)).toString();
                    display.value = currentInput;
                    break;      
                case "←": // Backspace functionality
                    currentInput = currentInput.slice(0, -1);
                    display.value = currentInput;
                    break;          
                default:
                    currentInput += buttonText;
                    display.value = currentInput;
            }
        });
    });
});
