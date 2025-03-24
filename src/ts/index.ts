// ... (Existing code)
const maxButton = document.getElementById('max');
maxButton.addEventListener('click', () => {
    const display = document.getElementById('display');
    const numbers = display.value.split('+').map(Number);
    if (numbers.some(isNaN)) {
        display.value = 'Invalid Input';
    }
    else {
        const max = Math.max(...numbers);
        display.value = max.toString();
    }
});