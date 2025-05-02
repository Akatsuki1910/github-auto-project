// ... (Existing code)
const calculateSumButton = document.getElementById('calculate-sum') as HTMLButtonElement;
calculateSumButton.addEventListener('click', () => {
    const input = prompt('Enter numbers separated by commas:') || '';
    const numbers = input.split(',').map(Number).filter(n => !isNaN(n));
    if (numbers.length > 0) {
        display.value = numbers.reduce((sum, num) => sum + num, 0).toString();
    }
    else {
        display.value = 'Invalid input';
    }
});
// ... (Rest of existing code)