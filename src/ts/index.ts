// ... (Existing code)
const calculatePopulationVarianceButton = document.getElementById('calculate-population-variance') as HTMLButtonElement;
calculatePopulationVarianceButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display.value) {
        try {
            const numbers = display.value.split(',').map(Number);
            const n = numbers.length;
            const mean = numbers.reduce((sum, num) => sum + num, 0) / n;
            const variance = numbers.reduce((sum, num) => sum + Math.pow(num - mean, 2), 0) / n;
            display.value = variance.toString();
        } catch (error) {
            display.value = 'Error';
        }
    }
});
// ... (Rest of existing code)