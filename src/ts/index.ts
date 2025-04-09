// ... (Existing code)
const calculateLogarithmBaseButton = document.getElementById('calculate-logarithm-base') as HTMLButtonElement;
calculateLogarithmBaseButton.addEventListener('click', () => {
    const valueString = prompt('Enter the value:');
    const baseString = prompt('Enter the base:');
    if (valueString && baseString) {
        const value = Number(valueString);
        const base = Number(baseString);
        const logarithm = Math.log(value) / Math.log(base);
        display.value = logarithm.toString();
    }
});
// ... (Rest of the code)