// ... (Existing code)
const calculateAverageButton = document.getElementById('calculate-average') as HTMLButtonElement;
calculateAverageButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display.value) {
        try {
            const numbers = display.value.split(',').map(Number);
            const sum = numbers.reduce((acc, curr) => acc + curr, 0);
            const average = sum / numbers.length;
            display.value = average.toString();
        } catch (error) {
            display.value = 'Error';
        }
    }
});
const medianButton = document.getElementById('median') as HTMLButtonElement;
medianButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display.value) {
        try {
            const numbers = display.value.split(',').map(Number).sort((a, b) => a - b);
            const mid = Math.floor(numbers.length / 2);
            const median = numbers.length % 2 === 0 ? (numbers[mid - 1] + numbers[mid]) / 2 : numbers[mid];
            display.value = median.toString();
        } catch (error) {
            display.value = 'Error';
        }
    }
});
// ... (Rest of existing code)