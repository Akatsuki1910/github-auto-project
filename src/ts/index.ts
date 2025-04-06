// ... (Existing code)
const roundToDecimalButton = document.getElementById('round-to-decimal') as HTMLButtonElement;
roundToDecimalButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const input = display.value;
    const number = Number(input);
    if (isNaN(number)) {
        display.value = 'Error';
        return;
    }
    const decimalPlaces = prompt('Enter the number of decimal places:', '2');
    if (decimalPlaces === null || isNaN(Number(decimalPlaces))) {
        return;
    }
    const roundedNumber = number.toFixed(Number(decimalPlaces));
    display.value = roundedNumber;
});
// ... (Rest of the code)