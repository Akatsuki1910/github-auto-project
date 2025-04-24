// ... (Existing code)
const log2Button = document.getElementById('log2');
log2Button?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.log2(currentValue).toString();
    }
});