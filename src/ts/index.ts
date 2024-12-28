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
});