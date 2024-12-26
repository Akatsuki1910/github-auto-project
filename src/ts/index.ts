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
                case "MS":
                    memory = parseFloat(display.value);
                    break;
                case "MR":
                    display.value = memory.toString();
                    currentInput = memory.toString();
                    break;
                case "MC":
                    memory = 0;
                    break;
                case "M+":
                    memory += parseFloat(display.value);
                    break;
                case "M-":
                    memory -= parseFloat(display.value);
                    break;
                case "±":
                    if (display.value) {
                        display.value = (-parseFloat(display.value)).toString();
                        currentInput = display.value;
                    }
                    break;                
                case "ln":
                    try {
                        const result = Math.log(parseFloat(display.value));
                        display.value = result.toString();
                        currentInput = result.toString();
                    } catch (error) {
                        display.value = "Error";
                    }
                    break;
                case "10<sup>x</sup>":
                case "exp10": // Added this case for the new button
                    try {
                        const result = Math.pow(10, parseFloat(display.value));
                        display.value = result.toString();
                        currentInput = result.toString();
                    } catch (error) {
                        display.value = "Error";
                    }
                    break;                                
                // ... (Other cases remain unchanged)    
            }
        });
    });
});
