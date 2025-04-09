// ... (Existing code)
const calculateAbsoluteValueButton = document.getElementById('calculate-absolute-value') as HTMLButtonElement;
calculateAbsoluteValueButton.addEventListener('click', () => {
    const numberString = prompt('Enter a number:');
    if (numberString) {
        const number = Number(numberString);
        const absoluteValue = Math.abs(number);
        display.value = absoluteValue.toString();
    }
});
// ... (Rest of the code)