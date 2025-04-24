// ... (Existing code)
const asinButton = document.getElementById('asin');
asinButton?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.asin(currentValue).toString();
    }
});