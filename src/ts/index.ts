// ... (Existing code)
const asecButton = document.getElementById('asec');
if (asecButton) {
    asecButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        const currentValue = parseFloat(display.value);
        display.value = (1 / Math.cos(currentValue)).toString();
    });
}
// ... (Existing code)