// ... (Existing code)
const medianButton = document.getElementById('median') as HTMLButtonElement;
medianButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
    try {
        // Example array of numbers
        const numbers = [5, 2, 8, 1, 9, 4];
        // Sort the array to find the median
        const sortedNumbers = numbers.slice().sort((a, b) => a - b);
        const mid = Math.floor(sortedNumbers.length / 2);
        const median = sortedNumbers.length % 2 === 0 ? (sortedNumbers[mid - 1] + sortedNumbers[mid]) / 2 : sortedNumbers[mid];
        currentExpressionDisplay.textContent = `median(${numbers.join(', ')})`;
        display.value = median.toString();
    }
    catch (error) {
        display.value = "Error";
    }
});
// ... (Rest of the code)