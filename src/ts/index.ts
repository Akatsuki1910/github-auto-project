// ... (Existing code)
const averageButton = document.getElementById('average') as HTMLButtonElement;
averageButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
    try {
        // For simplicity, we'll average a fixed array of numbers. In a real application, you would likely get these from user input.
        const numbers = [1, 2, 3, 4, 5];
        const sum = numbers.reduce((a, b) => a + b, 0);
        const average = sum / numbers.length;
        currentExpressionDisplay.textContent = `avg(${numbers.join(', ')})`;
        display.value = average.toString();
    }
    catch (error) {
        display.value = "Error";
    }
});
// ... (Rest of the code)