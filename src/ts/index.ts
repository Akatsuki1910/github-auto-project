// ... (Existing code)
const lnButton = document.getElementById('ln') as HTMLButtonElement;
const display = document.getElementById('display') as HTMLInputElement;
lnButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue) && currentValue > 0) {
        display.value = Math.log(currentValue).toString();
    }
});