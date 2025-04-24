// ... (Existing code)
const tanButton = document.getElementById('tan');
tanButton?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.tan(currentValue).toString();
    }
});