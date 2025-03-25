// ... (Existing code)
const inverseButton = document.getElementById('inverse');
if (inverseButton) {
    inverseButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue) && currentValue !== 0) {
            display.value = (1 / currentValue).toString();
        }
    });
}
// ... (Existing code)