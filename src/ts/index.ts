// ... (Existing code)
const inversePercentageButton = document.getElementById('inverse-percentage') as HTMLButtonElement;
inversePercentageButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const input = display.value;
    const number = Number(input);
    if (isNaN(number) || number === 0) {
        display.value = 'Error';
        return;
    }
    const result = 1 / (number /100);
    display.value = result.toString();
});
// ... (Rest of the code)