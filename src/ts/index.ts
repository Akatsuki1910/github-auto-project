// ... (Existing Code)
window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code)

    // ... (Existing variables)
    const copyButton = document.getElementById("copy");
    const historyDiv = document.getElementById("history") as HTMLDivElement;
    const showHistoryButton = document.getElementById("show-history");
    const clearHistoryButton = document.getElementById("clear-history"); // Add clear history button
       let history: string[] = [];

       // ... (Existing event listeners)
       showHistoryButton?.addEventListener("click", () => {
        if (historyDiv.style.display === "none") {
            historyDiv.style.display = "block";
        } else {
            historyDiv.style.display = "none";
        }
    });

    copyButton.addEventListener("click", () => {
        const displayValue = display.value;
        navigator.clipboard.writeText(displayValue)
            .then(() => {
                // Optional: Provide feedback to the user that the copy was successful
                console.log("Copied to clipboard:", displayValue);
            })
            .catch(err => {
                console.error("Failed to copy: ", err);
            });
    });

        // Store history
        evaluateButton.addEventListener("click", () => {
           const expression = currentExpressionDisplay.textContent;
           const result = display.value;

           if (expression && result) {  // Check if both are defined
              history.push(`${expression} = ${result}`); 
              // Update history display
              updateHistoryDisplay();
           }
       });

    function updateHistoryDisplay(){
        historyDiv.innerHTML = ""; // Clear existing history
        history.forEach(item => {
            const p = document.createElement("p");
            p.textContent = item;
            historyDiv.appendChild(p);
        });
    }

       // Clear history functionality
       clearHistoryButton?.addEventListener("click", () => {
           history = [];
           updateHistoryDisplay();
       });
    // ... (rest of the existing code)
});
