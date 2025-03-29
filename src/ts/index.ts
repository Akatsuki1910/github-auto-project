// ... (Existing code)
const roundDownButton = document.getElementById('round-down') as HTMLButtonElement;
roundDownButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const roundedValue = Math.floor(currentValue);
        display.value = roundedValue.toString();
    }
});
//...(rest of the code)