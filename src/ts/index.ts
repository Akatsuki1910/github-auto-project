// ... (Existing code)
const tanButton = document.getElementById('tan');
if (tanButton) {
    tanButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        const currentValue = parseFloat(display.value);
        display.value = Math.tan(currentValue).toString();
    });
}
// ... (Existing code)