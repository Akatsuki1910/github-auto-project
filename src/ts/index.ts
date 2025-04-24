// ... (Existing code)
const logButton = document.getElementById('log');
logButton?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.log(currentValue).toString();
    }
});