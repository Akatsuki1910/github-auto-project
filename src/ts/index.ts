// ... (Existing code)
const calculateExponentButton = document.getElementById('calculate-exponent') as HTMLButtonElement;
calculateExponentButton.addEventListener('click', () => {
    const base = parseFloat(prompt('Enter the base:') || '0');
    const exponent = parseFloat(prompt('Enter the exponent:') || '0');
    display.value = Math.pow(base, exponent).toString();
});