// ... (Existing code)
const atanButton = document.getElementById('atan');
atanButton?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.atan(currentValue).toString();
    }
});