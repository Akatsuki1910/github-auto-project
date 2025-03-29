// ... (Existing code)
const log2Button = document.getElementById('calculate-log2') as HTMLButtonElement;
log2Button.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const log2Value = Math.log2(currentValue);
        display.value = log2Value.toString();
    }
});
//...(rest of the code)