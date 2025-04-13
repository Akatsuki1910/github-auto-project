// ... (Existing code)
const calculateRoundButton = document.getElementById('calculate-round') as HTMLButtonElement;
calculateRoundButton.addEventListener('click', () => {
    const value = parseFloat(display.value);
    if (isNaN(value)) {
        alert('Invalid input for round.');
        return;
    }
    display.value = Math.round(value).toString();
});