// ... (Existing code)
const calculateDoubleButton = document.getElementById('calculate-double') as HTMLButtonElement;
calculateDoubleButton.addEventListener('click', () => {
    const numberString = prompt('Enter a number:');
    if (numberString) {
        const number = Number(numberString);
        const doubledValue = number * 2;
        display.value = doubledValue.toString();
    }
});
// ... (Rest of the code)