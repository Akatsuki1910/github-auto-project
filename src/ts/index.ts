// ... (Existing code)
const sinButton = document.getElementById('sin');
if (sinButton) {
    sinButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        const currentValue = parseFloat(display.value);
        display.value = Math.sin(currentValue).toString();
    });
}
// ... (Existing code)