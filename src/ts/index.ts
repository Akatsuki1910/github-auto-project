// ... (Existing code)
const acscButton = document.getElementById('acsc');
if (acscButton) {
    acscButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        const currentValue = parseFloat(display.value);
        display.value = (1 / Math.sin(currentValue)).toString();
    });
}
// ... (Existing code)