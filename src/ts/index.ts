// ... (Existing code)
const productArrayButton = document.getElementById('product-array') as HTMLButtonElement;
productArrayButton.addEventListener('click', () => {
    const currentValue = display.value;
    const numbers = currentValue.split(',').map(Number);
    if (numbers.some(isNaN)) {
        display.value = "Invalid input for product-array";
        return;
    }
    const product = numbers.reduce((acc, num) => acc * num, 1);
    display.value = product.toString();
});