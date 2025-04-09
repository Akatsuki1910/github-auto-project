// ... (Existing code)
const calculateTripleButton = document.getElementById('calculate-triple') as HTMLButtonElement;
calculateTripleButton.addEventListener('click', () => {
    const numberString = prompt('Enter a number:');
    if (numberString) {
        const number = Number(numberString);
        const tripledValue = number * 3;
        display.value = tripledValue.toString();
    }
});
// ... (Rest of the code)