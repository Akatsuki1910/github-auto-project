// ... (Existing code)
const rangeButton = document.getElementById('range') as HTMLButtonElement;
rangeButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
    try {
        const numbers = [1, 5, 2, 8, 3, 9, 4, 7];
        currentExpressionDisplay.textContent = `range(${numbers.join(', ')})`;
        const min = Math.min(...numbers);
        const max = Math.max(...numbers);
        display.value = (max - min).toString();
    }
    catch (error) {
        display.value = "Error";
    }
});
// ... (Rest of the code)