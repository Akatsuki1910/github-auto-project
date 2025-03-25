// ... (Existing code)
const acosButton = document.getElementById('acos');
if (acosButton) {
    acosButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        const currentValue = parseFloat(display.value);
        display.value = Math.acos(currentValue).toString();
    });
}
// ... (Existing code)