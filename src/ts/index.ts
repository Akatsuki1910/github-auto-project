window.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display") as HTMLInputElement;
    const buttons = document.querySelectorAll("button");
    let currentInput = "";
    const historyDiv = document.getElementById("history");
    const history: string[] = [];
    let memory = 0;

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const buttonText = button.textContent;

            switch (buttonText) {
                // ... (other cases)
                case "x<sup>y</sup>":
                    currentInput += "**";
                    display.value = currentInput;
                    break;
                case "=":
                    try {
                        const result = eval(currentInput);
                        display.value = result.toString();
                        updateHistory(`${currentInput}=${result}`);
                        currentInput = result.toString();
                    } catch (error) {
                        display.value = "Error";
                    }
                    break;
                    // ...other cases
            }
        });
    });
    // ... other functions
});
