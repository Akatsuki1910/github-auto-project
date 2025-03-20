// ... (Existing code)
const sqrtButton = document.getElementById('sqrt') as HTMLButtonElement;
sqrtButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue) && currentValue >= 0) {
        display.value = Math.sqrt(currentValue).toString();
    } else {
        display.value = 'Error';
    }
});
const powButton = document.getElementById('pow') as HTMLButtonElement;
powButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.pow(currentValue, 2).toString();
    } else {
        display.value = 'Error';
    }
});