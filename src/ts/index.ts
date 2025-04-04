// ... (Existing code)
const harmonicMeanButton = document.getElementById('harmonic-mean') as HTMLButtonElement;
harmonicMeanButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
    try {
        const numbers = [2, 4, 8];
        currentExpressionDisplay.textContent = `harmonic mean(${numbers.join(', ')})`;
        const n = numbers.length;
        const sumOfReciprocals = numbers.reduce((acc, num) => acc + (1 / num), 0);
        const harmonicMean = n / sumOfReciprocals;
        display.value = harmonicMean.toString();
    } catch (error) {
        display.value = "Error";
    }
});
// ... (Rest of the code)