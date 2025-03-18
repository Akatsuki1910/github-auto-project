// ... (Existing code)
const factorialButton = document.getElementById('factorial') as HTMLButtonElement;
factorialButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (isNaN(currentValue)) {
        display.value = 'Invalid input';
        return;
    }
    if (currentValue < 0) {
        display.value = 'Factorial not defined for negative numbers';
        return;
    }
    let result = 1;
    for (let i = 2; i <= currentValue; i++) {
        result *= i;
    }
    display.value = result.toString();
});