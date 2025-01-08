// ... (Existing Code)
window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code and variables)
    const expressionHistoryDiv = document.getElementById("expression-history") as HTMLDivElement;
    const clearExpressionHistoryButton = document.getElementById("clear-expression-history") as HTMLButtonElement;
    const clearDisplayButton = document.getElementById("clear-display") as HTMLButtonElement;
    const clearAllButton = document.getElementById("clearAll") as HTMLButtonElement;
    const exportHistoryButton = document.getElementById("export-history") as HTMLButtonElement;
    const toggleThemeButton = document.getElementById("toggle-theme") as HTMLButtonElement;
    const backspaceButton = document.getElementById("backspace") as HTMLButtonElement;
    let expressionHistory: string[] = [];
    let isDarkTheme = false;

    // ... (Existing event listeners)

    evaluateButton?.addEventListener("click", () => {
        // ... (Existing evaluation logic)

        // Add evaluated expression to history
        const expression = display.value;
        expressionHistory.push(expression);
        updateExpressionHistoryDisplay();
    });

    function updateExpressionHistoryDisplay() {
        expressionHistoryDiv.innerHTML = ""; // Clear existing history
        expressionHistory.forEach(item => {
            const p = document.createElement("p");
            p.textContent = item;
            expressionHistoryDiv.appendChild(p);
        });
    }

    showHistoryButton?.addEventListener("click", () => {
        historyDiv.style.display = historyDiv.style.display === "none" ? "block" : "none";
        expressionHistoryDiv.style.display = expressionHistoryDiv.style.display === "none" ? "block" : "none"; // Show/hide expression history
    });

    clearExpressionHistoryButton.addEventListener("click", () => {
        expressionHistory = [];
        updateExpressionHistoryDisplay();
    });

    clearDisplayButton.addEventListener("click", () => {
        display.value = '';
        currentExpressionDisplay.textContent = '';
    });

    clearAllButton.addEventListener("click", () => {
        display.value = '';
        currentExpressionDisplay.textContent = '';
        expressionHistory = [];
        updateExpressionHistoryDisplay();
        history.length = 0;
        updateHistory(); // Clear button history as well
    });

    exportHistoryButton.addEventListener("click", () => {
        const historyText = expressionHistory.join('\n');
        const blob = new Blob([historyText], { type: 'text/plain' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'calculator_history.txt';
        a.click();
    });

    toggleThemeButton.addEventListener("click", () => {
        isDarkTheme = !isDarkTheme;
        document.body.classList.toggle("dark-theme", isDarkTheme);
    });

    backspaceButton.addEventListener("click", () => {
        display.value = display.value.slice(0, -1);
        currentExpressionDisplay.textContent = display.value;
    });

        // ... (rest of the existing code)
});