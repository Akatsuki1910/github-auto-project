// ... (Existing code)
const minButton = document.getElementById('min');
minButton.addEventListener('click', () => {
    const display = document.getElementById('display');
    const numbers = display.value.split('+').map(Number);
    if (numbers.some(isNaN)) {
        display.value = 'Invalid Input';
    }
    else {
        const min = Math.min(...numbers);
        display.value = min.toString();
    }
});
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