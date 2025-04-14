// ... (Existing code)
const exp10Button = document.getElementById('exp10') as HTMLButtonElement;
exp10Button.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.pow(10, currentValue).toString();
    } else {
        display.value = 'Error';
    }
});