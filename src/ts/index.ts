// ... (Existing code)
const tenthPowerButton = document.getElementById('tenth-power') as HTMLButtonElement;
tenthPowerButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const input = display.value;
    const number = Number(input);
    if (isNaN(number)) {
        display.value = 'Error';
        return;
    }
    const tenthPower = Math.pow(number, 10);
    display.value = tenthPower.toString();
});
// ... (Rest of the code)