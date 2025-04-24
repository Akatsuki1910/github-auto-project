// ... (Existing code)
const tenXButton = document.getElementById('tenX');
tenXButton?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.pow(10, currentValue).toString();
    }
});