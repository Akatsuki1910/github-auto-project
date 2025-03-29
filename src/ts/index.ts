// ... (Existing code)
const log1pButton = document.getElementById('calculate-log1p') as HTMLButtonElement;
log1pButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const log1pValue = Math.log1p(currentValue);
        display.value = log1pValue.toString();
    }
});
//...(rest of the code)