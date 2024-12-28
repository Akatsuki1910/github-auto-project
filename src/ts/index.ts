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
                case "max(x,y)":
                    currentInput += "Math.max(";
                    parenthesisOpen = true; // Add this line to track parenthesis
                    display.value = currentInput;
                    break;
                case "1/x":
                    try {
                        const result = 1 / eval(currentInput);
                        display.value = result.toString();
                        updateHistory(`1/(${currentInput})=${result}`);
                        currentInput = result.toString();
                    } catch (error) {
                        display.value = "Error";
                    }
                    break;                
                case "x<sup>y</sup>":
                    currentInput += "**";
                    display.value = currentInput;
                    break;
                case "Euler's number (γ)":
                    currentInput += Math.E.toString();
                    display.value = currentInput;
                    break;
                case "log<sub>10</sub>":
                    currentInput += "Math.log10(";
                    parenthesisOpen = true; // Add this line to track parenthesis
                    display.value = currentInput;
                    break;
                    case "ceil":
                    try {
                        const result = Math.ceil(eval(currentInput));
                        display.value = result.toString();
                        updateHistory(`ceil(${currentInput})=${result}`);
                        currentInput = result.toString();
                    }
                    catch (error) {
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