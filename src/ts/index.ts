window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code)

    const calculateRangeButton = document.getElementById("calculate-range") as HTMLButtonElement;
    calculateRangeButton.addEventListener("click", () => {
        try {
            const numbers = currentInput.split(/\+|-|\*|\//g).map(Number).sort((a, b) => a - b);
            const range = numbers[numbers.length - 1] - numbers[0];
            display.value = range.toString();
            currentInput = range.toString();
        } catch (error) {
            display.value = "Error";
        }
    });
});