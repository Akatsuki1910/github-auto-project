// ... (Existing Code)
window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code)

    // ... (Existing variables)
    //nth-root
    const nthRootButton = document.getElementById("nth-root");

       // ... (Existing event listeners)
       nthRootButton.addEventListener("click", () => {
        const currentValue = parseFloat(display.value);
        if (prevNumber) {
            const previousValue = parseFloat(prevNumber);
            display.value = Math.pow(currentValue, 1/previousValue).toString();
            currentExpression += currentValue +  '√' + previousValue;
            currentExpressionDisplay.textContent = currentExpression;        
        }
    });

    // ... (rest of the existing code)
});
