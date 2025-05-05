// ... (Existing code)
const twoToThePowerXButton = document.getElementById('two-to-the-power-x') as HTMLButtonElement;
twoToThePowerXButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.pow(2, currentValue).toString();
    }
});
// ... (Rest of existing code)