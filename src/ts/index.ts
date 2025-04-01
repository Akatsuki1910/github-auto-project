// ... (Existing code)
const twoPowerXButton = document.getElementById('two-power-x') as HTMLButtonElement;
twoPowerXButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const value = parseFloat(display.value);
    if (isNaN(value)) {
        display.value = 'Error: Invalid input';
        return;
    }
    const result = Math.pow(2, value);
    display.value = result.toString();
});
// ... (Rest of the code)