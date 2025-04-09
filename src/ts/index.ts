// ... (Existing code)
const calculateLog10Button = document.getElementById('calculate-natural-logarithm-base10') as HTMLButtonElement;
calculateLog10Button.addEventListener('click', () => {
    const valueString = prompt('Enter the value:');
    if (valueString) {
        const value = Number(valueString);
        const log10 = Math.log10(value);
        display.value = log10.toString();
    }
});
// ... (Rest of the code)