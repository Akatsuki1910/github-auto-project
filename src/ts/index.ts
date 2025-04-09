// ... (Existing code)
const calculateExponentiationButton = document.getElementById('calculate-exponentiation') as HTMLButtonElement;
calculateExponentiationButton.addEventListener('click', () => {
    const valueString = prompt('Enter the value:');
    if (valueString) {
        const value = Number(valueString);
        const exponentiation = Math.exp(value);
        display.value = exponentiation.toString();
    }
});
// ... (Rest of the code)