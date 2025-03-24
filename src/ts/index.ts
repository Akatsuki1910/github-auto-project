// ... (Existing code)
const averageButton = document.getElementById('average');
averageButton.addEventListener('click', () => {
    const display = document.getElementById('display');
    const numbers = display.value.split('+').map(Number);
    if (numbers.some(isNaN)) {
        display.value = 'Invalid Input';
    }
    else {
        const sum = numbers.reduce((a, b) => a + b, 0);
        const average = sum / numbers.length;
        display.value = average.toString();
    }
});