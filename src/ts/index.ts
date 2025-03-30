// ... (Existing code)
const productButton = document.getElementById('product') as HTMLButtonElement;
productButton.addEventListener('click', () => {
    const currentValue = display.value;
    const numbers = currentValue.split('*').map(Number);
    if (numbers.some(isNaN)) {
        display.value = "Invalid input for product";
    }
    else {
        const product = numbers.reduce((a, b) => a * b, 1);
        display.value = product.toString();
    }
});