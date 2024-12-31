// ... (Existing Code)
window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code)

    // ... (Existing Code)
    // ... existing code
    // ... (rest of the code)
    let memoryValue = null;
    let lastAnswer = null;
    const history = [];
    const historyDiv = document.getElementById("history");
    const display = document.getElementById("display");
    // ... existing code ...
    const toggleHistoryButton = document.getElementById("toggle-history");
    toggleHistoryButton.addEventListener("click", () => {
        if (historyDiv.style.display === "none" || historyDiv.style.display === "") {
            historyDiv.style.display = "block";
        }
        else {
            historyDiv.style.display = "none";
        }
    });

    const updateHistory = (value) => {
        history.push(value);
        historyDiv.innerHTML = history.map(item => `<p>${item}</p>`).join('');
    };
    const clearLastHistoryButton = document.getElementById("clear-last-history");
    clearLastHistoryButton.addEventListener("click", () => {
        history.pop();
        historyDiv.innerHTML = history.map(item => `<p>${item}</p>`).join('');
    });

    const copyDisplayButton = document.getElementById("copy-display");
    copyDisplayButton.addEventListener("click", () => {
        navigator.clipboard.writeText(display.value).then(() => {
            alert("Display value copied to clipboard!");
        }, () => {
            alert("Failed to copy display value.");
        });
    });
    // ... existing code ...
    for (let i = 0; i <= 9; i++) {
        const numberButton = document.getElementById(i.toString());
        numberButton.addEventListener("click", () => {
            display.value += i.toString();
        });
    }

    const operators = ['plus', 'minus', 'multiply', 'divide'];
    operators.forEach(operator => {
        const operatorButton = document.getElementById(operator);
        operatorButton.addEventListener('click', () => {
            display.value += operator === 'plus' ? '+' : operator === 'minus' ? '-' : operator === 'multiply' ? '*' : '/';
        });
    });
});
