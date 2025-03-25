// ... (Existing code)
const cbrtButton = document.getElementById('cbrt');
if (cbrtButton) {
    cbrtButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        const currentValue = parseFloat(display.value);
        display.value = Math.cbrt(currentValue).toString();
    });
}
// ... (Existing code)