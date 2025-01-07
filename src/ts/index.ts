// ... (Existing Code)
window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code)

    // ... (Existing variables)
     const fibonacciButton = document.getElementById("fibonacci");

       // ... (Existing event listeners)
    fibonacciButton.addEventListener("click", () => {
        const n = parseInt(display.value);
        if (isNaN(n) || n < 0) {
            display.value = "Error";
        } else {
            let a = 0,
                b = 1,
                temp;
            for (let i = 0; i < n; i++) {
                temp = b;
                b = a + b;
                a = temp;
            }
            display.value = a.toString();
            currentExpression += 'Fib(' + n + ')';
            currentExpressionDisplay.textContent = currentExpression;
        }
    });
    // ... (rest of the existing code)
});