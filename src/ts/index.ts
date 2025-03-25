// ... (Existing code)
const asinButton = document.getElementById('asin');
if (asinButton) {
    asinButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        const currentValue = parseFloat(display.value);
        display.value = Math.asin(currentValue).toString();
    });
}
// ... (Existing code)