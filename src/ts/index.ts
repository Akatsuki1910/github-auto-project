// ... (Existing code)
const roundToDecimalButton = document.getElementById('round-to-decimal') as HTMLButtonElement;
roundToDecimalButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const number = parseFloat(display.value);
    const decimalPlacesInput = prompt('Enter the number of decimal places:', '2');
    if (decimalPlacesInput === null) return;
    const decimalPlaces = parseInt(decimalPlacesInput);
    if (isNaN(number) || isNaN(decimalPlaces)) {
        display.value = 'Error: Invalid input';
        return;
    }
    const roundedNumber = math.round(number, decimalPlaces);
    display.value = roundedNumber.toString();
});
// ... (Rest of the code)