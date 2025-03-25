// ... (Existing code)
const log10Button = document.getElementById('log10');
if (log10Button) {
    log10Button.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue) && currentValue > 0) {
            display.value = Math.log10(currentValue).toString();
        }
    });
}
// ... (Existing code)