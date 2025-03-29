// ... (Existing code)
const log10Button = document.getElementById('calculate-log10') as HTMLButtonElement;
log10Button.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const log10Value = Math.log10(currentValue);
        display.value = log10Value.toString();
    }
});
//...(rest of the code)