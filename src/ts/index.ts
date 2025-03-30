// ... (Existing code)
const averageButton = document.getElementById('average') as HTMLButtonElement;
averageButton.addEventListener('click', () => {
    const currentValue = display.value;
    const numbers = currentValue.split(',').map(Number);
    if (numbers.some(isNaN)) {
        display.value = "Invalid input for average";
    }
    else {
        const sum = numbers.reduce((a, b) => a + b, 0);
        const average = sum / numbers.length;
        display.value = average.toString();
    }
});