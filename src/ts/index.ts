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
                case "trunc":
                    currentInput += "Math.trunc(";
                    parenthesisOpen = true;
                    display.value = currentInput;                    
                    break;
                case "ln":
                    currentInput += "Math.log(";
                    parenthesisOpen = true;
                    display.value = currentInput;
                    break;
                case "10<sup>x</sup>":
                    currentInput += "Math.pow(10, ";
                    parenthesisOpen = true;
                    display.value = currentInput;
                    break;
                case "2<sup>x</sup>":
                    currentInput += "Math.pow(2, ";
                    parenthesisOpen = true;
                    display.value = currentInput;
                    break;
                case "x³":
                    currentInput += "**3";
                    display.value = currentInput;
                    break;
                // ... other cases
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