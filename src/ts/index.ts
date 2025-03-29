// ... (Existing code)
const expButton = document.getElementById('exp') as HTMLButtonElement;
const display = document.getElementById('display') as HTMLInputElement;
expButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.exp(currentValue).toString();
    }
});