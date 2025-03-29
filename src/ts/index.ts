// ... (Existing code)
const absButton = document.getElementById('calculate-absolute') as HTMLButtonElement;
absButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const absValue = Math.abs(currentValue);
        display.value = absValue.toString();
    }
});
//...(rest of the code)