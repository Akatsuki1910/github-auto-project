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