// ... (Existing Code)
window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code)

    // ... (Existing variables)
    const copyButton = document.getElementById("copy");
    const historyDiv = document.getElementById("history") as HTMLDivElement;
    const showHistoryButton = document.getElementById("show-history");
    const clearHistoryButton = document.getElementById("clear-history"); // Add clear history button
    const toggleThemeButton = document.getElementById("toggle-theme");
    const keyboardToggle = document.getElementById("keyboard-toggle");
    const keyboardDiv = document.getElementById("keyboard") as HTMLDivElement; 
       let history: string[] = [];
       let isDarkTheme = false;
       let isKeyboardVisible = false;

       // ... (Existing event listeners)
       showHistoryButton?.addEventListener("click", () => {
        historyDiv.style.display = historyDiv.style.display === "none" ? "block" : "none";
       });

       // ... (Existing copyButton listener)

       // ... (Existing evaluateButton listener)

    function updateHistoryDisplay(){
        historyDiv.innerHTML = ""; // Clear existing history
        history.forEach(item => {
            const p = document.createElement("p");
            p.textContent = item;
            historyDiv.appendChild(p);
        });
    }

       // ... (Existing clearHistoryButton listener)

       // ... (Existing toggleThemeButton listener)

       keyboardToggle?.addEventListener("click", () => {
           isKeyboardVisible = !isKeyboardVisible;
           keyboardDiv.style.display = isKeyboardVisible ? "block" : "none";
       });
    // ... (rest of the existing code)
});