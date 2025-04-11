// ... (Existing code)
const calculateLog10Button = document.getElementById('calculate-log10') as HTMLButtonElement;
calculateLog10Button.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = math.log10(currentValue).toString();
    }
});