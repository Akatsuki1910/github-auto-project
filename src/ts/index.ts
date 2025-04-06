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
// ... (Rest of the code)