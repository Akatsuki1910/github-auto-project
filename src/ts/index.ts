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

// clear history button
const clearHistoryButton = document.getElementById("clear-history");
clearHistoryButton.addEventListener("click", () => {
  history.length = 0; //履歴配列をクリア
  historyDiv.innerHTML = ""; //履歴表示をクリア
});

    // ... existing code ...
    // Memory buttons
    // ... existing code ...

    // Sign Change button
    // ... (rest of the code)
    // ... (rest of the code)
});
