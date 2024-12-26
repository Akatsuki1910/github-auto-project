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
                    memory = 0;                    
                    break;
                case "CE": // Clear Entry
                    currentInput = "";
                    display.value = "";
                    break;     
                case "clearAll":
                    currentInput = "";
                    display.value = "0";
                    break;                                   
                default:
                    currentInput += buttonText;
                    display.value = currentInput;
            }
        });
    });
});