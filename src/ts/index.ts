// ... (Existing code)
const calculateExponentButton = document.getElementById('calculate-exponent') as HTMLButtonElement;
calculateExponentButton.addEventListener('click', () => {
    const currentValue = display.value;
    const number = Number(currentValue);
    if (isNaN(number)) {
        display.value = "Invalid input";
        return;
    }
    display.value = Math.exp(number).toString();
});