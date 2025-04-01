// ... (Existing code)
const tenPowerXButton = document.getElementById('ten-power-x') as HTMLButtonElement;
tenPowerXButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const value = parseFloat(display.value);
    if (isNaN(value)) {
        display.value = 'Error: Invalid input';
        return;
    }
    const result = Math.pow(10, value);
    display.value = result.toString();
});
// ... (Rest of the code)