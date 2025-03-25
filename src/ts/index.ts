// ... (Existing code)
const absButton = document.getElementById('abs');
if (absButton) {
    absButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            display.value = Math.abs(currentValue).toString();
        }
    });
}
// ... (Existing code)