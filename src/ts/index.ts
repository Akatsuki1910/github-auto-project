// ... (Existing code)
const calculateNaturalLogarithmButton = document.getElementById('calculate-natural-logarithm') as HTMLButtonElement;
calculateNaturalLogarithmButton.addEventListener('click', () => {
    const valueString = prompt('Enter the value:');
    if (valueString) {
        const value = Number(valueString);
        const naturalLogarithm = Math.log(value);
        display.value = naturalLogarithm.toString();
    }
});
// ... (Rest of the code)