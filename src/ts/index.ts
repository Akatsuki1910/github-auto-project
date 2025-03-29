// ... (Existing code)
const absButton = document.getElementById('abs') as HTMLButtonElement;
const display = document.getElementById('display') as HTMLInputElement;
absButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.abs(currentValue).toString();
    }
});