// ... (Existing code)
const calculateInverseButton = document.getElementById('calculate-inverse') as HTMLButtonElement;
calculateInverseButton.addEventListener('click', () => {
    const numberString = prompt('Enter a number:');
    if (numberString) {
        const number = Number(numberString);
        if (number === 0) {
            display.value = 'Error: Division by zero';
        } else {
            const inverseValue = 1 / number;
            display.value = inverseValue.toString();
        }
    }
});
// ... (Rest of the code)