// ... (Existing code)
const calculateExpm1Button = document.getElementById('calculate-expm1') as HTMLButtonElement;
calculateExpm1Button.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = math.expm1(currentValue).toString();
    }
});