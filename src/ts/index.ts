// ... (Existing code)
const populationVarianceButton = document.getElementById('population-variance') as HTMLButtonElement;
populationVarianceButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
    try {
        const numbers = [1, 5, 2, 8, 3, 9, 4, 7];
        currentExpressionDisplay.textContent = `population variance(${numbers.join(', ')})`;
        const mean = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
        const squaredDifferences = numbers.map(num => Math.pow(num - mean, 2));
        const variance = squaredDifferences.reduce((sum, diff) => sum + diff, 0) / (numbers.length-1); //population variance
        display.value = variance.toString();
    }
    catch (error) {
        display.value = "Error";
    }
});
// ... (Rest of the code)