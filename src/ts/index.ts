// ... (Existing code)
const fifthPowerButton = document.getElementById('fifth-power') as HTMLButtonElement;
fifthPowerButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const input = display.value;
    const number = Number(input);
    if (isNaN(number)) {
        display.value = 'Error';
        return;
    }
    const fifthPower = Math.pow(number, 5);
    display.value = fifthPower.toString();
});
// ... (Rest of the code)