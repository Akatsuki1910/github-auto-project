// ... (Existing code)
const medianButton = document.getElementById('median');
medianButton.addEventListener('click', () => {
    const input = display.value;
    const numbers = input.split(',').map(Number).sort((a, b) => a - b);
    if (numbers.some(isNaN)) {
        display.value = 'Invalid input';
    }
    else {
        const mid = Math.floor(numbers.length / 2);
        const median = numbers.length % 2 === 0 ? (numbers[mid - 1] + numbers[mid]) / 2 : numbers[mid];
        display.value = median.toString();
    }
});
// ... (Rest of existing code)