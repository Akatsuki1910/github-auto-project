window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code)

    const calculateMedianButton = document.getElementById("calculate-median") as HTMLButtonElement;
    calculateMedianButton.addEventListener("click", () => {
        try {
            const numbers = currentInput.split(/\+|-|\*|\//g).map(Number).sort((a, b) => a - b);
            const mid = Math.floor(numbers.length / 2);
            const median = numbers.length % 2 !== 0 ? numbers[mid] : (numbers[mid - 1] + numbers[mid]) / 2;
            display.value = median.toString();
            currentInput = median.toString();
        } catch (error) {
            display.value = "Error";
        }
    });
});