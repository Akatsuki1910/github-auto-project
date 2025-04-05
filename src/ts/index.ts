// ... (Existing code)
const expButton = document.getElementById('exp') as HTMLButtonElement;
expButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.exp(currentValue).toString();
    }
});
const lnButton = document.getElementById('ln') as HTMLButtonElement;
lnButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue) && currentValue > 0) {
        display.value = Math.log(currentValue).toString();
    }
});
// ... (Rest of the code)