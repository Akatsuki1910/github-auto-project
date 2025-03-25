// ... (Existing code)
const atanButton = document.getElementById('atan');
if (atanButton) {
    atanButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        const currentValue = parseFloat(display.value);
        display.value = Math.atan(currentValue).toString();
    });
}
// ... (Existing code)