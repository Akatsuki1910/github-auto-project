// ... (Existing code)
const rangeButton = document.getElementById('range') as HTMLButtonElement;
rangeButton.addEventListener('click', () => {
    const currentValue = display.value;
    const numbers = currentValue.split(',').map(Number);
    if (numbers.some(isNaN)) {
        display.value = "Invalid input for range";
        return;
    }
    numbers.sort((a, b) => a - b);
    const range = numbers[numbers.length - 1] - numbers[0];
    display.value = range.toString();
});