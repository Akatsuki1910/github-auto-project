// ... (Existing code)
const duplicateButton = document.getElementById('duplicate');
duplicateButton?.addEventListener('click', () => {
    const currentValue = display.value;
    display.value += currentValue;
});
const toFixedButton = document.getElementById('toFixed');
toFixedButton?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = currentValue.toFixed(2);
    }
});
const eButton = document.getElementById('e');
eButton?.addEventListener('click', () => {
    display.value += Math.E;
});