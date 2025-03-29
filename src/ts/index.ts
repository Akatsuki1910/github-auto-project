// ... (Existing code)
const cbrtButton = document.getElementById('cbrt') as HTMLButtonElement;
const display = document.getElementById('display') as HTMLInputElement;
cbrtButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.cbrt(currentValue).toString();
    }
});