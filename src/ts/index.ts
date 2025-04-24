// ... (Existing code)
const exp2Button = document.getElementById('exp2');
exp2Button?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.pow(2, currentValue).toString();
    }
});