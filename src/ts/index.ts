// ... (Existing code)
const reciprocalButton = document.getElementById('reciprocal') as HTMLButtonElement;
reciprocalButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue) && currentValue !== 0) {
        display.value = (1 / currentValue).toString();
    }
});