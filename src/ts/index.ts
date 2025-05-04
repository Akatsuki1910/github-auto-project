// ... (Existing code)
const calculateSampleStdDevButton = document.getElementById('calculate-sample-standard-deviation') as HTMLButtonElement;
calculateSampleStdDevButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display.value) {
        try {
            const numbers = display.value.split(',').map(Number);
            const n = numbers.length;
            const mean = numbers.reduce((sum, num) => sum + num, 0) / n;
            const variance = numbers.reduce((sum, num) => sum + Math.pow(num - mean, 2), 0) / (n - 1);
            const stdDev = Math.sqrt(variance);
            display.value = stdDev.toString();
        } catch (error) {
            display.value = 'Error';
        }
    }
});
// ... (Rest of existing code)