// ... (Existing code)
const roundToTwoDecimalsButton = document.getElementById('round-to-two-decimals') as HTMLButtonElement;
roundToTwoDecimalsButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const roundedValue = parseFloat(currentValue.toFixed(2));
        display.value = roundedValue.toString();
    }
});
//...(rest of the code)