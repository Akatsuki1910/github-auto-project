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
                // ... (rest of the switch cases)
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
    // ... other functions

    function updateHistory(newEntry: string) {
        history.push(newEntry);
    }
});
