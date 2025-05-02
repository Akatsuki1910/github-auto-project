// ... (Existing code)
const calculateProductButton = document.getElementById('calculate-product') as HTMLButtonElement;
calculateProductButton.addEventListener('click', () => {
    const input = prompt('Enter numbers separated by commas:') || '';
    const numbers = input.split(',').map(Number).filter(n => !isNaN(n));
    if (numbers.length > 0) {
        display.value = numbers.reduce((product, num) => product * num, 1).toString();
    }
    else {
        display.value = 'Invalid input';
    }
});
// ... (Rest of existing code)