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