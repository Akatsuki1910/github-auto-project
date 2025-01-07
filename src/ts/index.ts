// ... (Existing Code)
window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code)

    // ... (Existing variables)
    const ceilButton = document.getElementById("ceil");
    const floorButton = document.getElementById("floor");
    const dupeButton = document.getElementById("dupe");
    const roundButton = document.getElementById("round");
    const expButton = document.getElementById("exp");
    const maxButton = document.getElementById("max");
    const minButton = document.getElementById("min");
    const avgButton = document.getElementById("average");
    const sumButton = document.getElementById("sum");
    const clearHistoryButton = document.getElementById("clear-history");
    const historyDiv = document.getElementById("history");
    const showHistoryButton = document.getElementById("show-history");
    let sum = 0;

    // ... (Existing event listeners)
    // ... (Other event listeners)
 maxButton.addEventListener("click", () => {
        const currentValue = parseFloat(display.value);
        const previousValue = parseFloat(prevNumber);
        display.value = Math.max(currentValue, previousValue).toString();
        currentExpression += 'max(' + currentValue + ','+ previousValue + ')';
        currentExpressionDisplay.textContent = currentExpression;
 });
minButton.addEventListener("click", () => {
        const currentValue = parseFloat(display.value);
        const previousValue = parseFloat(prevNumber);
        display.value = Math.min(currentValue, previousValue).toString();
        currentExpression += 'min(' + currentValue + ',' + previousValue + ')';
        currentExpressionDisplay.textContent = currentExpression;
    });

        avgButton.addEventListener("click", () => {
        const currentValue = parseFloat(display.value);
        const previousValue = parseFloat(prevNumber);
        display.value = ((currentValue + previousValue) / 2).toString();
        currentExpression += 'avg(' + currentValue + ',' + previousValue + ')';
        currentExpressionDisplay.textContent = currentExpression;
    });

    sumButton.addEventListener("click", () => {
        sum += parseFloat(display.value);
        currentExpression = ""; // clear the display
        display.value = "";
    });

    evaluate.addEventListener("click", () => {
        // ... existing code ...

        try {
           if (currentExpression.length !==0){
            result = eval(currentExpression);
            }
            else {
            result = eval(display.value);            
            }
            if(sum !== 0){
                 result += sum;
                display.value = result.toString();
                sum = 0;
            }
            else{
                display.value = result.toString();
            }
            const historyItem = document.createElement('p');
            historyItem.textContent = result;
            historyDiv.appendChild(historyItem);

            // ... existing code ...
        } catch (error) {
            // ... existing code ...
        }
    });
       clearHistoryButton.addEventListener("click", () => {
        historyDiv.innerHTML = ''; // Clear the history display
    });

    showHistoryButton.addEventListener("click", () => {
        const historyDisplayStyle = historyDiv.style.display;
        historyDiv.style.display = historyDisplayStyle === "none" ? "block" : "none";
    });
    // ... (rest of the existing code)
});
