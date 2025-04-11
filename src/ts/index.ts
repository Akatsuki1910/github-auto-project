// ... (Existing code)
const calculateFactorialButton = document.getElementById('calculate-factorial') as HTMLButtonElement;
calculateFactorialButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = math.factorial(currentValue).toString();
    }
});