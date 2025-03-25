// ... (Existing code)
const expButton = document.getElementById('exp');
if (expButton) {
    expButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            display.value = Math.exp(currentValue).toString();
        }
    });
}
// ... (Existing code)