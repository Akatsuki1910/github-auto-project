// ... (Existing code)
const calculateRangeButton = document.getElementById('calculate-range') as HTMLButtonElement;
calculateRangeButton.addEventListener('click', () => {
    const input = prompt('Enter numbers separated by commas:') || '';
    const numbers = input.split(',').map(Number).filter(n => !isNaN(n)).sort((a, b) => a - b);
    if (numbers.length > 0) {
        display.value = (numbers[numbers.length - 1] - numbers[0]).toString();
    }
    else {
        display.value = 'Invalid input';
    }
});
// ... (Rest of existing code)