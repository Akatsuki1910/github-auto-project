// ... (Existing code)
const sampleStandardDeviationButton = document.getElementById('sample-standard-deviation') as HTMLButtonElement;
sampleStandardDeviationButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
    try {
        const numbers = [1, 5, 2, 8, 3, 9, 4, 7];
        currentExpressionDisplay.textContent = `sample stdev(${numbers.join(', ')})`;
        const mean = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
        const squaredDifferences = numbers.map(num => Math.pow(num - mean, 2));
        const variance = squaredDifferences.reduce((sum, diff) => sum + diff, 0) / (numbers.length -1); 
        const standardDeviation = Math.sqrt(variance);
        display.value = standardDeviation.toString();
    }
    catch (error) {
        display.value = "Error";
    }
});
// ... (Rest of the code)