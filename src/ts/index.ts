// ... (Existing code)
const calculateExponentButton = document.getElementById('calculateExponent') as HTMLButtonElement;
calculateExponentButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    display.value = (Math.exp(currentValue)).toString();
});
const inverseSignButton = document.getElementById('inverse-sign') as HTMLButtonElement;
inverseSignButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    display.value = (-currentValue).toString();
});
// ... (Rest of the code)