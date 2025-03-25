// ... (Existing code)
const tenPowerButton = document.getElementById('ten-power');
if (tenPowerButton) {
    tenPowerButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            display.value = Math.pow(10, currentValue).toString();
        }
    });
}
// ... (Existing code)