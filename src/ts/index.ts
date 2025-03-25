// ... (Existing code)
const cotButton = document.getElementById('cot');
if (cotButton) {
    cotButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        const currentValue = parseFloat(display.value);
        display.value = (1 / Math.tan(currentValue)).toString();
    });
}
// ... (Existing code)