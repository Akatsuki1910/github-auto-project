// ... (Existing code)
const roundToDecimalButton = document.getElementById('round-to-decimal') as HTMLButtonElement;
roundToDecimalButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    const decimalPlacesInput = prompt('Enter the number of decimal places:', '2');
    const decimalPlaces = parseInt(decimalPlacesInput || '2', 10);
    if (!isNaN(currentValue) && !isNaN(decimalPlaces)) {
        const roundedValue = parseFloat(currentValue.toFixed(decimalPlaces));
        display.value = roundedValue.toString();
    }
});
//...(rest of the code)