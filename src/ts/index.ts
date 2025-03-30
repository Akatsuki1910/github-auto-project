// ... (Existing code)
const sumButton = document.getElementById('sum') as HTMLButtonElement;
sumButton.addEventListener('click', () => {
    const currentValue = display.value;
    const numbers = currentValue.split('+').map(Number);
    if (numbers.some(isNaN)) {
        display.value = "Invalid input for sum";
    }
    else {
        const sum = numbers.reduce((a, b) => a + b, 0);
        display.value = sum.toString();
    }
});