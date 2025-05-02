// ... (Existing code)
const factorialButton = document.getElementById('factorial') as HTMLButtonElement;
factorialButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue) && currentValue >= 0 && Number.isInteger(currentValue)) {
        let result = 1;
        for (let i = 1; i <= currentValue; i++) {
            result *= i;
        }
        display.value = result.toString();
    }
    else {
        display.value = 'Invalid input';
    }
});
// ... (Rest of existing code)