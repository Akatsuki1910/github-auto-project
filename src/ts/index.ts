// ... (Existing code)
const calculateDiscountButton = document.getElementById('calculate-discount');
const display = document.getElementById('display') as HTMLInputElement;

calculateDiscountButton?.addEventListener('click', () => {
    const num = parseFloat(display.value);
    if (!isNaN(num)) {
        const discount = num * 0.10;
        display.value = (num - discount).toFixed(2).toString();
    }
});
const clearDisplayButton = document.getElementById('clear-display');

clearDisplayButton?.addEventListener('click', () => {
    display.value = '';
});

// ... (Rest of the existing code)