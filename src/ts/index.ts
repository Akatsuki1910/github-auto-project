window.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display") as HTMLInputElement;
    const buttons = document.querySelectorAll("button");
    let currentInput = "";
    let memory = 0;
    const historyDiv = document.getElementById("history");
    const history: string[] = [];

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
                case "toggleHistory":
                    if (historyDiv) {
                        const currentDisplay = historyDiv.style.display;
                        historyDiv.style.display = currentDisplay === "none" ? "block" : "none";
                        historyDiv.innerHTML = history.map(item => `<p>${item}</p>`).join('');
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
});