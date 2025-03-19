// ... (Existing code)
const log10Button = document.getElementById('log10') as HTMLButtonElement;
log10Button.addEventListener('click', () => {
    if (display.value) {
        const currentValue = parseFloat(display.value);
        display.value = Math.log10(currentValue).toString();
    }
});