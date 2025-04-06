// ... (Existing code)
const medianButton = document.getElementById('median') as HTMLButtonElement;
medianButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const input = display.value;
    const numbers = input.split(',').map(Number);
    if (numbers.some(isNaN)) {
        display.value = 'Error';
        return;
    }
    numbers.sort((a, b) => a - b);
    const mid = Math.floor(numbers.length / 2);
    const median = numbers.length % 2 === 0 ? (numbers[mid - 1] + numbers[mid]) / 2 : numbers[mid];
    display.value = median.toString();
});
// ... (Rest of the code)