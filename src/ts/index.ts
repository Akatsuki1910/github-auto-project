// ... (Existing code)
const tenToThePowerXButton = document.getElementById('ten-to-the-power-x') as HTMLButtonElement;
tenToThePowerXButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.pow(10, currentValue).toString();
    }
});