// ... (Existing code)
const roundUpButton = document.getElementById('round-up') as HTMLButtonElement;
roundUpButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const roundedValue = Math.ceil(currentValue);
        display.value = roundedValue.toString();
    }
});
//...(rest of the code)