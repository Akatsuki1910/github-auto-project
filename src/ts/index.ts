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
                case "x³":
                    try {
                        const result = Math.pow(parseFloat(display.value), 3);
                        display.value = result.toString();
                        currentInput = result.toString();
                    } catch (error) {
                        display.value = "Error";
                    }
                    break;
                    // ... (Other cases remain unchanged)
                case "%":
                  try {
                    const currentValue = parseFloat(display.value);
                    const result = currentValue / 100;                    
                    display.value = result.toString();
                    currentInput = result.toString();
                  } catch (error) {
                    display.value = "Error";
                  }                  
                  break;
                case "+/-":
                    try {
                        const currentValue = parseFloat(display.value);
                        display.value = (-currentValue).toString();
                        currentInput = (-currentValue).toString();
                    }
                    catch (error) {
                        display.value = "Error";
                    }
                    break;     
                case "x2":
                    try {
                        const currentValue = parseFloat(display.value);
                        display.value = (currentValue * 2).toString();
                        currentInput = (currentValue * 2).toString();
                    } catch (error) {
                        display.value = "Error";
                    }
                    break;               
            }
        });
    });
});
