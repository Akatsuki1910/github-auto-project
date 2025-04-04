// ... (Existing code)
const geometricMeanButton = document.getElementById('geometric-mean') as HTMLButtonElement;
geometricMeanButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
    try {
        const numbers = [2, 4, 8];
        currentExpressionDisplay.textContent = `geometric mean(${numbers.join(', ')})`;
        const product = numbers.reduce((acc, num) => acc * num, 1);
        const n = numbers.length;
        const geometricMean = Math.pow(product, 1 / n);
        display.value = geometricMean.toString();
    } catch (error) {
        display.value = "Error";
    }
});
// ... (Rest of the code)