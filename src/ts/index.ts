// ... (Existing code)
const calculateInverseSineButton = document.getElementById('calculate-inverse-sine') as HTMLButtonElement;
calculateInverseSineButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    display.value = Math.asin(currentValue).toString();
});