// ... (Existing Code)
window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code and variables)
    const expressionHistoryDiv = document.getElementById("expression-history") as HTMLDivElement;
    let expressionHistory: string[] = [];

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

        // ... (rest of the existing code)
});