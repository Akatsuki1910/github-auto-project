// ... (Existing Code)
window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code)

    // ... (Existing Code)
    // ... existing code
    // ... (rest of the code)
    let memoryValue: number | null = null;
    let lastAnswer: number | null = null;
    const history: string[] = [];
    const historyDiv = document.getElementById("history") as HTMLDivElement;
    const display = document.getElementById("display") as HTMLInputElement;
    // ... existing code ...
    const toggleHistoryButton = document.getElementById("toggle-history") as HTMLButtonElement;
    toggleHistoryButton.addEventListener("click", () => {
        if (historyDiv.style.display === "none" || historyDiv.style.display === "") {
            historyDiv.style.display = "block";
        }
        else {
            historyDiv.style.display = "none";
        }
    });

    const updateHistory = (value: string) => {
        history.push(value);
        historyDiv.innerHTML = history.map(item => `<p>${item}</p>`).join('');
    };
    // ... existing code ...
});
