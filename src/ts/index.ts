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

    // ... (rest of the existing code)
});