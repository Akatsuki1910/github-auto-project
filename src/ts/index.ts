window.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display") as HTMLInputElement;
    const buttons = document.querySelectorAll("button");
    let currentInput = "";
    const historyDiv = document.getElementById("history");
    const history: string[] = [];
    let memory = 0;
    let parenthesisOpen = false;

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
                case "( )":
                    currentInput += parenthesisOpen ? ")" : "(";
                    parenthesisOpen = !parenthesisOpen;
                    display.value = currentInput;
                    break;
                case "e":
                    currentInput += Math.E;
                    display.value = currentInput;
                    break;                    
                case "|x|":
                    try {
                        currentInput = Math.abs(eval(currentInput)).toString();
                        display.value = currentInput;
                    } catch (error) {
                        display.value = "Error";
                    }
                    break;
                case "floor":
                    try {
                        currentInput = Math.floor(eval(currentInput)).toString();
                        display.value = currentInput;
                    } catch (error) {
                        display.value = "Error";
                    }
                    break;
                case "rand":
                    currentInput += Math.random();
                    display.value = currentInput;
                    break;
                case "sign":
                    try {
                        const num = eval(currentInput);
                        currentInput = (num * -1).toString();
                        display.value = currentInput;
                    } catch (error) {
                        display.value = "Error";
                    }
                    break;                    
                    // ...other cases
            }
        });
    });

    function updateHistory(newEntry: string): void {
        history.push(newEntry);
        if (historyDiv) {
          historyDiv.innerHTML = history.map(item => `<div>${item}</div>`).join('');
        }
    }
    // ... other functions
});
