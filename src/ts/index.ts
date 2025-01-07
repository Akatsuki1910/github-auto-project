// ... (Existing Code)
window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code)

    // ... (Existing variables)
    const ceilButton = document.getElementById("ceil");
    const floorButton = document.getElementById("floor");
    const dupeButton = document.getElementById("dupe");
    const roundButton = document.getElementById("round");
    const expButton = document.getElementById("exp");

    // ... (Existing event listeners)
    ceilButton.addEventListener("click", () => {
        const currentValue = parseFloat(display.value);
        display.value = Math.ceil(currentValue).toString();
        currentExpression += 'ceil(' + currentValue + ')';
        currentExpressionDisplay.textContent = currentExpression;
    });
    floorButton.addEventListener("click", () => {
        const currentValue = parseFloat(display.value);
        display.value = Math.floor(currentValue).toString();
        currentExpression += 'floor(' + currentValue + ')';
        currentExpressionDisplay.textContent = currentExpression;
    });

    signButton.addEventListener("click", () => {
        const currentValue = parseFloat(display.value);
        if (currentValue > 0) {
            display.value = "-" + display.value;
        }
        else if (currentValue < 0) {
            display.value = display.value.substring(1);
        }
        currentExpression += 'sgn(' + currentValue + ')';
        currentExpressionDisplay.textContent = currentExpression;
    });

    dupeButton.addEventListener("click", () => {
        currentExpression += display.value;
        currentExpressionDisplay.textContent = currentExpression;
        display.value = display.value; //duplicate the value in the display
    });

    roundButton.addEventListener("click", () => {
        const currentValue = parseFloat(display.value);
        display.value = Math.round(currentValue).toString();
        currentExpression += 'round(' + currentValue + ')';
        currentExpressionDisplay.textContent = currentExpression;
    });

     expButton.addEventListener("click", () => {
        const currentValue = parseFloat(display.value);
        display.value = Math.exp(currentValue).toString();
        currentExpression += 'exp(' + currentValue + ')';
        currentExpressionDisplay.textContent = currentExpression;
    });

    // ... (rest of the existing code)
});
