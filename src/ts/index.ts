// ... (Existing code)
const sumButton = document.getElementById('sum') as HTMLButtonElement;
sumButton.addEventListener('click', () => {
    const numbersString = prompt('Enter numbers separated by commas:') || '';
    const numbers = numbersString.split(',').map(Number).filter(n => !isNaN(n));
    if (numbers.length === 0) {
        display.value = 'Invalid input';
        return;
    }
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    display.value = sum.toString();
});