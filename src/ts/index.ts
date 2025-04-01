// ... (Existing code)
const roundToNButton = document.getElementById('round-to-n') as HTMLButtonElement;
roundToNButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const [number, decimalPlaces] = display.value.split(',').map(Number);
    if (isNaN(number) || isNaN(decimalPlaces)) {
        display.value = 'Error: Enter number,decimalPlaces';
        return;
    }
    const roundedNumber = math.round(number, decimalPlaces);
    display.value = roundedNumber.toString();
});
// ... (Rest of the code)