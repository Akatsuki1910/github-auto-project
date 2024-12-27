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
                case "C":
                    currentInput = "";
                    display.value = "";
                    break;
                case "AC":
                    currentInput = "";
                    display.value = "";
                    history.length = 0; // Clear history
                    if (historyDiv) {
                        historyDiv.innerHTML = "";
                    }
                    break;
                case "⌫":
                    currentInput = currentInput.slice(0, -1);
                    display.value = currentInput;
                    break;
                case "toggleHistory":
                    if (historyDiv) {
                        const currentDisplay = historyDiv.style.display;
                        historyDiv.style.display = currentDisplay === "none" ? "block" : "none";
                        historyDiv.innerHTML = history.map(item => `<p>${item}</p>`).join('');
                    }
                    break;                
                case "M+":
                    try {
                        memory += parseFloat(display.value);
                    } catch (error) {
                        // Handle cases where display.value isn't a valid number
                    }
                    break;                
                case "MR":
                    display.value = memory.toString();
                    currentInput = memory.toString();
                    break;
                case "x²":
                    try {
                        const result = Math.pow(parseFloat(display.value), 2);
                        display.value = result.toString();
                        currentInput = result.toString();
                        updateHistory(`${currentInput}²=${result}`);
                    } catch (error) {
                        display.value = "Error";
                    }
                    break;
                case "!":
                    try {
                        const num = parseInt(display.value);
                        if (isNaN(num)) {
                          throw new Error("Invalid input for factorial");
                        }
                        const result = factorial(num);
                        display.value = result.toString();
                        currentInput = result.toString();
                        updateHistory(`${num}! = ${result}`);
                    } catch (error) {
                        display.value = "Error";
                    }
                    break;
                case "round":
                    try {
                        const result = Math.round(parseFloat(display.value));
                        display.value = result.toString();
                        currentInput = result.toString();
                        updateHistory(`round(${currentInput})=${result}`);
                    } catch (error) {
                        display.value = "Error";
                    }
                break;
                case "sin":
                    try {
                        const result = Math.sin(parseFloat(display.value));
                        display.value = result.toString();
                        currentInput = result.toString();
                        updateHistory(`sin(${currentInput})=${result}`);
                    } catch (error) {
                        display.value = "Error";
                    }
                    break;
                case "cos":
                    try {
                        const result = Math.cos(parseFloat(display.value));
                        display.value = result.toString();
                        currentInput = result.toString();
                        updateHistory(`cos(${currentInput})=${result}`);
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

    function updateHistory(newEntry: string) {
        history.push(newEntry);
    }

    function factorial(n: number): number {
        if (n === 0) {
            return 1;
        } else if (n < 0) {
          throw new Error("Factorial is not defined for negative numbers");
        }
        return n * factorial(n - 1);
    }
});
