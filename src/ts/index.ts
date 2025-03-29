// ... (Existing code)
const roundButton = document.getElementById('round') as HTMLButtonElement;
const display = document.getElementById('display') as HTMLInputElement;
roundButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.round(currentValue).toString();
    }
});