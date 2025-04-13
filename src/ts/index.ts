// ... (Existing code)
const calculateExponentButton = document.getElementById('calculate-exponent') as HTMLButtonElement;
calculateExponentButton.addEventListener('click', () => {
    const base = parseFloat(prompt('Enter the base:') || '0');
    const exponent = parseFloat(prompt('Enter the exponent:') || '0');
    display.value = Math.pow(base, exponent).toString();
});
const calculateLogButton = document.getElementById('calculate-log') as HTMLButtonElement;
calculateLogButton.addEventListener('click', () => {
    const value = parseFloat(prompt('Enter the value for log (base 10):') || '0');
    display.value = Math.log10(value).toString();
});
const calculateNaturalLogButton = document.getElementById('calculate-natural-log') as HTMLButtonElement;
calculateNaturalLogButton.addEventListener('click', () => {
    const value = parseFloat(prompt('Enter the value for ln:') || '0');
    display.value = Math.log(value).toString();
});