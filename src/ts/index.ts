// ... (Existing code)
const truncButton = document.getElementById('trunc');
if (truncButton) {
    truncButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        const currentValue = parseFloat(display.value);
        display.value = Math.trunc(currentValue).toString();
    });
}
// ... (Existing code)