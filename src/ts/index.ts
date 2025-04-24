// ... (Existing code)
const duplicateButton = document.getElementById('duplicate');
duplicateButton?.addEventListener('click', () => {
    const currentValue = display.value;
    display.value += currentValue;
});
const toFixedButton = document.getElementById('toFixed');
tFixedButton?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = currentValue.toFixed(2);
    }
});