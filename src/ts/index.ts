// ... (Existing code)
const toFixedButton = document.getElementById('toFixed');
toFixedButton?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = currentValue.toFixed(2);
    }
});