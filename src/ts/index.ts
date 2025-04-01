// ... (Existing code)
const truncateButton = document.getElementById('truncate') as HTMLButtonElement;
truncateButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const number = parseFloat(display.value);
    if (isNaN(number)) {
        display.value = 'Error: Invalid number';
        return;
    }
    const truncatedNumber = math.trunc(number);
    display.value = truncatedNumber.toString();
});
// ... (Rest of the code)