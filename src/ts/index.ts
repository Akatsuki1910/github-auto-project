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
const avgButton = document.getElementById('avg');
avgButton.addEventListener('click', () => {
    const display = document.getElementById('display');
    const numbers = display.value.split('+').map(Number);
    if (numbers.some(isNaN)) {
        display.value = 'Invalid Input';
        return;
    }
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    const avg = sum / numbers.length;
    display.value = avg.toString();
});