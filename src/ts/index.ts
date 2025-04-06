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
const nthRootButton = document.getElementById('nth-root') as HTMLButtonElement;
nthRootButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    // Placeholder for nth root logic.  Need a way to get 'n'.
    // For now, just calculate the square root.
    display.value = Math.sqrt(currentValue).toString();
});
const percentChangeButton = document.getElementById('percent-change') as HTMLButtonElement;
percentChangeButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    // Calculate percentage change (assuming previous value is 100)
    const percentageChange = ((currentValue - 100) / 100) * 100;
    display.value = percentageChange.toString();
});
// ... (Rest of the code)