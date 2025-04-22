// ... (Existing code)
const averageButton = document.getElementById('average');
averageButton.addEventListener('click', () => {
    const input = display.value;
    const numbers = input.split(',').map(Number);
    if (numbers.some(isNaN)) {
        display.value = 'Invalid input';
    }
    else {
        const sum = numbers.reduce((a, b) => a + b, 0);
        const average = sum / numbers.length;
        display.value = average.toString();
    }
});
// ... (Rest of existing code)