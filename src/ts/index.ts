// ... (Existing code)
const calculateRangeButton = document.getElementById('range') as HTMLButtonElement;
calculateRangeButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display.value) {
        try {
            const numbers = display.value.split(',').map(Number);
            numbers.sort((a, b) => a - b);
            const range = numbers[numbers.length - 1] - numbers[0];
            display.value = range.toString();
        } catch (error) {
            display.value = 'Error';
        }
    }
});
// ... (Rest of existing code)