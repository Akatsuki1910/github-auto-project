window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code)

    const calculateProductButton = document.getElementById("calculate-product") as HTMLButtonElement;
    calculateProductButton.addEventListener("click", () => {
        try {
            const numbers = currentInput.split(/\+|-|\*|\//g).map(Number);
            const product = numbers.reduce((acc, curr) => acc * curr, 1);
            display.value = product.toString();
            currentInput = product.toString();
        } catch (error) {
            display.value = "Error";
        }
    });

    const calculateVarianceButton = document.getElementById("calculate-variance") as HTMLButtonElement;
    calculateVarianceButton.addEventListener("click", () => {
        try {
            const numbers = currentInput.split(/\+|-|\*|\//g).map(Number);
            const n = numbers.length;
            const mean = numbers.reduce((acc, curr) => acc + curr, 0) / n;
            const variance = numbers.reduce((acc, curr) => acc + Math.pow(curr - mean, 2), 0) / n;
            display.value = variance.toString();
            currentInput = variance.toString();
        } catch (error) {
            display.value = "Error";
        }
    });
});