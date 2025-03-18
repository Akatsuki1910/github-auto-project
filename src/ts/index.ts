// ... (Existing code)
const productButton = document.getElementById('product') as HTMLButtonElement;
productButton.addEventListener('click', () => {
    const numbersString = prompt('Enter numbers separated by commas:') || '';
    const numbers = numbersString.split(',').map(Number).filter(n => !isNaN(n));
    if (numbers.length === 0) {
        display.value = 'Invalid input';
        return;
    }
    const product = numbers.reduce((acc, curr) => acc * curr, 1);
    display.value = product.toString();
});