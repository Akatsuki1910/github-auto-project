// ... (Existing code)
const sumButton = document.getElementById('sum');
sumButton.addEventListener('click', () => {
    const display = document.getElementById('display');
    const numbers = display.value.split('+').map(Number);
    if (numbers.some(isNaN)) {
        display.value = 'Invalid Input';
    }
    else {
        const sum = numbers.reduce((a, b) => a + b, 0);
        display.value = sum.toString();
    }
});