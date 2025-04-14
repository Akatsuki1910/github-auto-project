// ... (Existing code)
const log2Button = document.getElementById('log2') as HTMLButtonElement;
log2Button.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue) && currentValue > 0) {
        display.value = Math.log2(currentValue).toString();
    } else {
        display.value = 'Error';
    }
});