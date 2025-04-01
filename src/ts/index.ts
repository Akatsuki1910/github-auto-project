// ... (Existing code)
const productAllButton = document.getElementById('product-all') as HTMLButtonElement;
productAllButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const numbers = display.value.split(',').map(Number);
    if (numbers.length < 1) {
        display.value = 'Error: Enter at least one number separated by commas.';
        return;
    }
    const product = numbers.reduce((acc, curr) => acc * curr, 1);
    display.value = product.toString();
});
// ... (Rest of the code)