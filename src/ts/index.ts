// ... (Existing code)
const medianButton = document.getElementById('median') as HTMLButtonElement;
medianButton.addEventListener('click', () => {
    const currentValue = display.value;
    const numbers = currentValue.split(',').map(Number).sort((a, b) => a - b);
    if (numbers.some(isNaN)) {
        display.value = "Invalid input for median";
    }
    else {
        const mid = Math.floor(numbers.length / 2);
        const median = numbers.length % 2 === 0 ? (numbers[mid - 1] + numbers[mid]) / 2 : numbers[mid];
        display.value = median.toString();
    }
});