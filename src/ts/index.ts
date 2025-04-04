// ... (Existing code)
const sampleMeanButton = document.getElementById('sample-mean') as HTMLButtonElement;
sampleMeanButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
    try {
        const numbers = [1, 5, 2, 8, 3, 9, 4, 7];
        currentExpressionDisplay.textContent = `sample mean(${numbers.join(', ')})`;
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        const mean = sum / numbers.length;
        display.value = mean.toString();
    } catch (error) {
        display.value = "Error";
    }
});
// ... (Rest of the code)